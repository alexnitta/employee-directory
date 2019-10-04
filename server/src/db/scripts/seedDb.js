const dgraph = require("dgraph-js");

const utils = require('./utils');
const seedData10 = require('./seedData10.json');

const { newClientStub, newClient, dropAll, setSchema } = utils;

/**
 * Map over seedData.results and create a list of objects that will be used to populate Dgraph.
 * `seedData` is the JSON response from https://randomuser.me/api/?results=500
 */
const cleanSeedData = seedData =>
    seedData.results.map(person => {
        const {
            name: {
                first: firstName,
                title,
                last: lastName,
            },
            email,
        } = person;

        const gender = person.gender.toUpperCase();

        return {
            firstName,
            lastName,
            gender,
            title,
            email,
        };
    });

async function createData(dgraphClient) {
    // TODO use seedData500 instead
    const cleanData = cleanSeedData(seedData10);
    const txn = dgraphClient.newTxn();

    // TODO iterate through cleanData and do this once per employee
    try {
        const employee = cleanData[0];
        const mu = new dgraph.Mutation();
        mu.setSetJson(employee);
        const assigned = await txn.mutate(mu);
        await txn.commit();
    } finally {
        await txn.discard();
    }
}

async function queryData(dgraphClient) {
    const query = `
        {
            allEmployees(func: has(typeEmployee)) {
                uid
                firstName
                lastName
                gender
                email
            }
        }
    `;
    const res = await dgraphClient.newTxn().query(query);
    const employees = res.getJson();

    console.log(`Queried ${employees.allEmployees.length} employees: `);
}

async function main() {
    const dgraphClientStub = newClientStub();
    const dgraphClient = newClient(dgraphClientStub);
    await dropAll(dgraphClient);
    await setSchema(dgraphClient);
    await createData(dgraphClient);
    await queryData(dgraphClient);

    dgraphClientStub.close();
}

main().then(() => {
    console.log("\nDone seeding Dgraph.");
}).catch((e) => {
    console.log("Error seeding Dgraph: ", e);
});
