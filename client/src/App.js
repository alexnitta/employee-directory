import React from 'react';
import { Provider, Flex } from 'rendition';
import styled from 'styled-components/macro';

import { MainContent } from './components/MainContent';
import { MainNav } from './components/MainNav';
import { Sidebar } from './components/Sidebar';

const LeftCol = styled.div`
    flex: 0 1 auto;
    width: 20%;
    min-width: 200px;
`;

const RightCol = styled.div`
    flex: 1 1 auto;
`;

function App() {
    return (
        <div className="app">
            <Provider>
                <MainNav />
                <Flex>
                    <LeftCol>
                        <Sidebar />
                    </LeftCol>
                    <RightCol>
                        <MainContent />
                    </RightCol>
                </Flex>
            </Provider>
        </div>
    );
}

export default App;
