import thunkMiddleware from 'redux-thunk';
import React from 'react';
import { render } from 'react-dom';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers'
import App from './components/App';

import { Provider } from 'react-redux';

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware
    )
);

render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
)

//registerServiceWorker();