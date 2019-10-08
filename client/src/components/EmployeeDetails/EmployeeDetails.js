import React from 'react';
import get from 'lodash/get';
import { Table } from 'rendition';

import sampleData from './sampleData.json';
import { messages } from '../../locale/en_us';

const columnLabels = messages.employeeDetails.columns.labels;

// The Table component from rendition uses componentWillReceiveProps internally. This is a known
// issue: https://github.com/balena-io-modules/rendition/issues/944

const columns = [
    {
        field: 'fullName',
        label: columnLabels.name,
        render: value => value,
    },
    {
        field: 'email',
        label: columnLabels.email,
        render: value => value,
    },
    {
        field: 'jobTitle',
        label: columnLabels.jobTitle,
        render: value => value,
    },
    {
        field: 'department',
        label: columnLabels.department,
        render: value => value,
    },
    {
        field: 'officeLocation',
        label: columnLabels.officeLocation,
        render: value => value,
    },
    {
        field: 'location',
        label: columnLabels.location,
        render: value => value,
    },
];

export const EmployeeDetails = () => {
    // TODO delete sampleData.json and get this from the API
    const data = sampleData.data.allEmployees.map(employee => {
        const { uid, firstName, lastName, email, phone, jobTitle, department, officeLocation } = employee;
        const fullName = `${firstName} ${lastName}`;
        const locationData = get(employee, ['location', 0], {});
        let { city, state, country } = locationData;

        const locationList = [city, state, country].reduce((acc, curr) => {
            curr && acc.push(curr);
            return acc;
        }, []);

        const location = locationData
            ? locationList.join(', ')
            : '';

        return { uid, fullName, email, phone, jobTitle, department, officeLocation, location };
    });

    return <Table data={data} columns={columns} />;
};
