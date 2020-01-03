import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
    this.state = {};
  }
  //方法可以写在这里 这种写法不需要bind this
  componentDidMount() {
    /*生命周期 挂载时触发*/
    console.log('加载Emotion组件');
  }
  render() {
    return (
     <div>this is EmotionCom</div>
    );
  }
}
export default Content;
