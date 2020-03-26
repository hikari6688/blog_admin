import React from 'react';
import Editorx from '../../../../../components/Editor/editor';
import { Redirect, Route, Switch } from 'react-router';
import { Button, Icon, Tag, Input, Select, message, Form, PageHeader } from 'antd';
import { api_postEssay } from '../../../../../api/api';
import './blogEdit.css';
const { Option } = Select;
const { TextArea } = Input;
@Form.create()
class BlogEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagList: [], //标签
      inputVisible: false,
      tagValue: '', //单项标签栏
      title: '', //标题
      content: '', //子组件
      type: '', //类型
      intro: '' //简介
    };
    this.colorMap = ['#f50', '#2db7f5', '#87d068'];
    this.saveInputRef = el => (this.t_put = el);
  }
  addTag = () => {
    let { tagList } = this.state;
    tagList = [...tagList, this.state.tagValue];
    this.setState({ tagList, inputVisible: false, tagValue: '' }, () => {
      console.log(tagList);
    });
  };
  closeTag(index) {
    const { tagList } = this.state;
    tagList.splice(index, 1);
    this.setState(
      {
        tagList
      },
      () => {
        console.log(this.state.tagList);
      }
    );
  }
  showInput = () => {
    //最多三个标签
    if (this.state.tagList.length == 3 || this.state.tagList.length > 3) {
      message.warning('最多可添加三个标签！');
    } else {
      this.setState({ inputVisible: true }, () => this.t_put.focus());
    }
  };
  handleInputChange = e => {
    this.setState({ tagValue: e.target.value });
  };
  onChange = value => {
    console.log(`selected ${value}`);
    this.setState({ type: value });
  };

  onSearch = val => {
    console.log('search:', val);
  };
  getMessage = val => {
    this.setState({ content: val });
  };
  titleChange = e => {
    this.setState({ title: e.target.value });
  };
  introChange = e => {
    this.setState({ intro: e.target.value });
  };
  submit = () => {
    console.log(this.state.content); //rich text
    console.log(this.state.tagList); //taglist
    console.log(this.state.type); //articlType
    console.log(this.state);
    api_postEssay({
      title: this.state.title,
      intro: this.state.intro,
      tag:JSON.stringify(this.state.tagList),
      type: this.state.type,
      content: this.state.content,
      intro: this.state.intro
    }).then(res => {
      console.log(res)
    });
  };
  componentDidMount() {}
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="blog_edit">
        <div>
          <PageHeader style={{}} onBack={() => this.props.history.goBack()} title="撰写博客" />
        </div>
        <div className="blog_edit_form">
          <Form>
            <div className="title_n_intro">
              <div className="title">
                <Form.Item label="标 题:">
                  {/* {getFieldDecorator('title', {
                    rules: [
                      {
                        required: true,
                        min: 2,
                        max: 60,
                        message: '用户名为2-16个字符'
                      }
                    ]
                  })(
                    <Input
                      placeholder="请输入文章标题"
                      type="text"
                      maxLength={16}
                      value={this.state.title}
                      onChange={this.titleChange}
                    />
                  )} */}
                  <Input
                    placeholder="请输入文章标题"
                    type="text"
                    maxLength={16}
                    value={this.state.title}
                    onChange={this.titleChange}
                  />
                </Form.Item>
              </div>
              <div className="intro">
                <Form.Item label="简 介:">
                  {/* {getFieldDecorator('intro', {
                    rules: [
                      {
                        required: true,
                        max: 80,
                        message: '请输入简介内容(80子以内)'
                      }
                    ]
                  })(<TextArea rows={3} placeholder="请输入文章简介"></TextArea>)} */}
                  <TextArea rows={3} placeholder="请输入文章简介" onChange={this.introChange}></TextArea>
                </Form.Item>
              </div>
            </div>
            <div className="blog_edit_main">
              <Form.Item label="正 文:">
                {/* {
                  (getFieldDecorator('content', {
                    rules: [
                      {
                        required: true,
                        message: '请输入文章正文'
                      }
                    ]
                  }),
                  (<Editorx parent={this} />))
                } */}
                <Editorx parent={this} />
              </Form.Item>
            </div>
            <div className="blog_edit_config">
              <div className="config_left">
                <div className="tag_list">
                  {this.state.tagList.map((item, index) => {
                    return (
                      <Tag
                        color={this.colorMap[index]}
                        key={item + index}
                        closable
                        onClose={() => {
                          this.closeTag(index);
                        }}
                      >
                        {item}
                      </Tag>
                    );
                  })}
                </div>
                {!this.state.inputVisible && (
                  <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                    <Icon type="plus" /> 添加标签
                  </Tag>
                )}
                {this.state.inputVisible && (
                  <Form.Item>
                    <Input
                      ref={this.saveInputRef}
                      type="text"
                      size="small"
                      style={{ width: 78 }}
                      value={this.state.tagValue}
                      onChange={this.handleInputChange}
                      onBlur={this.addTag}
                      onPressEnter={this.addTag}
                    />
                  </Form.Item>
                )}
              </div>
              <div className="config_right">
                <Form.Item>
                  <Select
                    showSearch
                    style={{ width: 120, textAlign: 'center' }}
                    placeholder="文章类型"
                    optionFilterProp="children"
                    onChange={this.onChange}
                    onSearch={this.onSearch}
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="1">前端</Option>
                    <Option value="2">语言</Option>
                    <Option value="3">后端</Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Button icon="rocket" type="primary" onClick={this.submit}>
                    发布
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default BlogEdit;
