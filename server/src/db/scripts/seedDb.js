import * as dgraph from 'dgraph-js';

import { newClientStub, newClient, dropAll, setSchema } from './utils';
import seedData from './seedData.json';

const getRandomIndex = inputArray =>
    Math.ceil(Math.random() * inputArray.length - 1);

const generateCompanyDetails = () => {
    const departmentsAndJobTitles = [
        {
            department: 'SALES',
            jobTitles: ['Sales Lead', 'Sales Associate'],
        },
        {
            department: 'ENGINEERING',
            jobTitles: [
                'Junior Software Engineer',
                'Staff Software Engineer',
                'Senior Software Engineer',
            ],
        },
        {
            department: 'CUSTOMER_SUPPORT',
            jobTitles: [
                'Customer Support Associate',
                'Customer Support Manager',
            ],
        },
        {
            department: 'FINANCE',
            jobTitles: ['Controller', 'Staff Accountant', 'Bookkeeper'],
        },
    ];
    const officeLocations = [
        'LONDON',
        'KYOTO',
        'SAN_FRANCISCO',
        'PARIS',
        'RIGA',
    ];

    const { department, jobTitles } = departmentsAndJobTitles[
        getRandomIndex(departmentsAndJobTitles)
    ];
    const jobTitle = jobTitles[getRandomIndex(jobTitles)];
    const officeLocation = officeLocations[getRandomIndex(officeLocations)];

    return { department, jobTitle, officeLocation };
};

/**
 * Map over seedData.results and create a list of objects that will be used to populate Dgraph.
 * `seedData` is the JSON response from https://randomuser.me/api/?results=100
 */
const cleanSeedData = seedData => {
    return seedData.results.map(person => {
        const {
            name: { first: firstName, title, last: lastName },
            email,
            location: {
                street: { number: streetNumber, name: streetName },
                city,
                state,
                country,
                coordinates: { latitude, longitude },
                timezone: {
                    offset: timezoneOffset,
                    description: timezoneDescription,
                },
            },
            phone,
            cell,
            picture: {
                large: pictureLarge,
                medium: pictureMedium,
                thumbnail: pictureThumbnail,
            },
            nat,
        } = person;

        const gender = person.gender.toUpperCase();
        const {
            department,
            jobTitle,
            officeLocation,
        } = generateCompanyDetails();

        return {
            typeEmployee: '',
            firstName,
            lastName,
            gender,
            title,
            email,
            phone,
            cell,
            pictureLarge,
            pictureMedium,
            pictureThumbnail,
            nat,
            department,
            jobTitle,
            officeLocation,
            location: [
                {
                    typeLocation: '',
                    streetNumber,
                    streetName,
                    city,
                    state,
                    country,
                    // US postal codes can start with 0
                    postcode: person.location.postcode.toString(),
                    latitude,
                    longitude,
                    timezoneOffset,
                    timezoneDescription,
                },
            ],
        };
    });
};

/**
 * Using cleaned seed data, populate Dgraph with list of 500 employees
 */
async function createData(dgraphClient) {
    const cleanData = cleanSeedData(seedData);

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
                title
                gender
                email
                phone
                cell
                pictureLarge
                pictureMedium
                pictureThumbnail
                nat
                department
                jobTitle
                officeLocation
                location {
                    uid
                    streetName
                    streetNumber
                    city
                    state
                    country
                    postcode
                    latitude
                    longitude
                    timezoneOffset
                    timezoneDescription
                }
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
