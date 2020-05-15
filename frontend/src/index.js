import React from 'react';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/Dragon'

render(
    <div className="rootWrapper">
        <Generation />
        <Dragon />
    </div>,
    document.getElementById('root')
);
