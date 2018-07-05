//a container is only different from a component because it has access to the redux state through the react-redux library

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className='list-group-item'>{book.title}</li>
      );
    });
  }
  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

// maps the application state in redux to the component props. automatically rerenders when state changes.
function mapStateToProps(state) {
  // whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

// anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // wehenver selectBook is called, the result should be passed to all of our reducers with bindActionCreators
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// promote book list from a component to a ocntainer - it now needs to know about the dispatch method (feature)
// , selectBook

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
