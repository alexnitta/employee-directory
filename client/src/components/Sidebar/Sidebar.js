import React from 'react';
import { Flex } from 'rendition';

import { SidebarToggle } from '../SidebarToggle';
import { AddEmployee } from '../AddEmployee';
import { Filters } from '../Filters';

export const Sidebar = () => (
    <Flex flexDirection="column">
        <SidebarToggle />
        <AddEmployee />
        {/*
            TODO: implement filters by department and office location
            <Filters />
        */}
    </Flex>
);
