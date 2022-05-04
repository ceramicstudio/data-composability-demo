import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import App from './App'
import Header from './Header';
import Body from './Body';


ReactDOM.render(

    <StrictMode>
        <App >
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Body />} />
                </Routes>

            </Router>
        </App>
    </StrictMode >,
    document.getElementById('root')
);