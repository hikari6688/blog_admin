import '../../styles/header.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from 'antd';
class Header extends React.Component {
  render() {
    return (
      <div className="wrap header">
        <div className="menu_list">
          {/* 菜单 */}
          <div>
            <span>前端学习</span>
          </div>
          <div>
            <span>后端学习</span>
          </div>
          <div>
            <span>日语学习</span>
          </div>
          <div>
            <span>生活记录</span>
          </div>
        </div>
        <div className="top_left">
          {/* 头像和退出登录 */}
          <div className="avatar">
            <img src="/images/mamoru.jpg" className="avatarIcon" />
          </div>
          <div>
            <span className="user_name">@ICHIKO</span>
          </div>
          <div className="btnGropu">
          <Link to="/publish">
            <Button type="primary" className="record">
              记 录
            </Button>
          </Link>
            <Button type="danger" className="logout">
              注 销
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
