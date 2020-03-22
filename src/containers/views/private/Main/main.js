import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from 'react-router-dom';
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
        {/* <HashRouter>
          <Switch>
            <Route path="/home/blog" Component={Blog} />
          </Switch>
        </HashRouter> */}
        <Blog></Blog>
      </div>
    );
  }
}
export default Main;
