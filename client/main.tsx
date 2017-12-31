import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './main/reducer';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './main/styles/index.css';
import 'font-awesome/css/font-awesome.css';

import Home from './main/components/Home';
import Contact from './main/components/Contact';



const store: Store<any> = createStore(reducer, {});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <main>
                <Route exact={true} component={Home} path={'/'} />
                <Route exact={true} component={Contact} path={'/contact'} />

            </main>
        </Router>
    </Provider>,
    document.getElementById('app')
);
