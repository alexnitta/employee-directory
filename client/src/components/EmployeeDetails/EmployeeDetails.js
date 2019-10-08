import React from 'react';
import { Table } from 'rendition';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { transformAllEmployees } from './util';
import { messages } from '../../locale/en_us';

const ALL_EMPLOYEES = gql`
    query {
        allEmployees {
            firstName
            lastName
            email
            department
            jobTitle
            officeLocation
            pictureThumbnail
            pictureMedium
            pictureLarge
            location {
                city
                state
                country
            }
        }
    }
`;

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
    const { loading, error, data: queryData } = useQuery(ALL_EMPLOYEES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const data = transformAllEmployees(queryData.allEmployees);

    return <Table data={data} columns={columns} />;
};
