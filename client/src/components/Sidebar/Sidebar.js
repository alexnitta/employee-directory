import React, { useState } from 'react';
import { Flex } from 'rendition';

import { SidebarToggle } from '../SidebarToggle';
import { AddEmployee } from '../AddEmployee';
// import { Filters } from '../Filters';

export const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <Flex flexDirection="column">
            <SidebarToggle
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen} />
            {sidebarOpen && <AddEmployee />}
            {/*
                TODO: implement filters by department and office location
                <Filters />
            */}
        </Flex>
    );
};
