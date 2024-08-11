# Shaft

A backend for handling coding courses information

## Getting Started

Steps to run the (local) server for the first time:

- [Shaft](#shaft)
  - [Getting Started](#getting-started)
  - [To start the server 🚀](#to-start-the-server-)
  - [Set environment variables :ninja:](#set-environment-variables-ninja)
  - [To run eslint :detective:](#to-run-eslint-detective)
  - [To run migrations 🗃️](#to-run-migrations-️)
  - [To run seeds :seedling:](#to-run-seeds-seedling)
  - [To start prisma studio :notebook:](#to-start-prisma-studio-notebook)
  - [To run tests](#to-run-tests)
  - [To run codegen :dizzy:](#to-run-codegen-dizzy)
  - [To stop the server 🛑](#to-stop-the-server-)
  - [To kill containers :skull:](#to-kill-containers-skull)

## To start the server 🚀

If a new :package: is added or changes are made in prisma's schema run:

```shell
docker-compose build
```

then run:

```shell
docker compose up -d
```

If the testing server is also needed:

- To start only the test api, run:

  ```shell
  docker compose up api-test -d
  ```

- To start all the services, run:

  ```shell
  docker compose --profile test up -d
  ```

> Also is important to add `WIN32=1` to the `.env` file if you are working on **Windows**. This variable will enable the hot reloading.

## Set environment variables :ninja:

> To run local you must create a file in the root directory called `.env` and set the same variables as those specified in `.env.example` file.

## To run eslint :detective:

```shell
docker-compose run --rm api npm run lint
```

## To run migrations 🗃️

- To run migrations in both databases

  ```shell
  make migrate
  ```

- Run migrations just in the main database

  ```shell
  docker compose exec api npx prisma migrate dev
  ```

- Run migrations just in the testing database

  ```shell
  docker compose exec api-test npx prisma migrate dev
  ```

> Run these commands with the api container running, otherwise run this command: `docker-compose run --rm api npx prisma migrate dev` and `docker-compose run --rm api-test npx prisma migrate dev`

## To run seeds :seedling:

```shell
docker-compose exec api npx prisma db seed
```

> Run this command with the api container running

## To start prisma studio :notebook:

```shell
docker-compose exec api npx prisma studio
```

> Run this command with the api container running.

## To run tests

```shell
make tests
```

> Run this command with the api container NOT running.

## To run codegen :dizzy:

```shell
docker-compose run --rm api npm run generate:graphql
```

## To stop the server 🛑

```shell
docker-compose stop
```

## To kill containers :skull:

```shell
docker-compose down
```
