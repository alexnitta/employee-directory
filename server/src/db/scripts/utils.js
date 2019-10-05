require('dotenv').config();

const dgraph = require("dgraph-js");
const grpc = require("grpc");
const schema = require('../schema');

const dgraphPort = process.env.DGRAPH_PORT || 9080;
const dgraphHost = process.env.DGRAPH_HOST || 'localhost';

// Create a client stub.
function newClientStub() {
    console.log('connecting on dgraphPort:', dgraphPort)
    return new dgraph.DgraphClientStub(
        `${dgraphHost}:${dgraphPort}`, grpc.credentials.createInsecure());
}

// Create a client.
function newClient(clientStub) {
    return new dgraph.DgraphClient(clientStub);
}

// Drop All - discard all data and start from a clean slate.
async function dropAll(dgraphClient) {
    const op = new dgraph.Operation();
    op.setDropAll(true);
    await dgraphClient.alter(op);
}

// Set schema.
async function setSchema(dgraphClient) {
    const op = new dgraph.Operation();
    op.setSchema(schema);
    await dgraphClient.alter(op);
}

module.exports = {
    newClientStub,
    newClient,
    dropAll,
    setSchema,
};
