import React from 'react';
import { connect } from 'react-redux';
import { Flex } from 'rendition';
import { UserSettings, Menu } from 'grommet-icons';
import styled from 'styled-components/macro';

import { sidebarOpenSelector } from '../../redux/selectors';
import { setSidebarOpen } from '../../redux/actionCreators';

const MenuWrapper = styled.div`
    padding-left: 20px;
    padding-right: 10px;
    padding-top: 5px;
`;

const UserSettingsWrapper = styled.div`
    padding-right: 15px;
    padding-top: 20px;
`;

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    background: #e0e0eb;
`;

const AppTitle = styled.h2`
    flex: 1 1 auto;
    padding: 0px 10px;
    white-space: nowrap;
`;

const MainNav = ({ sidebarOpen, dispatchSetSidebarOpen }) => (
    <NavBar>
        <Flex alignItems="center" justifyContent="center">
            <MenuWrapper>
                <Menu onClick={() => dispatchSetSidebarOpen(!sidebarOpen)} />
            </MenuWrapper>
            <AppTitle>Employee Directory</AppTitle>
        </Flex>
        <UserSettingsWrapper>
            <UserSettings />
        </UserSettingsWrapper>
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
