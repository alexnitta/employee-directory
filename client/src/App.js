import React from 'react';
import { Provider as RenditionProvider } from 'rendition';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { rootReducer } from './redux/reducers';
import { AppContainer } from './components/AppContainer';
import { GRAPHQL_URI } from './constants';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const client = new ApolloClient({
    uri: GRAPHQL_URI,
    cache: new InMemoryCache({
        dataIdFromObject: object =>
            `${object.uid}|${object.__typename}` || null,
    }),
});

function App() {
    return (
        <div className="app">
            <ReduxProvider store={store}>
                <ApolloProvider client={client}>
                    <RenditionProvider>
                        <AppContainer />
                    </RenditionProvider>
                </ApolloProvider>
            </ReduxProvider>
        </div>
    );
}

export default App;
