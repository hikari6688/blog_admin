import React from 'react';
import '../../styles/frame.css';
class TodoList extends React.Component {
  //构造器区域
  constructor(props) {
    super(props);
    this.state = {
      text: [],
      textInfo: '',
      queryInfo: '',
      save: []
    };
  }
  pushList = data => {
    this.pushState(this.state.textInfo);
    this.setState({ textInfo: '' });
    //推到数组
  };
  pushState = data => {
    let pushArr = this.state.text;
    pushArr.push(data);
    this.setState({ text: pushArr });
    this.setState({ save: pushArr });
  };
  //监听输入事件
  textChange = e => {
    this.setState({ textInfo: e.target.value }, function() {});
  };
  //删除事件
  delItem = e => {
    console.log(e.target.dataset.rank);
    const rank = e.target.dataset.rank;
    const delArr = this.state.text;
    delArr.splice(rank, 1);
    this.setState({ text: delArr });
  };
  // 查询
  getItem = () => {
    //点击查询按钮
    const filterArr = this.state.text;
    console.log(this.state.queryInfo, '输入信息');
    if (this.state.queryInfo) {
      //模糊搜索
      const ichiko = filterArr.filter((item, index) => {
        let canFind = item.split(this.state.queryInfo);
        return canFind.length > 1;
      });
      console.log(ichiko, 'ichiko');
      this.setState({ text: ichiko });
    } else {
      this.setState({ text: this.state.save });
    }
  };
  queryChange = e => {
    //搜索框数据改变动态赋值
    this.setState({ queryInfo: e.target.value });
  };
  // 修改
  render() {
    const list = this.state.text.map((item, index) => {
      return (
        <div key={index} className="listStyle">
          <li>{item}</li>
          <span data-rank={index} onClick={this.delItem}>
            删
          </span>
        </div>
      );
    });
    return (
      <div>
        <input type="text" placeholder="请输入信息" value={this.state.textInfo} onChange={this.textChange} />
        <button onClick={this.pushList}>新增信息</button>
        <input type="text" value={this.queryInfo} onChange={this.queryChange} />
        <button onClick={this.getItem}>查询数据</button>
        <div>
          <ul>{list}</ul>
        </div>
      </div>
    );
  }
}
export default TodoList;
