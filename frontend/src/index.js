import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
import Root from './components/Root';
import './index.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducers,
    composeEnhancer(applyMiddleware(thunk))
);

render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);
