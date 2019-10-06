require('dotenv').config();

const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const expressPlayground = require('graphql-playground-middleware-express')
    .default;
const dgraph = require('dgraph-js');
const grpc = require('grpc');
const { readFileSync } = require('fs');

const graphqlPort = process.env.GRAPHQL_PORT || 4000;
const dgraphPort = process.env.DGRAPH_PORT || 9080;
const dgraphHost = process.env.DGRAPH_HOST || 'localhost';
const showPlayground = process.env.ENV === 'development';
const graphqlPath = '/graphql';

const typeDefs = gql(readFileSync('src/api/typeDefs.graphql', 'UTF-8'));
const resolvers = require('./resolvers');

const clientStub = new dgraph.DgraphClientStub(
    `${dgraphHost}:${dgraphPort}`,
    grpc.credentials.createInsecure()
);
const dgraphClient = new dgraph.DgraphClient(clientStub);

const app = express();

const context = { db: dgraphClient };

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
});

server.applyMiddleware({ app });

if (showPlayground) {
    app.get('/playground', expressPlayground({ endpoint: graphqlPath }));
}

app.listen(
    {
        port: graphqlPort,
        path: graphqlPath,
    },
    () => {
        console.log(
            `Running a GraphQL API server at localhost:${graphqlPort}${graphqlPath}`
        );
    }
);
