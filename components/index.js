import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    HashRouter as Router,
    Switch,
    Route,
    NavLink,
} from 'react-router-dom';

import '../styles/app.scss';
import Events from './pages/events';
import EventForm from './pages/event-form';
import Week4 from './pages/week4/week4';

export const ReactSchoolContext = React.createContext();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoggedIn: false});
        }, 1000);
    }

    render() {
        return (
            <ReactSchoolContext.Provider value={this.state.isLoggedIn}>
                <style>
                    {`
                        nav {
                            background-color: pink;
                            padding: 20px 10px;
                        }
                        nav a {
                            padding: 5px 20px;
                        }
                        nav a.active{
                            background-color: black;
                            color: white;
                        }
                    `}
                </style>
                <nav>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/week4">Week 4</NavLink>
                </nav>
                <Switch>
                    <Route path="/events/:id" component={EventForm}/>
                    <Route path="/week4">
                        <Week4 />
                    </Route>
                    <Route exact path="/" render={() => <Events test="test" />} />
                </Switch>
            </ReactSchoolContext.Provider>
        );
    }
}

const component =
        <Router>
            <App />
        </Router>;

const container = document.getElementById('app');

ReactDOM.render(component, container);
