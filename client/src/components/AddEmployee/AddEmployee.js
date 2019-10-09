import React, { useState } from 'react';
import { Button } from 'rendition';
import styled from 'styled-components/macro';
import { UserAdd } from 'grommet-icons';

import { AddEmployeeForm } from './AddEmployeeForm';

import { messages } from '../../locale/en_us';

const { addEmployee } = messages;

const ButtonWrapper = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
    text-align: center;
`;

export const AddEmployee = () => {
    const [open, setOpen] = useState(false);
    console.log('open: ', open);

    return (
        <ButtonWrapper>
            <Button
                onClick={() => setOpen(true)}
                tertiary
                icon={<UserAdd />}>
                {addEmployee.callToAction}
            </Button>

            {/* TODO open conditionally
            open && <AddEmployeeForm /> */}
            <AddEmployeeForm />
        </ButtonWrapper>
    );
};
