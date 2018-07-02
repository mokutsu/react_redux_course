import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAuCg2VIhNBsSmh6AsHSRKHuZnHoA9vZ9s';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.container'));
