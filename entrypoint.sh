#!/bin/sh

set -e

while ! nc -z db 5432; do
  sleep 1
done

php artisan key:generate
php artisan migrate --force

chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

npm run dev -- --host &

exec "$@"