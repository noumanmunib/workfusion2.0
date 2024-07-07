FROM php:7.4-fpm-alpine

# Install additional packages if needed
RUN apk add --no-cache nginx supervisor git

# Set up Nginx configuration
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Set working directory
WORKDIR /app

# Copy application files
COPY . /app

# Install Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php --install-dir=/usr/local/bin --filename=composer \
    && composer install --no-dev --optimize-autoloader

# Expose port
EXPOSE 80

# Start Nginx and PHP-FPM
CMD ["nginx", "-g", "daemon off;"]