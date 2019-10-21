import React from 'react';
import { Provider as RenditionProvider } from 'rendition';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppContainer } from './components/AppContainer';
import { GRAPHQL_URI } from './constants';

const client = new ApolloClient({
    uri: GRAPHQL_URI,
    cache: new InMemoryCache({
        dataIdFromObject: object =>
            `${object.uid}|${object.__typename}` || null,
    }),
    resolvers: {},
});

const theme = {
    font: "'Lato', Arial, sans-serif",
    titleFont: "'Source Sans Pro', Arial, sans-serif",
};

function App() {
    return (
        <div className="app">
            <ApolloProvider client={client}>
                <RenditionProvider theme={theme}>
                    <AppContainer />
                </RenditionProvider>
            </ApolloProvider>
        </div>
    );
}

export default App;
