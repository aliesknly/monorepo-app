# MonorepoApp

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## Create enviroments APPS: `.env` file:

### - Core:

`CORE_DATABASE_NAME = <database name>`

`CORE_PORT = <number of port>`

### - Product:

`PRODUCT_DATABASE_NAME = <database name>`

`PRODUCT_PORT = <number of port>`

### - Store:

`STORE_DATABASE_NAME = <database name>`

`STORE_PORT = <number of port>`

## KAFKA Config

`MICSRV_KAFKA_BROKERS = "<url:port>"`
`MICSRV_KAFKA_USERNAME =  "<username>"`
`MICSRV_KAFKA_PASSWORD = "<password>"`

## Important:

Recommended to have `Docker` and use the command:
`docker compose up -d`

## Available Scripts:

In the project directory, you can run:

### `yarn`

Install all dependecies

### `nx build <target name>`

Compile the labraries for apps (backend, frontend). Target name is in `package.json` property name:
`"name": "@monorepo/utilities"`

### `yarn dev`

Runs all apps (backend, frontend) in develop

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.
