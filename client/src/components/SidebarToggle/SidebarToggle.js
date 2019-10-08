import React from 'react';
import { Flex } from 'rendition';
import styled from 'styled-components/macro';
import { Menu } from 'grommet-icons';

const AppIcon = styled.img`
    height: 30px;
    width: 30px;
    padding-left: 15px;
`;

const AppTitle = styled.h2`
    flex: 0 1 auto;
`;

const MenuWrapper = styled.div`
    padding-left: 10px;
`;

export const SidebarToggle = () => (
    <Flex alignItems="center">
        <MenuWrapper>
            <Menu />
        </MenuWrapper>
        <AppIcon src="favicon.png" />
        <AppTitle>Employee Directory</AppTitle>
    </Flex>
);
