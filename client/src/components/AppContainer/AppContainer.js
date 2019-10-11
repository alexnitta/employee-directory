import React, { Fragment } from 'react';
import { Flex } from 'rendition';
import styled from 'styled-components/macro';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';

import { MainContent } from '../MainContent';
import { MainNav } from '../MainNav';
import { Sidebar } from '../Sidebar';
import { SIDEBAR_OPEN } from '../../graphql/queries';

const LeftCol = styled.div`
    flex: 1 1 auto;
    max-width: 20%;
`;

const RightCol = styled.div`
    flex: 1 1 auto;
`;

export const AppContainer = () => {
    const { data } = useQuery(SIDEBAR_OPEN);
    const sidebarClosed = get(data, 'sidebarClosed');

    return (
        <Fragment>
            <MainNav />
            <Flex>
                {!sidebarClosed && (
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
