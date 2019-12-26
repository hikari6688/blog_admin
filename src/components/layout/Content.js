import React from 'react';
import { Icon } from 'antd';
import '../../styles/content.css';
class Content extends React.Component {
  constructor(props) {
    super(props);
    /*
    state 中的值和渲染有关。
    其他无关数据可以放到外面。

    比如这里的 symbol select现在是非受控组件，value和view没有绑定
    num1和num2是受控组件，value和view关联
    
    只有state和prop改变才触发update 

    */
    this.state = {
      /* 后端返回数据title id */
      noteList: [
        {
          title: 'ES7装饰器学习笔记',
          id: '123456',
          date: '2019/12/26',
          describe: '在学习mobx时发现装饰器的强大'
        },
        {
          title: '日语N2备考分享',
          id: '123457',
          date: '2019/12/26',
          describe: '备战7月日语等级考试'
        }
      ],
      listDom: ''
    };
  }
  symbol = '+';
  //方法可以写在这里 这种写法不需要bind this
  componentDidMount() {
    /*生命周期 挂载时触发*/
    this.renderPage();
  }

  /*渲染页面的方法*/
  renderPage = () => {
    const traversalDom = this.state.noteList.map(item => {
      return (
        <li className="repo" key={item.id}>
          <div className="repo_icon">
            <img src="/images/mamoru.jpg" alt="" />
          </div>
          <div className="repo_box">
            <h3 className="repo_title">{item.title}</h3>
            <div>
              <div className="repo_time">
                <Icon type="calendar" theme="twoTone" twoToneColor="#999" />
                <span>发布于{item.date}</span>
              </div>
              <p>{item.describe}</p>
              <div className="readMore">
                <span>阅读全文</span>
                <Icon type="double-right" />
              </div>
            </div>
          </div>
        </li>
      );
    });
    this.setState({ listDom: traversalDom });
    window.console.log(traversalDom);
  };
  render() {
    return (
      <div className="content">
        <div>
          <ul>{this.state.listDom}</ul>
        </div>
      </div>
    );
  }
}
export default Content;
