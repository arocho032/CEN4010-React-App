import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const dotenv = require('dotenv');

console.log(dotenv);

export class MapContainer extends React.Component {
  render() {
    return (
      // this.props.google
      <Map google={this.props} zoom={14}>
        <Marker onClick={this.onMarkerClick} name="Current location" />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(MapContainer);
