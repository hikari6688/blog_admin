import React from 'react';
import './App.css';
import './styles/frame.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Publish from './components/view/publish';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Header></Header>
            <section className="content">
              <Route path="/">
                <Content />
              </Route>
              <Route path="/publish">
                <Publish />
              </Route>
            </section>
            <footer className="footer">@ICHIKO</footer>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
