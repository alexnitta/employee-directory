# employee-directory

A full stack app for browsing a list of employees at an imaginary company.

## Getting started

The app is split into `client` and `server` directories. `client` contains the frontend UI, which consists of a React application using Apollo Client for API calls and state management. `server` contains the backend API, which is built with GraphQL (with Apollo Server) and Dgraph.

More details are given within the README.md files in each folder.

### Starting up the `server`

You'll need to make sure Docker ([Mac](https://docs.docker.com/docker-for-mac/install/)/[Windows](https://docs.docker.com/docker-for-windows/install/)) is installed before you begin.

1. From within `server/`, start up Dgraph and GraphQL: `docker-compose up`. Docker will pull down the dependencies and build four containers to run Express and Dgraph. Wait until the logs stop before you proceed - this may take a few minutes.
2. The first time you run the app, Dgraph will be empty. Open a new terminal window, `cd` to `server/` and run the following command to import sample data:
    ```
    docker-compose exec api npm run seed-db
    ```

There are several local services now running. To explore the API, you can use the GraphQL playground at: [http://localhost:8001/playground](http://localhost:8001/playground)

### Starting up the `client`

1. From the `client` folder, run `npm install` to install dependencies. This may take a few minutes.
2. Run `npm start` to start up the dev server. This should automatically open [http://localhost:3000](http://localhost:3000) to allow you to view the app in the browser.

## Code style

See notes on using prettier to format code: [_docs/prettier.md](_docs/prettier.md).

## Caveats

This is a basic implementation that is missing several key features. See the [wiki](https://github.com/alexnitta/employee-directory/wiki) for a list of planned features.

The backend is currently initialized from sample data loaded from [https://randomuser.me/api/](https://randomuser.me/api/). The backend is built with Dgraph, on the assumption that future development will require relationships between entities and would be well-served by a graph architecture. At the moment, there is one such relationship in the backend - from an employee to a location - but this relationship is not used in the UI. The location shown in the current UI is actually the `officeLocation`; the one set up in the backend is the employee's residence location - or at least one can assume this from the shape of the data returned by randomuser.me.

You may notice some warnings or errors that would ideally be resolved before shipping this to production:

When running `npm install` in the `client` folder:
```
found 2 vulnerabilities (1 low, 1 moderate)
  run `npm audit fix` to fix them, or `npm audit` for details
```
Running `npm audit` shows that these vulnerabilties are located within the npm package `rendition`. The issue has been filed [here](https://github.com/balena-io-modules/rendition/issues/971).

In the browser:
```
Warning: componentWillReceiveProps has been renamed, and is not recommended for use.
```
This is also an issue within `rendition`, where the `Table` component is using a deprecated React lifecycle. The issue has been filed [here](https://github.com/balena-io-modules/rendition/issues/944).
