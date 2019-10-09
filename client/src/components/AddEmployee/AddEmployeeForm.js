import React, { useState } from 'react';
import { Button } from 'rendition';
import styled from 'styled-components/macro';

import { messages } from '../../locale/en_us';

const { addEmployee } = messages;

const StyledForm = styled.form`
    padding: 20px 10px;

    label {
        display: flex;
        justify-content: space-between;
        padding-bottom: 8px;
    }

    input {
        margin-left: 10px;
        border-radius: 3px;
    }
`;

const SubmitButtonWrapper = styled.div`
    text-align: center;
`;

export const AddEmployeeForm = ({ open, setOpen }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [department, setDepartment] = useState('');
    const [officeLocation, setOfficeLocation] = useState('');

    if (!open) { return null; }

    return (
        <StyledForm onSubmit={event => {
            debugger
            event.preventDefault();
            setOpen(false);
            }}>
            <label>
                {addEmployee.form.label.firstName}
                <input
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}/>
            </label>
            <label>
                {addEmployee.form.label.lastName}
                <input
                    value={lastName}
                    onChange={event => setLastName(event.target.value)} />
            </label>
            <label>
                {addEmployee.form.label.email}
                <input
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)} />
            </label>
            <label>
                {addEmployee.form.label.jobTitle}
                <input
                    value={jobTitle}
                    onChange={event => setJobTitle(event.target.value)} />
            </label>
            <label>
                {addEmployee.form.label.department}
                <input
                    value={department}
                    onChange={event => setDepartment(event.target.value)} />
            </label>
            <label>
                {addEmployee.form.label.officeLocation}
                <input
                    value={officeLocation}
                    onChange={event => setOfficeLocation(event.target.value)} />
            </label>
            <SubmitButtonWrapper>
                <Button flex="0 1 auto" primary type="submit">
                    {addEmployee.form.label.submit}
                </Button>
            </SubmitButtonWrapper>
        </StyledForm>
    );
};
