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
    padding-top: 20px;
    text-align: center;
`;

export const AddEmployee = () => {
    const [open, setOpen] = useState(false);

    return (
        <ButtonWrapper>
            <Button onClick={() => setOpen(!open)} tertiary icon={<UserAdd />}>
                {addEmployee.callToAction}
            </Button>
            <AddEmployeeForm open={open} setOpen={setOpen} />
        </ButtonWrapper>
    );
};
