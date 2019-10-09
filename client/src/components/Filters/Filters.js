import React from 'react';
import { Checkbox } from 'rendition';
import styled from 'styled-components/macro';

import { messages } from '../../locale/en_us';

const { filters } = messages;

const FilterWrapper = styled.div`
    margin: 0px 20px;
    border-top: 1px solid darkgray;

    h3 {
        text-align: center;
    }
`;

export const Filters = () => (
    <FilterWrapper>
        <h3>{filters.header}</h3>
        <Checkbox toggle label={filters.department.label} />
    </FilterWrapper>
);
