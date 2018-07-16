import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
    ///same as if we were to do {this.function.bind(this)} in the onChange, but having it up here allows it to be set in the constructor
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event);
    this.setState({term: event.target.value})
  }
  onFormSubmit(event) {
    event.preventDefault();
    
    // go fetch weather data
  }
  render() {
    return (
      <div>
        <label htmlFor="city-form">Get a 5 day forecast in your favourite cities</label>
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input
            id="city-form"
            placeholder="city name here"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}/>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">submit!</button>
          </span>
      </form>
      </div>
    );
  }
}
