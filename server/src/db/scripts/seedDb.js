const dgraph = require("dgraph-js");

const utils = require('./utils');

const { newClientStub, newClient, dropAll, setSchema } = utils;

// TODO: set this up with actual test data once the schema is more complete
// https://github.com/alexnitta/sb-sequoia/issues/4
async function createData(dgraphClient) {
    // Create a new transaction.
    const txn = dgraphClient.newTxn();
    try {
        // Create data.
        const phoneNumber = {
            typePhoneNumber: '',
            number: '8314190769',
            extension: '',
            primary: true,
        };

        // Run mutation.
        const mu = new dgraph.Mutation();
        mu.setSetJson(phoneNumber);
        const assigned = await txn.mutate(mu);

        // Commit transaction.
        await txn.commit();

        // Get uid of the outermost object.
        // Assigned#getUidsMap() returns a map from blank node names to uids.
        // For a json mutation, blank node names "blank-0", "blank-1", ... are used
        // for all the created nodes.
        console.log(`Created phoneNumber with uid = ${assigned.getUidsMap().get("blank-0")}\n`);
        console.log("All created nodes (map from blank node names to uids):");
        assigned.getUidsMap().forEach((uid, key) => console.log(`${key} => ${uid}`));
    } finally {
        // Clean up. Calling this after txn.commit() is a no-op
        // and hence safe.
        await txn.discard();
    }
}

// Query for data.
async function queryData(dgraphClient) {
    // Run query.
    const query = `
        {
            allPhoneNumbers(func: has(typePhoneNumber)) {
                uid
                number
                extension
                primary
            }
        }
    `;
    const res = await dgraphClient.newTxn().query(query);
    const phoneNumbers = res.getJson();

    // Print results.
    console.log(`Number of phoneNumbers: ${phoneNumbers.allPhoneNumbers.length}`);
    phoneNumbers.allPhoneNumbers.forEach((phoneNumber) => console.log(phoneNumber));
}

async function main() {
    const dgraphClientStub = newClientStub();
    const dgraphClient = newClient(dgraphClientStub);
    await dropAll(dgraphClient);
    await setSchema(dgraphClient);
    await createData(dgraphClient);
    await queryData(dgraphClient);

    // Close the client stub.
    dgraphClientStub.close();
}

main().then(() => {
    console.log("\nDone seeding Dgraph.");
}).catch((e) => {
    console.log("Error seeding Dgraph: ", e);
});
