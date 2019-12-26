import React from 'react';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';
import '../../styles/content.css';
import TodoList from './TodoList';
import Calculator from './Calculator '
import CustomTextInput from './Ref'
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
      // name: props.name,
      // price: props.price,
      num1: '',
      num2: '',
      // symbol: '+',
      result: '',
      todoList:[1,2,3,4,5,6,7,8]
    };
  }
  symbol = '+'
  //方法可以写在这里 这种写法不需要bind this


  symChange = e => {
    // let symbleTax = e.target.value;
    // this.setState({ symbol: symbleTax });
    this.symbol = e.target.value
  };
  handleRef=()=>{
    console.log(this.myRef.current)
  }
  
  //1.计算器
  render() {
   
    return (
      <div>
       
      </div>
    );
  }
}
export default Content;
