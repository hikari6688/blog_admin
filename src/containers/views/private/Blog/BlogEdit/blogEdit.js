import React from 'react';
import Editorx from '../../../../../components/Editor/editor';
import { Button, Icon, Tag, Input, Select, message } from 'antd';
import './blogEdit.css';
const { Option } = Select;
class BlogEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagList: [],
      inputVisible: false,
      tagValue: '',
      content:''//子组件
    };
    this.colorMap = ['#f50', '#2db7f5', '#87d068'];
    this.saveInputRef = el => (this.t_put = el);
  }
  addTag = () => {
    let { tagList } = this.state;
    tagList = [...tagList, this.state.tagValue];
    this.setState({ tagList, inputVisible: false, tagValue: '' });
  };
  closeTag(index) {
    console.log(index);
    const { tagList } = this.state;
    tagList.splice(index, 1);
    this.setState({
      tagList
    },()=>{
      console.log(this.state.tagList)
    });
    
    // console.log(this.state.tagValue);
    // const t = this.tagList;
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
  };

  onBlur = () => {
    console.log('blur');
  };

  onFocus = () => {
    console.log('focus');
  };

  onSearch = val => {
    console.log('search:', val);
  };
  getMessage=val=>{
    console.log(val)
  }
  componentDidMount() {}
  render() {
    return (
      <div className="blog_edit">
        <div className="blog_edit_main">
          <Editorx parent={ this } sendMessage={ this.getMessage() }/>
        </div>
        <div className="blog_edit_config">
          <div className="config_left">
            <div className="tag_list">
              {this.state.tagList.map((item, index) => {
                return (
                  <Tag
                    color={this.colorMap[index]}
                    key={index}
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
                onPressEnter={this.handleInputConfirm}
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
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onSearch={this.onSearch}
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="jack">前端</Option>
              <Option value="lucy">语言</Option>
              <Option value="tom">后端</Option>
            </Select>
            <Button icon="rocket" type="primary">
              发布
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogEdit;
