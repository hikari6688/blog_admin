import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link,HashRouter ,Redirect} from 'react-router-dom';
// import * as base from '@containers/views/public'; // 公共页面
import login from './containers/views/public/login';
import moduleName from './containers/views/private/HOME/index'
import Home from './containers/views/private/HOME';
// import PrivateRoute  from './containers/shared/PrivateRoute'//需要权限的路由
export default () => (
  <Router>
    <Switch>
      <Route path="/" exact render={() => <Redirect to={'/home'} />} />
      <Route path="/home"  component={Home} />
      <Route path="/login" exact component={login} />
      {/* <Route path="*" component={notfound} /> */}
    </Switch>
  </Router>
);