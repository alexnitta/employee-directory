import React from 'react';
import { Flex } from 'rendition';
import styled from 'styled-components/macro';

import { AddEmployee } from '../AddEmployee';
// import { Filters } from '../Filters';

export const Sidebar = () => (
    <Flex flexDirection="column">
        <AddEmployee />
        {/*
            TODO: implement filters by department and office location
            <Filters />
        */}
    </Flex>
);
