import React from 'react';
import { Button } from 'rendition';
import styled from 'styled-components/macro';
import { UserAdd } from 'grommet-icons';

import { messages } from '../../locale/en_us';

const { addEmployee } = messages;

const ButtonWrapper = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
    text-align: center;
`;

export const AddEmployee = () => (
    <ButtonWrapper>
        <Button tertiary icon={<UserAdd />}>
            {addEmployee.callToAction}
        </Button>
    </ButtonWrapper>
);
