import React from 'react';
import { connect } from 'react-redux';
import { Flex } from 'rendition';
import { UserSettings, Menu } from 'grommet-icons';
import styled from 'styled-components/macro';

import { sidebarOpenSelector } from '../../redux/selectors';
import { setSidebarOpen } from '../../redux/actionCreators';
import { messages } from '../../locale/en_us';

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

const MainNav = ({ sidebarOpen, dispatchSetSidebarOpen }) => (
    <NavBar>
        <Flex alignItems="center" justifyContent="center">
            <MenuWrapper>
                <Menu onClick={() => dispatchSetSidebarOpen(!sidebarOpen)} />
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

const mapStateToProps = state => ({
    sidebarOpen: sidebarOpenSelector(state),
});

const mapDispatchToProps = dispatch => ({
    dispatchSetSidebarOpen: open => dispatch(setSidebarOpen({ open })),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainNav);
