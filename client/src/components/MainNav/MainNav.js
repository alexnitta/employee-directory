import React from 'react';
import { Flex } from 'rendition';
import { UserSettings, Menu } from 'grommet-icons';
import styled from 'styled-components/macro';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';

import { messages } from '../../locale/en_us';
import { SIDEBAR_OPEN } from '../../graphql/queries';

const MenuWrapper = styled.div`
    padding-left: 20px;
    padding-right: 10px;
    padding-top: 5px;
`;

const UserSettingsWrapper = styled.div`
    flex: 0 1 auto;
    padding-right: 15px;
`;

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    background: #e0e0eb;
`;

const AppTitle = styled.h1`
    flex: 1 1 auto;
    padding: 0px 10px;
    white-space: nowrap;
`;

const UserName = styled.div`
    flex: 0 1 auto;
    padding-right: 10px;
`;

// TODO: implement authentication and use logged-in user's data here
const fakeUserFullName = 'Jane User';

export const MainNav = () => {
    const { data, client } = useQuery(SIDEBAR_OPEN);
    const sidebarClosed = get(data, 'sidebarClosed', false);

    return (
        <NavBar>
            <Flex alignItems="center" justifyContent="center">
                <MenuWrapper>
                    <Menu
                        onClick={() =>
                            client.writeData({
                                data: {
                                    sidebarClosed: !sidebarClosed,
                                },
                            })
                        }
                    />
                </MenuWrapper>
                <AppTitle>{messages.appTitle}</AppTitle>
            </Flex>
            <Flex alignItems="center">
                <UserName>{fakeUserFullName}</UserName>
                <UserSettingsWrapper>
                    {/* TODO implement user settings admin feature */}
                    <UserSettings />
                </UserSettingsWrapper>
            </Flex>
        </NavBar>
    );
};
