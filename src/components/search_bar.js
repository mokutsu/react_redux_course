import React from 'react';

class SearchBar extends React.Component {
// how we initialize state in a class based component
// constructor is the only function called when a new instance of a class is created

  constructor(props) {
    // calls parent class, Component's method (essentially super(class).__init__() i think)
    super(props);
    // the constructor function is probably the only time we will manipulate state directly
    this.state = { term: '' };
  }

  render() {
    // we set the state by using the setState function instead
    return  <input onChange={event => this.setState({ term: event.target.value })} />
  }

}

export default SearchBar;
