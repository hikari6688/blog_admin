import React from 'react';
import { Layout } from 'antd';
import './App.css';
import './styles/frame.css';
import { position } from 'dom-helpers';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <section className="content">
          {/* <Content name="Sara" price="22"></Content> */}
        </section>
        <footer className="footer">@ICHIKO</footer>
      </div>
    );
  }
}
export default App;
