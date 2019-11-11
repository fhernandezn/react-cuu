import React from 'react';

import { Link } from 'react-router-dom';
import { ReactSchoolContext } from '../..';

const Event = (props) => {
    const { event } = props;

    return (
        <ReactSchoolContext.Consumer>
            {value => <div>
                {
                    event.thumbnail_url &&
                    <img src={event.thumbnail_url}/>
                }
                <h2>{event.name}Is the user logged in {value ? 'yes' : 'no'}</h2>
                <p>{event.description}</p>
                <Link to={`/events/${event.id}`}>Inscribirse</Link>
            </div>}
        </ReactSchoolContext.Consumer>
    );
};

export default Event;
