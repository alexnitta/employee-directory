import React from 'react';
import { Provider as RenditionProvider } from 'rendition';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import { rootReducer } from './redux/reducers';
import { AppContainer } from './components/AppContainer';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const graphqlUri =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:8001/graphql'
        : 'production_url_goes_here';

const client = new ApolloClient({
    uri: graphqlUri,
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
