import React from 'react';

import { SidebarToggle } from '../SidebarToggle';
import { AddEmployee } from '../AddEmployee';

export const Sidebar = () => (
    <div className="sidebar">
        <SidebarToggle />
        <AddEmployee />
    </div>
);
