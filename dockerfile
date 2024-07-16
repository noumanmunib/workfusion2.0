# Use the official PHP image.
# https://hub.docker.com/_/php
FROM php:8.3-apache

# Install PHP extensions and tools
RUN docker-php-ext-install -j "$(nproc)" opcache

# Configure PHP for Cloud Run.
RUN set -ex; \
  { \
    echo "; Cloud Run enforces memory & timeouts"; \
    echo "memory_limit = -1"; \
    echo "max_execution_time = 0"; \
    echo "; File upload at Cloud Run network limit"; \
    echo "upload_max_filesize = 32M"; \
    echo "post_max_size = 32M"; \
    echo "; Configure Opcache for Containers"; \
    echo "opcache.enable = On"; \
    echo "opcache.validate_timestamps = Off"; \
    echo "; Configure Opcache Memory (Application-specific)"; \
    echo "opcache.memory_consumption = 32"; \
  } > "$PHP_INI_DIR/conf.d/cloud-run.ini"

# Set working directory
WORKDIR /var/www/html

# Copy the entire Laravel project into the container
COPY . .

# Use the PORT environment variable in Apache configuration files.
RUN sed -i "s/80/\$PORT/g" /etc/apache2/sites-available/000-default.conf /etc/apache2/ports.conf /etc/apache2/sites-enabled/000-default.conf

# Expose the port defined by the PORT environment variable.
EXPOSE $PORT

# Start Apache server.
CMD ["apache2-foreground"]