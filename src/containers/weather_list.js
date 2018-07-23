import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const temps = cityData.list.map(day => day.main.temp - 273.15);
    const pressures = cityData.list.map(day => day.main.pressure);
    const humidities = cityData.list.map(day => day.main.humidity);

    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td> <Chart data={temps} color='blue' units="deg C"/> </td>
        <td> <Chart data={pressures} color='orange' units="hPa"/> </td>
        <td> <Chart data={humidities} color='purple' units="%"/> </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (deg C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
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
