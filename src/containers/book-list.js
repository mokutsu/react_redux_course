//a container is only different from a component because it has access to the redux state through the react-redux library

import React, { Component } from 'react';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(BookList);
