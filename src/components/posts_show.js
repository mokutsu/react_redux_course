import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params; // this is from react router
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const {id} = this.props.match.params;
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Link to="/">Return to index</Link>
        <button
          className='btn btn-danger pull-xs-right'></button>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
};
// args = application state, ownProps (by convention) = props going into the component
function mapStateToProps({ posts }, ownProps) {
  // only return the single post we care about
  return { post: posts[ownProps.match.params.id]};
}
export default connect(mapStateToProps, { fetchPost })(PostsShow);
