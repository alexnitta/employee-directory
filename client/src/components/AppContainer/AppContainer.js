import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Flex } from 'rendition';
import styled from 'styled-components/macro';

import { MainContent } from '../MainContent';
import { MainNav } from '../MainNav';
import { Sidebar } from '../Sidebar';
import { sidebarOpenSelector } from '../../redux/selectors';

const LeftCol = styled.div`
    flex: 1 1 auto;
    max-width: 20%;
`;

const RightCol = styled.div`
    flex: 1 1 auto;
`;

const AppContainer = ({ sidebarOpen, dispatchSetSidebarOpen }) => {
    return (
        <Fragment>
            <MainNav />
            <Flex>
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

export default connect(mapStateToProps)(AppContainer);
