import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    console.log('render function', cityData)
    return (
      <tr key={cityName}>
        <td>{cityName}</td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}
// pull soff weather key from weather object with weather key value pair
function mapStateToProps(state) {
  // wea re using the state.weather because in the reducer, we define weather key as 'weather'
  console.log('map state to props: state, ', state)
  return { weather: state.weather }; // { weather } === {weather: weather}
}
// this connects the mapstate to props onto weather list and returns this extended WeatherList container rather than just the react component
export default connect(mapStateToProps)(WeatherList);
