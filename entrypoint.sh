#!/bin/sh

# Exit script on any error
set -e

# Ensure the necessary environment variables are provided
if [ -z "$DATABASE_USER" ] || [ -z "$DATABASE_NAME" ] || [ -z "$DATABASE_PASSWORD" ] || [ -z "$DATABASE_PORT" ] || [ -z "$DATABASE_HOST" ]; then
    echo "Missing required environment variables (DATABASE_USER, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_HOST)"
    exit 1
fi

# Export the PostgreSQL password so that psql doesn't prompt for it
export PGPASSWORD="$DATABASE_PASSWORD"

# Check if the database exists, if not, create it
psql -h "$DATABASE_HOST" -U "$DATABASE_USER" -p "$DATABASE_PORT" -tc "SELECT 1 FROM pg_database WHERE datname = '$DATABASE_NAME'" | grep -q 1 || \
psql -h "$DATABASE_HOST" -U "$DATABASE_USER" -p "$DATABASE_PORT" -tc "CREATE DATABASE \"$DATABASE_NAME\";"

# Unset the password after use for security reasons
unset PGPASSWORD


if [ "$NODE_ENV" = "development" ]; then
    pnpm run migration:run:dev
else  
    pnpm run migration:run
fi


if [ "$NODE_ENV" = "production" ]; then
   npm run start:prod
else
    pnpm  start:dev
fi
# Call the CMD or other processes (pass control to the container's main process)
exec "$@"
