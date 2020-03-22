import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, HashRouter,Redirect } from 'react-router-dom';
import './main.css';
import Blog from '../Blog/blog';
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div className="main_wrapper">
          <Switch>
            {/* <Route path="/home/blog"    render={() => <Redirect to={'/home/blog/list'} />}/> */}
            <Route path="/home/blog"  component={ Blog }  />
          </Switch>
      </div>
    );
  }
}
export default Main;
