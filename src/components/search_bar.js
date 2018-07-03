import React from 'react';

class SearchBar extends React.Component {
// how we initialize state in a class based component
// constructor is the only function called when a new instance of a class is created

  constructor(props) {
    // calls parent class, Component's method (essentially super(class).__init__() i think)
    super(props);
    // the constructor function is probably the only time we will manipulate state directly
    this.state = { term: 'default starting value' };
  }

  render() {
    // we set the state by using the setState function instead
    return (
      <div
        className='search-bar'
      >
        <input
          value={this.state.term} // setting value here makes it a controlled element, the value isn't automatically updated. the user types, which causes the onchange to fire, which changes state, which then changes state, which then changes value. without this line, the value would have just updated.
          onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    )
  }

  onInputChange(searchTerm) {
    // this.setState updates state internal to searchBar component
    // this.props.onSearchTermChange calls the parent component, App's onSearchTermChange method, because it was passed down as a prop
    this.setState({term: searchTerm});
    this.props.onSearchTermChange(searchTerm);
  }

}

export default SearchBar;
