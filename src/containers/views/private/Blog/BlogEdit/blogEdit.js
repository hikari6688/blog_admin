import React from 'react';
import Editorx from '../../../../../components/Editor/editor';
import { Button, Icon, Tag, Input, Select, message } from 'antd';
import  { api_postEssay } from '../../../../../api/api'
import './blogEdit.css';
const { Option } = Select;
class BlogEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagList: [],
      inputVisible: false,
      tagValue: '',
      content:'',//子组件
      type:''
    };
    this.colorMap = ['#f50', '#2db7f5', '#87d068'];
    this.saveInputRef = el => (this.t_put = el);
  }
  addTag = () => {
    let { tagList } = this.state;
    tagList = [...tagList, this.state.tagValue];
    this.setState({ tagList, inputVisible: false, tagValue: '' },()=>{
      console.log(tagList);
    });
  };
  closeTag(index) {
    const { tagList } = this.state;
    tagList.splice(index, 1);
    this.setState({
      tagList
    },()=>{
      console.log(this.state.tagList);
    });
  };
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
    this.setState({ type:value });
  };

 

  onSearch = val => {
    console.log('search:', val);
  };
  getMessage=val=>{
    this.setState({ content:val });
  }
  submit=()=>{
    console.log(this.state.content)//rich text
    console.log(this.state.tagList)//taglist
    console.log(this.state.type)//articlType
    api_postEssay({
      
    }).then(res=>{

    })
  }
  componentDidMount() {}
  render() {
    return (
      <div className="blog_edit">
        <div className="blog_edit_main">
          <Editorx parent={ this } />
        </div>
        <div className="blog_edit_config">
          <div className="config_left">
            <div className="tag_list">
              {this.state.tagList.map((item, index) => {
                return (
                  <Tag
                    color={this.colorMap[index]}
                    key={item+index}
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
            )}
          </div>
          <div className="config_right">
            <Select
              showSearch
              style={{ width: 120, textAlign: 'center' }}
              placeholder="文章类型"
              optionFilterProp="children"
              onChange={this.onChange}
              onSearch={this.onSearch}
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="1">前端</Option>
              <Option value="2">语言</Option>
              <Option value="3">后端</Option>
            </Select>
            <Button icon="rocket" type="primary" onClick={ this.submit }>
              发布
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogEdit;
