import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Flex } from 'rendition';
import styled from 'styled-components/macro';
import { Menu } from 'grommet-icons';

import { MainContent } from '../MainContent';
import { MainNav } from '../MainNav';
import { Sidebar } from '../Sidebar';
import { sidebarOpenSelector } from '../../redux/selectors';
import { setSidebarOpen } from '../../redux/actionCreators';

const LeftCol = styled.div`
    flex: 1 1 auto;
    max-width: 20%;
`;

const RightCol = styled.div`
    flex: 1 1 auto;
`;

const MenuWrapper = styled.div`
    padding: 10px;
`;

const AppContainer = ({ sidebarOpen, dispatchSetSidebarOpen }) => {
    return (
        <Fragment>
            <MainNav />
            <Flex>
                <MenuWrapper>
                    <Menu
                        onClick={() => dispatchSetSidebarOpen(!sidebarOpen)}
                    />
                </MenuWrapper>
                {sidebarOpen && (
                    <LeftCol>
                        <Sidebar />
                    </LeftCol>
                )}
                <RightCol>
                    <MainContent />
                </RightCol>
            </Flex>
        </Fragment>
    );
};

const mapStateToProps = state => ({
    sidebarOpen: sidebarOpenSelector(state),
});

const mapDispatchToProps = dispatch => ({
    dispatchSetSidebarOpen: open => dispatch(setSidebarOpen({ open })),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
