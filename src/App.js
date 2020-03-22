import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link,HashRouter } from 'react-router-dom';
// import * as base from '@containers/views/public'; // 公共页面
import login from './containers/views/public/login';
import moduleName from './containers/views/private/HOME/index'
import Home from './containers/views/private/HOME';
// import PrivateRoute  from './containers/shared/PrivateRoute'//需要权限的路由
export default () => (
  <HashRouter>
    <Switch>
      <Route path="/login" component={login} />
      {/* <Route path="*" component={notfound} /> */}
      <Route path="/home" component={Home} />
    </Switch>
  </HashRouter>
);