/* eslint-disable no-undef */
const { join, resolve } = require('path');
const { copySync, removeSync } = require('fs-extra');
const mix = require('laravel-mix');
const findRemoveSync = require('find-remove');
const { GenerateSW } = require('workbox-webpack-plugin');
const fs = require('fs'); // Add this line to import fs module
require('laravel-mix-versionhash');

const serviceWorkerConfig = {
  // Additional manifest entries
  additionalManifestEntries: [{ url: '/', revision: Date.now().toString() }],
  
  // Fallback for navigate requests
  navigateFallback: '/',

  // Modify URL prefix
  modifyURLPrefix: {
    '//': '/'
  },

  // Exclude caching certain file types
  exclude: [/\.(?:png|jpg|jpeg|txt)$/],

  // Runtime caching strategies
  runtimeCaching: [
    {
      urlPattern: /icon/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'icons',
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    },
    {
      urlPattern: /api/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'apis',
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    },
    {
      urlPattern: /\.(?:svg|ico)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images'
      }
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 30,
          maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
        }
      }
    },
    {
      urlPattern: /^https:\/\/fonts\.googleapis\.com/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'google-fonts-stylesheets'
      }
    },
    {
      urlPattern: /^https:\/\/fonts\.gstatic\.com/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts-webfonts',
        cacheableResponse: {
          statuses: [0, 200]
        },
        expiration: {
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30
        }
      }
    }
  ],

  // Skip waiting on service worker update
  skipWaiting: true
};

mix
  .js('resources/js/app.js', 'public/dist/js')
  .vue({ extractStyles: true })
  .sass('resources/sass/app.scss', 'public/dist/css')
  .options({ processCssUrls: false })
  .disableNotifications();

if (mix.inProduction()) {
  mix
    .versionHash()
    .webpackConfig({
      plugins: [new GenerateSW(serviceWorkerConfig)],
      output: {
        chunkFilename: 'dist/js/[chunkhash].js',
        path: resolve(__dirname, './public/build'),
        publicPath: '/'
      }
    });
} else {
  mix.sourceMaps();
}

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '~': join(__dirname, './resources/js')
    }
  }
});

mix.then(() => {
  process.nextTick(() => {
    cleanOldBuild();

    if (mix.inProduction()) {
      publishAssets();
    }
  });
});

function cleanOldBuild() {
  const publicDir = resolve(__dirname, './public');
  findRemoveSync(publicDir, {
    maxLevel: 1,
    files: 'workbox|worker',
    regex: true
  });
}

function publishAssets() {
  const publicDir = resolve(__dirname, './public');
  const buildDir = join(publicDir, 'build');

  // Ensure build directory exists before copying
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir);
  }

  // Remove existing dist directory
  removeSync(join(publicDir, 'dist'));

  // Copy build contents to public directory
  copySync(buildDir, publicDir);

  // Remove the temporary build directory
  removeSync(buildDir);
}
