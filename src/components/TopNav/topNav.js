import React from 'react';
import { Menu, Icon } from 'antd';
class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {};
  render() {
    return (
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
        <Menu.Item key="1">系统管理</Menu.Item>
        <Menu.Item key="2">工作管理</Menu.Item>
        <Menu.Item key="3">学习管理</Menu.Item>
      </Menu>
    );
  }
}

export default TopNav;
