import React from 'react';

import { SidebarToggle } from '../SidebarToggle';
import { AddEmployee } from '../AddEmployee';
import { Filters } from '../Filters';

export const Sidebar = () => (
    <div className="sidebar">
        <SidebarToggle />
        <AddEmployee />
        <Filters />
    </div>
);
