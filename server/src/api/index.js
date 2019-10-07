import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import expressPlayground from 'graphql-playground-middleware-express';
import * as dgraph from 'dgraph-js';
import * as grpc from 'grpc';
import { readFileSync } from 'fs';

import * as resolvers from './resolvers';

const graphqlPort = process.env.GRAPHQL_PORT || 4000;
const dgraphPort = process.env.DGRAPH_PORT || 9080;
const dgraphHost = process.env.DGRAPH_HOST || 'localhost';
const showPlayground = process.env.ENV === 'development';
const graphqlPath = '/graphql';

const typeDefs = gql(readFileSync('src/api/typeDefs.graphql', 'UTF-8'));

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
