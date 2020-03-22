import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './home.css';
const { SubMenu } = Menu;
import Main from '../Main/main';
import SiderMenu from '../../../../components/Sider/index';
import Crumbs from '../../../../components/Crumb/crumbs';
import TopNav from '../../../../components/TopNav/topNav';
const { Header, Content, Footer, Sider } = Layout;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      init_left: 0
    };
  }
  componentDidMount() {
    console.log('enter home');
    this.moveNyanCat();
  }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  moveNyanCat() {
    const nyan = document.querySelector('#nyan');
    const nyan_width = nyan.clientWidth;
    const nyan_bar = document.querySelector('.nyan_cat');
    const nyan_bar_width = nyan_bar.clientWidth;
    let reset = Number(nyan_bar_width) - 200;
    console.log(nyan_bar_width);
    setInterval(() => {
      let nyan_left = Number(nyan.style.left.split('px')[0]);
      if (nyan_left > reset) {
        this.state.init_left = -102;
      } else {
        this.state.init_left += 1;
      }
      nyan.style.left = this.state.init_left + 'px';
    }, 50);
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="sider_logo">
            <img src="/images/koa.png" alt="" />
          </div>
          <SiderMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} className="header_flex">
            <div className="logo"></div>
            <TopNav></TopNav>
            <div className="nyan_cat">
              <img src="/images/nyancat.gif" alt="" style={{ left: '0px' }} id="nyan" />
            </div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Crumbs></Crumbs>
            <Main className="main_wrapper"></Main>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Azuna ©2020 Base on Koa&amp;React</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Home;
