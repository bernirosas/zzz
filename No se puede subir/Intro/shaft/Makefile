.PHONY: tests
tests:
	bash runTest.sh

.PHONY: build
build:
	docker-compose build

.PHONY: up
up:
	docker compose up -d

.PHONY: up-all
up-all:
	docker compose --profile test up -d

.PHONY: up-test
up-test:
	docker compose up api-test -d

.PHONY: lint
lint:
	docker-compose run --rm api npm run lint

.PHONY: prettier
prettier:
	docker-compose run --rm api npm run prettier

.PHONY: migrate
migrate:
	docker compose exec api npx prisma migrate dev
	docker compose exec api-test npx prisma migrate dev

.PHONY: migrate-dev
migrate-dev:
	docker compose exec api npx prisma migrate dev

.PHONY: migrate-test
migrate-test:
	docker compose exec api-test npx prisma migrate dev

.PHONY: migrate-reset
migrate-reset:
	docker compose exec api npx prisma migrate reset

.PHONY: seed
seed:
	docker-compose exec api npx prisma db seed

.PHONY: prisma
prisma:
	docker-compose exec api npx prisma studio

.PHONY: prisma-test
prisma-test:
	docker-compose exec api-test npx prisma studio -p 5556

.PHONY: generate
generate:
	docker-compose run --rm api npm run generate:graphql

