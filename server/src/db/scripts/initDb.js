const utils = require('./utils');

const { newClientStub, newClient, dropAll, setSchema } = utils;

async function main() {
    const dgraphClientStub = newClientStub();
    const dgraphClient = newClient(dgraphClientStub);
    await dropAll(dgraphClient);
    await setSchema(dgraphClient);

    // Close the client stub.
    dgraphClientStub.close();
}

main().then(() => {
    console.log("\nDone initializing Dgraph.");
}).catch((e) => {
    console.log("Error initializing Dgraph: ", e);
});
