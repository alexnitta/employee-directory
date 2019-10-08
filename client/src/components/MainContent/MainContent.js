import React from 'react';

import { EmployeeDetails } from '../EmployeeDetails';
import { EmployeeSearch } from '../EmployeeSearch';
import { MainNav } from '../MainNav';

export const MainContent = () => (
    <div className="main-content">
        <MainNav />
        <EmployeeSearch />
        <EmployeeDetails />
    </div>
);
