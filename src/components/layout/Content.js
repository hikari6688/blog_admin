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
  handleClick = () => {
    this.state.name === 'Sara' ? this.setState({ name: 'ichiko' }) : this.setState({ name: 'Sara' });
  };
  num1Ipt = e => {
    this.setState({ num1: e.target.value });
  };
  num2Ipt = e => {
    this.setState({ num2: e.target.value });
  };

  handleChange = (k) => (v) => {
    this.setState({ [k]: v.target.value })
  }

  symChange = e => {
    // let symbleTax = e.target.value;
    // this.setState({ symbol: symbleTax });
    this.symbol = e.target.value
  };
  handleRef=()=>{
    console.log(this.myRef.current)
  }
  getResult = () => {
    const { num1, num2 } = this.state
    const n1 = this.parseInt(num1)
    const n2 = this.parseInt(num2)

    const funcMap = {
      '+': () => {
        this.setState({ result: n1 + n2 });
      },
      '-': () => {
        this.setState({ result: n1 - n2 });
      },
      'x': () => {
        this.setState({ result: n1 * n2 });
      },
      '/': () => {
        if (n2 === 0) {
          throw new Error('error')
        }
        this.setState({ result: n1 / n2 });
      }
    }
    const f = funcMap[this.symbol]
    if (f) {
      f()
    }
  };

  parseInt = (value) => {
    const n = Number(value)

    if (Number.isNaN(n)) {
      return 0
    }
    return n
  }

  //1.计算器
  render() {
    const { result, num1, num2 } = this.state
    return (
      <div>
        {/* <input type="text" onInput={this.num1Ipt} /> */}

        {/*
        
        num1 num2 
        
        受控组件：
        change -> value -> updateView 
        
        */}
        <input type="text" value={num1} onChange={this.handleChange('num1')} />

        {/*

        select

        非受控组件: 
        
        change !-> value 

        /*企业使命 惠及民生 康复大众
          价值观 勇于担当 迎难而上 协同作战 共创共享
          三大板块 互联网+远程医疗平台   互联网医院一站式服务平台 医疗健康信息平台
          企业愿景 三年内成为西部最具影响力的互联网+医疗平台建设运营商
          五年 中国领先的“全生命周期大健康生态服务平台运营商"
          
        */}
        <select name="" id="" defaultValue={this.symbol} onChange={this.symChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="x">x</option>
          <option value="/">/</option>
        </select>
        {/* <input type="text" onInput={this.num2Ipt} /> */}
        <input type="text" value={num2} onChange={this.handleChange('num2')} />
        <span>=</span>
        <span>{result}</span>
        <button onClick={this.getResult}>点击计算</button>
        <div>
          <TodoList list={ this.state.todoList }></TodoList>
        </div>
        <Calculator></Calculator>
        <CustomTextInput></CustomTextInput>
        {/* <button onClick={ this.handleRef }>点击获取子集ref</button> */}
      </div>
    );
  }
}
export default Content;
