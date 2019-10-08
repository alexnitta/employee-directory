import React from 'react';
import { Flex } from 'rendition';
import styled from 'styled-components/macro';
import { Menu } from 'grommet-icons';

const AppTitle = styled.h2`
    flex: 0 1 auto;
    padding-left: 20px;
`;

const MenuWrapper = styled.div`
    padding-left: 10px;
`;

export const SidebarToggle = () => (
    <Flex alignItems="center">
        <MenuWrapper>
            <Menu />
        </MenuWrapper>
        <AppTitle>Employee Directory</AppTitle>
    </Flex>
);
