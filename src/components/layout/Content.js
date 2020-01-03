import React from 'react';
import JavaScript from '../view/JavaScript';
import Emotions from '../view/Emotions';
import Language from '../view/Language';
import Publish from '../view/Publish';
import { Spin } from 'antd';
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
    console.log('加载content组件');
  }
  render() {
    return (
      <Router>
        <Spin spinning={true} size="large">
          <div className="content">
            <Switch>
              <Route path="/home/javascript">
                <JavaScript />
              </Route>
              <Route path="/home/emotion">
                <Emotions />
              </Route>
              <Route path="/home/lanauage">
                <Language />
              </Route>
            </Switch>
          </div>
        </Spin>
      </Router>
    );
  }
}
export default Content;
