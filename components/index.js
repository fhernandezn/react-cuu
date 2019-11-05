import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import '../styles/app.scss';
import Home from './pages/Home';
import Events from './pages/events';
import EventForm from './pages/event-form';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/events/:id" component={EventForm}/>
                    <Route path="/">
                        <Events />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

const component = <App />;
const container = document.getElementById('app');

ReactDOM.render(component, container);
