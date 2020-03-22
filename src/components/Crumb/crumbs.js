import React from 'react';
import { Breadcrumb } from 'antd';
class Crumbs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>系统管理</Breadcrumb.Item>
        <Breadcrumb.Item>博客管理</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
export default Crumbs;
