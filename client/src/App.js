import React from 'react';
import { Provider as RenditionProvider, Flex } from 'rendition';
import styled from 'styled-components/macro';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import { MainContent } from './components/MainContent';
import { MainNav } from './components/MainNav';
import { Sidebar } from './components/Sidebar';
import { rootReducer } from './redux/reducers';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const graphqlUri = process.env.NODE_ENV === 'development' ?
    'http://localhost:8001/graphql' :
    'production_url_goes_here';

const client = new ApolloClient({
    uri: graphqlUri,
});

const LeftCol = styled.div`
    flex: 1 1 auto;
    max-width: 20%
`;

const RightCol = styled.div`
    flex: 1 1 auto;
`;

function App() {
    return (
        <div className="app">
            <ReduxProvider store={store}>
                <ApolloProvider client={client}>
                    <RenditionProvider>
                        <MainNav />
                        <Flex>
                            <LeftCol>
                                <Sidebar />
                            </LeftCol>
                            <RightCol>
                                <MainContent />
                            </RightCol>
                        </Flex>
                    </RenditionProvider>
                </ApolloProvider>
            </ReduxProvider>
        </div>
    );
}

export default App;
