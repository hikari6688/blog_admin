import React from 'react';
import Editorx from '../../../../../components/Editor/editor';
import { Button,Icon } from 'antd';
class BlogEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div className="blog_edit">
        <div className="blog_edit_config">
          <div></div>
          <div className='btn_group'>
            {/* <Button type='primary'>发布</Button>  */}
          </div>
        </div>
        <div className="blog_edit_main">
          <Editorx/>
        </div>
      </div>
    );
  }
}

export default BlogEdit;
