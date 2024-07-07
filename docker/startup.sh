#!/bin/sh

# Replace LISTEN_PORT with your actual port in nginx.conf
sed -i "s/LISTEN_PORT/SOME_PORT/g" /etc/nginx/nginx.conf

# Start supervisord with the specified configuration file
/usr/bin/supervisord -c /app/docker/supervisord.conf