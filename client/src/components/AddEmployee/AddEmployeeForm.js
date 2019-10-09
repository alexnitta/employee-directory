import React, { useState } from 'react';
import { Button } from 'rendition';
import styled from 'styled-components/macro';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { messages } from '../../locale/en_us';
import {
    DEPARTMENT_ENUM_REVERSE_MAP,
    OFFICE_LOCATION_REVERSE_MAP,
} from '../constants';

const CREATE_EMPLOYEE = gql`
    mutation CreateEmployee($input: EmployeeInput) {
        createEmployee(input: $input) {
            firstName
            lastName
            email
            department
            officeLocation
            jobTitle
        }
    }
`;

const { addEmployee } = messages;

const StyledForm = styled.form`
    padding: 20px 10px;

    label {
        display: flex;
        justify-content: space-between;
        padding-bottom: 8px;
        white-space: nowrap;
    }

    input {
        margin-left: 10px;
        border-radius: 3px;
    }
`;

const SubmitButtonWrapper = styled.div`
    text-align: center;
`;

const initialEnumState = { enumeration: '', label: '' };

export const AddEmployeeForm = ({ open, setOpen }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [department, setDepartment] = useState(initialEnumState);
    const [officeLocation, setOfficeLocation] = useState(initialEnumState);

    if (!open) {
        return null;
    }

    return (
        <StyledForm
            onSubmit={event => {
                event.preventDefault();
                // TODO use the useMutation hook from @apollo/react-hooks to send the createEmployee
                // mutation. If the mutation is successful, update Redux and close the form. If not,
                // show an error message.
                setOpen(false);
            }}
        >
            <label>
                {addEmployee.form.label.firstName}
                <input
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                />
            </label>
            <label>
                {addEmployee.form.label.lastName}
                <input
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                />
            </label>
            <label>
                {addEmployee.form.label.email}
                <input
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
            </label>
            <label>
                {addEmployee.form.label.jobTitle}
                <input
                    value={jobTitle}
                    onChange={event => setJobTitle(event.target.value)}
                />
            </label>
            <label>
                {addEmployee.form.label.department}
                <select
                    value={department.label}
                    onChange={event => {
                        const label = event.target.value;
                        const enumeration = DEPARTMENT_ENUM_REVERSE_MAP[label];

                        setDepartment({
                            label,
                            enumeration,
                        });
                    }}
                >
                    {Object.keys(DEPARTMENT_ENUM_REVERSE_MAP).map(
                        department => {
                            return (
                                <option key={department}>{department}</option>
                            );
                        }
                    )}
                </select>
            </label>
            <label>
                {addEmployee.form.label.officeLocation}
                <select
                    value={officeLocation.label}
                    onChange={event => {
                        const label = event.target.value;
                        const enumeration = OFFICE_LOCATION_REVERSE_MAP[label];

                        setOfficeLocation({
                            label,
                            enumeration,
                        });
                    }}
                >
                    {Object.keys(OFFICE_LOCATION_REVERSE_MAP).map(
                        officeLocation => {
                            return (
                                <option key={officeLocation}>
                                    {officeLocation}
                                </option>
                            );
                        }
                    )}
                </select>
            </label>
            <SubmitButtonWrapper>
                <Button flex="0 1 auto" primary type="submit">
                    {addEmployee.form.label.submit}
                </Button>
            </SubmitButtonWrapper>
        </StyledForm>
    );
};
