import React from 'react';
import { Flex } from 'rendition';
import styled from 'styled-components/macro';
import { Menu } from 'grommet-icons';

const AppTitle = styled.h2`
    flex: 0 1 auto;
    padding: 0px 20px;
    white-space: nowrap;
`;

const MenuWrapper = styled.div`
    padding-left: 10px;
    padding-top: 15px;
`;

export const SidebarToggle = ({ sidebarOpen, setSidebarOpen }) => (
    <Flex alignItems="center">
        <MenuWrapper>
            <Menu onClick={() => setSidebarOpen(!sidebarOpen)} />
        </MenuWrapper>
        {sidebarOpen && <AppTitle>Employee Directory</AppTitle>}
    </Flex>
);
