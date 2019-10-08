import React from 'react';

import { EmployeeDetails } from '../EmployeeDetails';
import { EmployeeSearch } from '../EmployeeSearch';

export const MainContent = () => (
    <div>
        <EmployeeSearch />
        <EmployeeDetails />
    </div>
);
