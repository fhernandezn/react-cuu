import React from 'react';
import { withRouter } from 'react-router-dom';

import MouseMove from './loading';

class Week4 extends React.Component {
  constructor() {
    super();
    this.handleGoHome = this.handleGoHome.bind(this);
  }
  componentDidMount() {
    console.log(this.props);
  }
  handleGoHome() {
    this.props.history.goBack();
  }

  render() {
    return <>
      <h1>This is week 4</h1>
      <MouseMove perro={props => {
        return <div style={{ backgroundColor: 'pink', padding: '50px 100px'}}>
          mouse on: X: {props.mouseX} Y: {props.mouseY}
        </div>;
      }} />
      <button onClick={this.handleGoHome}>Go home</button>
    </>;
  }
};

export default withRouter(Week4);
