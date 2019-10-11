# employee-directory

A full stack app for browsing a list of employees at an imaginary company.

## Getting started

The app is split into `client` and `server` directories. `client` contains the frontend UI, which consists of a React application using Apollo Client for API calls and state management. `server` contains the backend API, which is built with GraphQL (with Apollo Server) and Dgraph.

More details are given within the README.md files in each folder.

### Starting up the `server`

You'll need to make sure Docker ([Mac](https://docs.docker.com/docker-for-mac/install/)/[Windows](https://docs.docker.com/docker-for-windows/install/)) is installed before you begin.

1. From within `server/`, start up Dgraph and GraphQL: `docker-compose up`
2. The first time you run the app, Dgraph will be empty. Open a new terminal window, `cd` to `server/` and run the following command to import sample data:
    ```
    docker-compose exec api npm run seed-db
    ```

### Starting up the `client`

1. From the `client` folder, run `npm install` to install dependencies
2. Run `npm start` to start up the dev server and listen for changes
3. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## Contributing

See notes on using prettier to format code: [_docs/prettier.md](_docs/prettier.md).
