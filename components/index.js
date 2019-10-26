import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/app.scss';

class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
                Hello world, from react2!
            </div>
        );
    }
}

const component = <App />;
const container = document.getElementById('app');

ReactDOM.render(component, container);
