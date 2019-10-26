import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                Hello world, from react2!
            </div>
        );
    }
}

const component = <App />;
const container = document.getElementById("app");

ReactDOM.render(component, container);