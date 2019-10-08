import React from 'react';

import './App.css';
import { MainContent } from './components/MainContent';
import { Sidebar } from './components/Sidebar';

function App() {
    return (
        <div className="app">
            <Sidebar />
            <MainContent />
        </div>
    );
}

export default App;
