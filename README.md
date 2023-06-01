# MonorepoApp

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## Create enviroments `.env` file:

`DATABASE_URL = <database uri>`

`NODE_ENV = <develop | production>`
## Important:
Recommended to have `Docker` and use the command:
`docker compose up -d`

## Available Scripts:
In the project directory, you can run:

###  `yarn`
Install all dependecies 

###  `nx build <target name>`
Compile the labraries for apps (backend, frontend). Target name is in `package.json` property name: 
`"name": "@monorepo/utilities"`

###  `yarn dev`
Runs all apps (backend, frontend) in develop

## Understand this workspace
Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.