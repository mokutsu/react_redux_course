import React, { Component } from 'react';

import BookDetail from '../containers/book-detail';
import BookList from '../containers/book-list'
// RETURN 2 COMPONENTS, BOOK LIST SAND BOOK DETAIL
export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>

    );
  }
}
