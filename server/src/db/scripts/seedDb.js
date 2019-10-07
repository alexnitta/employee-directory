import * as dgraph from 'dgraph-js';

import { newClientStub, newClient, dropAll, setSchema } from './utils';
import seedData500 from './seedData500.json';

/**
 * Map over seedData.results and create a list of objects that will be used to populate Dgraph.
 * `seedData` is the JSON response from https://randomuser.me/api/?results=500
 */
const cleanSeedData = seedData =>
    seedData.results.map(person => {
        const {
            name: { first: firstName, title, last: lastName },
            email,
        } = person;

        const gender = person.gender.toUpperCase();

        return {
            typeEmployee: '',
            firstName,
            lastName,
            gender,
            title,
            email,
        };
    });

/**
 * Using cleaned seed data, populate Dgraph with list of 500 employees
 */
async function createData(dgraphClient) {
    const cleanData = cleanSeedData(seedData500);

    for (const employee of cleanData) {
        const txn = dgraphClient.newTxn();
        try {
            const mu = new dgraph.Mutation();

            mu.setSetJson(employee);

            const assigned = await txn.mutate(mu);

            await txn.commit();
        } finally {
            await txn.discard();
        }
    }
}

/**
 * Run a query on the entire list of employees to check if createData was successful
 */
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

    console.log(
        `Created and then queried ${employees.allEmployees.length} employees`
    );
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

main()
    .then(() => {
        console.log('\nDone seeding Dgraph.');
    })
    .catch(e => {
        console.log('Error seeding Dgraph: ', e);
    });
