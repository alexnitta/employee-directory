import React from 'react';
import { Table } from 'rendition';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { connect } from 'react-redux';

import { transformAllEmployees } from './util';
import { NameCell } from './NameCell';
import { employeesListSelector } from '../../redux/selectors';
import { setEmployeesList } from '../../redux/actionCreators';
import { messages } from '../../locale/en_us';

const ALL_EMPLOYEES = gql`
    query {
        allEmployees {
            uid
            firstName
            lastName
            email
            phone
            department
            jobTitle
            officeLocation
            pictureMedium
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
        render: (value, rowData) => <NameCell rowData={rowData} />,
    },
    {
        field: 'email',
        label: columnLabels.email,
    },
    {
        field: 'jobTitle',
        label: columnLabels.jobTitle,
    },
    {
        field: 'department',
        label: columnLabels.department,
    },
    {
        field: 'officeLocation',
        label: columnLabels.officeLocation,
    },
];

const EmployeeDetails = ({ employeesList, dispatchSetEmployeesList }) => {
    // TODO: handle error and loading states
    const { data: queryData, loading, error } = useQuery(ALL_EMPLOYEES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    const list = transformAllEmployees(queryData.allEmployees);

    if (employeesList.length < 1) {
        dispatchSetEmployeesList(list);
    }

    return <Table data={employeesList} columns={columns} />;
};

const mapStateToProps = state => ({
    employeesList: employeesListSelector(state),
});

const mapDispatchToProps = dispatch => ({
    dispatchSetEmployeesList: list => dispatch(setEmployeesList({ list })),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeDetails);
