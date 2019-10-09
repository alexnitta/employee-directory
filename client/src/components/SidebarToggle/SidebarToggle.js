import React from 'react';
import { Flex } from 'rendition';
import styled from 'styled-components/macro';
import { Menu } from 'grommet-icons';

const AppTitle = styled.h2`
    flex: 0 1 auto;
    padding: 0px 20px;
    white-space: nowrap;
`;


export const SidebarToggle = ({ sidebarOpen, setSidebarOpen }) => (
    <Flex alignItems="center">

        {sidebarOpen && <AppTitle>Employee Directory</AppTitle>}
    </Flex>
);
