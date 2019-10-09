import React from 'react';
import { connect } from 'react-redux';
import { Flex } from 'rendition';
import styled from 'styled-components/macro';
import { Menu } from 'grommet-icons';

import { SidebarToggle } from '../SidebarToggle';
import { AddEmployee } from '../AddEmployee';
// import { Filters } from '../Filters';
import { sidebarOpenSelector } from '../../redux/selectors';
import { setSidebarOpen } from '../../redux/actionCreators';

const MenuWrapper = styled.div`
    padding-left: 10px;
    padding-top: 15px;
`;

const Sidebar = ({ sidebarOpen, dispatchSetSidebarOpen }) => {
    return (
        <div>
            <MenuWrapper>
                <Menu onClick={() => dispatchSetSidebarOpen(!sidebarOpen)} />
            </MenuWrapper>
            <Flex flexDirection="column">
                <SidebarToggle />
                {sidebarOpen && <AddEmployee />}
                {/*
                    TODO: implement filters by department and office location
                    <Filters />
                */}
            </Flex>
        </div>
    );
};

const mapStateToProps = state => ({
    sidebarOpen: sidebarOpenSelector(state),
});

const mapDispatchToProps = dispatch => ({
    dispatchSetSidebarOpen: open => dispatch(setSidebarOpen({ open })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
