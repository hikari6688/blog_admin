import React from 'react';
import './styles/loading.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { api_login } from './api/api';
import { Form, Input, Button, Checkbox } from 'antd';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorContent: '',
      articalParams: {}
    };
  }
  getSubmit = (e) => {
    console.log(e);
  };
  handleSubmit=(event)=>{
    console.log(event)
  }
  componentDidMount = value => {
    api_login({
      name: 'okita',
      passWord: '123456'
    }).then(res => {
      console.log(res);
    });
  };
  render() {
    return (
      <div>
        <div className="formBox">
          <h3 className="login_tag">ログイン</h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item name="username" rules={[{ required: true, message: 'ユーザ名を入力してください' }]}>
              <Input placeholder="ユーザ名を入力してください" />
            </Form.Item>
            <Form.Item name="username" rules={[{ required: true, message: 'パスワードを入力してください' }]}>
              <Input placeholder="パスワードを入力してください" />
            </Form.Item>
            <Form.Item>
              <div className="btn_wrap">
                <Button type="primary" className="login_btn"  htmlType="submit">
                  ログイン
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
