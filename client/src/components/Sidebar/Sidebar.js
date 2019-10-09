import React from 'react';
import { connect } from 'react-redux';
import { Flex } from 'rendition';
import styled from 'styled-components/macro';
import { Menu } from 'grommet-icons';

import { AddEmployee } from '../AddEmployee';
// import { Filters } from '../Filters';
import { sidebarOpenSelector } from '../../redux/selectors';
import { setSidebarOpen } from '../../redux/actionCreators';

const AppTitle = styled.h2`
    flex: 0 1 auto;
    padding: 0px 20px;
    white-space: nowrap;
`;

const MenuWrapper = styled.div`
    padding-left: 15px;
`;

const Sidebar = ({ sidebarOpen, dispatchSetSidebarOpen }) => {
    return (
        <div>
            <MenuWrapper>
                <Menu onClick={() => dispatchSetSidebarOpen(!sidebarOpen)} />
            </MenuWrapper>
            {sidebarOpen && <Flex flexDirection="column">
                <Flex alignItems="center">
                    <AppTitle>Employee Directory</AppTitle>
                </Flex>
                <AddEmployee />
                {/*
                    TODO: implement filters by department and office location
                    <Filters />
                */}
            </Flex>}
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
