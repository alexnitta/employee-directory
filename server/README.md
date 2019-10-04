# employee-directory server

A backend that exposes a list of employees at an imaginary company, using Express, GraphQL and Dgraph.

## Getting started

## 1. Set up environment variables

See [./_docs/dotenv.md](./_docs/dotenv.md) for notes on how to set up your environment variables.

## 2. Run with Docker

- Start up Dgraph and GraphQL: `docker-compose up`
  - Dgraph UI will be up at: [http://localhost:8000](http://localhost:8000)
  - Dgraph database will be up at: [http://localhost:9080](http://localhost:9080)
  - GraphQL playground will be up at: [http://localhost:8001/playground](http://localhost:8001/playground)
  - GraphQL will be up at: [http://localhost:8001/graphql](http://localhost:8001/graphql)

## 3. Database scripts

There are some scripts that will be useful in managing the database.

1. `init-db`: Run this command to wipe the database and intialize it with the schema.
    ```
    docker-compose exec api npm run init-db
    ```
    This will run the `init-db` script defined in package.json within the api container.

2. `seed-db`: Run this command to wipe the database, initialize it with the schema, and import some sample data.
    ```
    docker-compose exec api npm run seed-db
    ```
    This will run the `seed-db` script defined in package.json within the api container.
