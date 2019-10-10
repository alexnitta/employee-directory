import React from 'react';
import { connect } from 'react-redux';
import { UserSettings, Menu } from 'grommet-icons';
import styled from 'styled-components/macro';

import { sidebarOpenSelector } from '../../redux/selectors';
import { setSidebarOpen } from '../../redux/actionCreators';

const MenuWrapper = styled.div`
    padding: 10px;
`;

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    background: #e0e0eb;
`;

const MainNav = ({ sidebarOpen, dispatchSetSidebarOpen }) => (
    <NavBar>
        <MenuWrapper>
            <Menu onClick={() => dispatchSetSidebarOpen(!sidebarOpen)} />
        </MenuWrapper>
        <UserSettings />
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
