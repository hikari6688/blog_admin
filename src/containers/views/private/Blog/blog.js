import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BlogList from './BlogList/blogList';
import BlogEdit from './BlogEdit/blogEdit';
import BlogInfo from './BlogInfo/blogInfo';
class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      // <BlogList/>
      <Switch>
        <Route path="/home/blog/list" exact component={BlogList} />
        <Route path="/home/blog/edit" exact component={BlogEdit} />
        <Route path="/home/blog/info" exact component={BlogInfo} />
      </Switch>
    );
  }
}

export default Blog;
