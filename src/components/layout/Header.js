import React from 'react';
import '../../styles/header.css';
import { Button } from 'antd';
class Header extends React.Component {
  render() {
    return (
      <div className="wrap">
        <div className="menu_list">
          {/* 菜单 */}
          <span>目录一</span>
          <span>目录二</span>
          <span>目录三</span>
        </div>
        <div className="top_left">
          {/* 头像和退出登录 */}
          <div className="avatar">
            <img src="/images/mamoru.jpg" className="avatarIcon" />
          </div>
          <div>
            <span className="user_name">@ICHIKO</span>
          </div>
          <div>
            <Button type="danger">注 销</Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
