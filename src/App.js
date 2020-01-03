import React from 'react';
import './App.css';
import './styles/frame.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Publish from './components/view/Publish';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <section className="content">
            <Switch>
              <Route  path="/" >
                <Content />
              </Route>
              <Route  path="/publish">
                <Publish />
              </Route>
            </Switch>
          </section>
          <footer className="footer">@ICHIKO</footer>
        </div>
      </Router>
    );
  }
}
export default App;
