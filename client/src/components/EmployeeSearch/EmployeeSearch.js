import React from 'react';
import { Search } from 'rendition';

import { messages } from '../../locale/en_us';

const { employeeSearch } = messages;

export const EmployeeSearch = () => (
    <Search placeholder={employeeSearch.placeholder} />
);
