import React from 'react';
import { Table } from 'antd';
import { Button, Icon, Divider, Tag, Input, Select, Popconfirm, message } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import './BlogList.css';
const { Option } = Select;
class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: 1,
          name: 'React中路由的使用',
          type: '前端学习',
          date: '2020/03/10',
          description: 'react-router-dom路由的跳转、嵌套、传参，以及动态私有路由的封装和路由生命周期的使用',
          tags: ['React', 'Router'],
          tea: 'tea'
        },
        {
          key: 2,
          name: '日语N2常考词法',
          type: '语言学习',
          date: '2020/03/10',
          description: '总结了日语历年N2考试常考的词法和考点解析',
          tags: ['日语', 'N2', '词法']
        },
        {
          key: 3,
          name: 'Koa中常用的中间件',
          type: 'NodeJS',
          date: '2020/03/10',
          description: '罗列了一些koa常用的中间件以及使用方法',
          tags: ['nodejs', 'koa']
        }
      ],
      loading: false //删除按钮加载状态
    };
  }
  columns = [
    { title: '标题', dataIndex: 'name', key: 'name', align: 'center' },
    { title: '分类', dataIndex: 'type', key: 'type', align: 'center' },
    { title: '创建时间', dataIndex: 'date', key: 'date', align: 'center' },
    {
      title: '标签',
      key: 'tags',
      align: 'center',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      )
    },
    {
      title: '操作',
      dataIndex: 'name',
      align: 'center',
      key: 'x',
      render: (text, record, index) => (
        <div className="btn_group">
          <Button
            icon="eye"
            type="default"
            className="info_btn"
            onClick={() => {
              this.toDetail(text, record, index);
            }}
          >
            查看
          </Button>
          <Button icon="edit" type="primary">
            编辑
          </Button>
          <Popconfirm title="是否确定删除文章" onConfirm={this.confirm} onCancel={this.cancel} okText="是" cancelText="否">
            <Button icon="delete" type="danger" loading={this.state.loading}>
              删除
            </Button>
          </Popconfirm>
        </div>
      )
    }
  ];
  componentDidMount() {
    console.log('enter blog');
  }
  onChange = value => {
    console.log(`selected ${value}`);
  };
  confirm = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      message.success('文章删除成功');
      this.setState({ loading: false });
    }, 5000);
  };
  toDetail = (text, record, index) => {
    console.log(text, record, index);
  };
  cancel = e => {
    console.log(e);
  };
  render() {
    console.log('blog')
    return (
      <div className="blog_wrapper">
        <div className="blog_search">
          <Link to='/home/blog/edit'>
            <Button icon="twitter">新增文章</Button>
          </Link>
          <div>
            <Input placeholder="请输入文章标题" style={{ width: 260, marginRight: 10 }} allowClear />
            <Select
              showSearch
              style={{ width: 160, marginRight: 10 }}
              placeholder="请选择类型"
              optionFilterProp="children"
              onChange={this.onChange}
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              allowClear
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
            <Button icon="search" type="primary">
              搜索
            </Button>
          </div>
        </div>
        <div className="blog_table">
          <Table columns={this.columns} expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>} dataSource={this.state.data} />
        </div>
        <div className="blog_pager"></div>
      </div>
    );
  }
}
export default Blog;
