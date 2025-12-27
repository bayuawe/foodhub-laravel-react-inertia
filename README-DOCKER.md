# FoodHub Docker Setup Guide

This guide will help you run the application using Docker.

## Prerequisites

-   [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

## Installation

1.  **Clone the repository** (if you haven't already).

2.  **Environment Setup**:
    Copy the `.env.example` file to `.env` and configure your database settings to match `docker-compose.yml`.

    ```bash
    cp .env.example .env
    ```

    Update `.env` with these values:

    ```ini
    DB_CONNECTION=mysql
    DB_HOST=db
    DB_PORT=3306
    DB_DATABASE=foodhub
    DB_USERNAME=root
    DB_PASSWORD=root
    ```

3.  **Build and Run**:
    Run the following command to build the images and start the containers.

    ```bash
    docker-compose up -d --build
    ```

    This will start:

    -   **App**: PHP-FPM container.
    -   **Webserver**: Nginx on port 8000.
    -   **DB**: MySQL 8.0.

4.  **Install Dependencies**:
    Once the containers are running, install PHP dependencies inside the container.

    ```bash
    docker-compose exec app composer install
    ```

    Generate the application key:

    ```bash
    docker-compose exec app php artisan key:generate
    ```

5.  **Database Setup**:
    Run migrations and seeders.

    ```bash
    docker-compose exec app php artisan migrate:fresh --seed
    ```

6.  **Frontend Assets**:
    Install Node.js dependencies and build assets.

    ```bash
    docker-compose exec app npm install
    docker-compose exec app npm run build
    ```

## Accessing the Application

Open your browser and visit: [http://localhost:8000](http://localhost:8000)

## Common Commands

-   **Stop containers**: `docker-compose down`
-   **View logs**: `docker-compose logs -f`
-   **Run Artisan command**: `docker-compose exec app php artisan <command>`
-   **Access App Shell**: `docker-compose exec app bash`
