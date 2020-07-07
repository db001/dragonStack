import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import rootReducers from './reducers';
import './index.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducers,
    composeEnhancer(applyMiddleware(thunk))
);

render(
    <Provider store={store}>
        <div className="rootWrapper">
            <Generation />
            <Dragon />
        </div>
    </Provider>,
    document.getElementById('root')
);
