import React from 'react';
import { Table } from 'rendition';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components/macro';

import { transformAllEmployees } from './util';
import { NameCell } from './NameCell';
import { messages } from '../../locale/en_us';
import { ALL_EMPLOYEES } from '../../graphql/queries';

const {
    employeeDetails: { columnLabels },
} = messages;

// The Table component from rendition uses componentWillReceiveProps internally. This is a known
// issue: https://github.com/balena-io-modules/rendition/issues/944

const columns = [
    {
        field: 'fullName',
        label: columnLabels.name,
        sortable: true,
        render: (value, rowData) => <NameCell rowData={rowData} />,
    },
    {
        field: 'email',
        label: columnLabels.email,
        sortable: true,
    },
    {
        field: 'jobTitle',
        label: columnLabels.jobTitle,
        sortable: true,
    },
    {
        field: 'department',
        label: columnLabels.department,
        sortable: true,
    },
    {
        field: 'officeLocation',
        label: columnLabels.officeLocation,
        sortable: true,
    },
];

const EmployeeTable = styled.div`
    a[data-display='table-cell'] {
        vertical-align: middle;
    }
`;

export const EmployeeDetails = ({
    employeesList,
    dispatchSetEmployeesList,
}) => {
    // TODO: handle error and loading states
    const { data: queryData, loading, error } = useQuery(ALL_EMPLOYEES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    const data = transformAllEmployees(queryData.allEmployees);

    return (
        <EmployeeTable>
            <Table data={data} columns={columns} />
        </EmployeeTable>
    );
};
