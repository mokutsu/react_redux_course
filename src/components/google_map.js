import React, { Component } from 'react';
// we are already wired up to google maps via the index.html script tag, so we use this to hook up non-react components with react

class GoogleMap extends Component {
  // lifecycle method called after the page is rendered
  componentDidMount() {
    // takes a reference to where we want this node rendered (i.e. this.refs.map), and renders the embedded map into it, using the second argument, an options argument.
    new google.maps.Map(this.refs.map, {
      zoom: 10,
      center: {
        lat: this.props.lat, // these key names are based on google api requirements
        lng: this.props.lon
      }
    })
  }

  render() {
    // references this.refs.map, which gives direc treference to this html element
    return <div ref="map" />;
  }
}

export default GoogleMap;
