import React from 'react';
import '../styles/loading.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { api_login } from '../../../api/api';
import { Form, Input, Button, Checkbox, Icon,message } from 'antd';
@Form.create()
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorContent: '',
      articalParams: {},
      userInfo: {}
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        api_login({
          name: values.username,
          passWord:values.password
        }).then(res => {
          if(res.status==200){
            //登陆成功
            message.success('登陆成功');
          }else{
            //弹窗提示错误
            message.error(res.message);
          }
        }); 
      }else{
        //处理错误
        console.log(err);
      }
    });
  };
  componentDidMount = value => {
    
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <div className="icons-list">
          <Icon type="fast-backward" />
        </div>
        <div className="formBox">
          <h3 className="login_tag">登陆</h3>
          <Form ref={this.formRef} name="control-ref" onSubmit={this.handleSubmit}>
            <Form.Item hasFeedback>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    min: 4,
                    max: 10,
                    message: '用户名为4-10个字符'
                  }
                ]
              })(<Input placeholder="请输入用户名" type="text" />)}
            </Form.Item>
            <Form.Item hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    min: 4,
                    max: 10,
                    message: '用户名为4-10个字符'
                  }
                ]
              })(<Input placeholder="请输入密码" />)}
            </Form.Item>
            <Form.Item>
              <div className="btn_wrap">
                <Button type="primary" className="login_btn" htmlType="submit">
                  登陆
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
export default App;
