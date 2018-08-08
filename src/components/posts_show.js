import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params; // this is from react router
    this.props.fetchPost(id);
  }
  render() {
    return (
      <div>posts show!</div>
    )
  };
};

function mapStateToProps({ posts }) {

}
export default connect(null, { fetchPost }))(PostsShow)
