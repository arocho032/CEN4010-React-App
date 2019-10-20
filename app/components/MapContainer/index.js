import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

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
  apiKey: 'GOOGLE_MAPS_API_KEY',
})(MapContainer);
