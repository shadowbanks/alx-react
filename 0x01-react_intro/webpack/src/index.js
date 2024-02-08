import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Notify from './Notifications/Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Notify />
        <App />
    </React.StrictMode>
);