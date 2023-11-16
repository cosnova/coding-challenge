# Docker
Custom Docker for development

## Setup

- Copy **.env.example** to **.env**
```
cp .env.example .env
```

- Change \<docker\> to your project name in the **.env**
```
COMPOSE_PROJECT_NAME=docker
```

## Commands

Start and run the containers in the background
```
docker compose up -d
```
---
List the containers
```
docker compose ps
```
---
Enter **workspace** container console
```
docker compose exec workspace ash
```
---
Stop the containers
```
docker compose stop
```
---
Delete everything, including images and orphan containers
```
docker compose down -v --rmi all --remove-orphans
```
---
Delete all unused images
```
docker image prune -a
```
---
Delete all unused containers
```
docker volume prune
```
