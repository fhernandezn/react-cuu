import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Event from '../event';
import Fetch from '../week4/Fetch';

class Events extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: [],
        };
    }

    render() {
        return (
            <div>
                <h1>Events</h1>
                <Fetch url="event" render={data2 => {
                    const {data: {data: {data}}} = data2;
                    return data.map((event, index) => {
                        return <Event key={index} event={event}/>;
                    });
                }} />
            </div>
        );
    }
}

export default withRouter(Events);
