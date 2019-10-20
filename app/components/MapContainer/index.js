import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    return (
      <Map google={this.props} zoom={14}>
        <Marker onClick={this.onMarkerClick} name="Current location" />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCBxxS2RJSEdWfk0KwoFeBLCLO3h-b2THY',
})(MapContainer);
