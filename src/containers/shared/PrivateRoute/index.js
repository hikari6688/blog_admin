import * as React from 'react';
import { Route } from 'react-router-dom';
export default function asyncComponent(importComponent) {
  class privateRoute extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      const Component = { component: Component, ...rest };
      return <Route {...rest} render={props => <Component />} />;
    }
  }
  return privateRoute;
}
