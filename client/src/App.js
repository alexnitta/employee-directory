import React from 'react';
import { Provider } from 'rendition';

import { MainContent } from './components/MainContent';
import { Sidebar } from './components/Sidebar';

function App() {
    return (
        <div className="app">
            <Provider>
                <Sidebar />
                <MainContent />
            </Provider>
        </div>
    );
}

export default App;
