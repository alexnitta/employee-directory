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
        field: 'location',
        label: columnLabels.location,
        render: value => value,
    },
];

export const EmployeeDetails = () => {
    // TODO delete sampleData.json and get this from the API
    const data = sampleData.data.allEmployees.map(employee => {
        const { uid, firstName, lastName, email, phone } = employee;
        const fullName = `${firstName} ${lastName}`;
        const locationData = get(employee, ['location', 0]);
        const location = locationData
            ? `${locationData.city}, ${locationData.state}, ${locationData.country}`
            : '';

        return { uid, fullName, email, phone, location };
    });

    return <Table data={data} columns={columns} />;
};
