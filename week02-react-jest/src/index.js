import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Address from './components/Address';
import addresses from './Address-list';
import './index.css';



ReactDOM.render(
    <div>
        <App />
        <Address addressList={addresses}/>
    </div>,
    document.getElementById('root')
);
