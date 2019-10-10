import React from 'react';
import { Flex } from 'rendition';
import styled from 'styled-components/macro';

import { AddEmployee } from '../AddEmployee';
// import { Filters } from '../Filters';

const AppTitle = styled.h2`
    flex: 0 1 auto;
    padding: 0px 20px;
    white-space: nowrap;
`;

export const Sidebar = () => (
    <Flex flexDirection="column">
        <Flex alignItems="center">
            <AppTitle>Employee Directory</AppTitle>
        </Flex>
        <AddEmployee />
        {/*
            TODO: implement filters by department and office location
            <Filters />
        */}
    </Flex>
);
