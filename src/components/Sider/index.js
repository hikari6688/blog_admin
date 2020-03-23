import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
const { SubMenu } = Menu;
class SiderMeun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <Link to="/home/blog/list">
            <Icon type="rocket" />
            <span>博客管理</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="9">
          <Icon type="read" />
          <span>数据字典</span>
        </Menu.Item>
        <Menu.Item key="10">
          <Icon type="reddit" />
          <span>角色管理</span>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="desktop" />
              <span>系统设置</span>
            </span>
          }
        >
          <Menu.Item key="3">主题设置</Menu.Item>
          <Menu.Item key="4">国际化</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="gift" />
              <span>创意工坊</span>
            </span>
          }
        >
          <Menu.Item key="6">Canvas</Menu.Item>
          <Menu.Item key="8">MarkDown</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
export default SiderMeun;
