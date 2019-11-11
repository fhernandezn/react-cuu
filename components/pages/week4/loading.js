import React from 'react';

import withErrorHandler from './withErrorHandler';

import { ReactSchoolContext } from '../../index';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseX: 0,
      mouseY: 0
    };
  }

  render() {
    return <ReactSchoolContext.Consumer>
      {value => (
        <div onMouseMove={evt => this.setState({mouseX: evt.pageX, mouseY: evt.pageY})}>
          {this.props.perro(this.state)}
          Is the user logged in? {value ? 'yes' : 'no'}
        </ div>
      )}
    </ReactSchoolContext.Consumer>;
  }
};

export default withErrorHandler(Loading);
