# Two Tier Application On Docker

A two-tier application deployed using Docker containers, consisting of a frontend and a database layer.

## Project Structure

```
.
├── frontend/          # Frontend application
├── database/          # Database configuration
├── docker-compose.yml # Docker Compose configuration
└── commandes.txt      # Useful commands reference
```

## Prerequisites

- Docker
- Docker Compose

## Getting Started

1. Clone this repository
2. Navigate to the project directory
3. Run the application:

```bash
docker-compose up -d
```

## Stopping the Application

```bash
docker-compose down
```

## Architecture

This application follows a two-tier architecture:
- **Frontend Tier**: Web application interface
- **Database Tier**: Data storage and management

## Configuration

See `docker-compose.yml` for service configurations and port mappings.
