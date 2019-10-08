import React from 'react';
import { Checkbox } from 'rendition';

import { messages } from '../../locale/en_us';

const { filters } = messages;

export const Filters = () => (
    <Checkbox toggle label={filters.department.label} />
);
