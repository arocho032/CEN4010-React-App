import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

// console.log(API_KEY)

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { lat: 25.9087, lng: -80.1403 },
        { latitude: 25.7574, longitude: -80.3733 },
      ],
    };
  }

  displayMarkers = () =>
    this.state.stores.map((store, index) => (
      <Marker
        key={Marker.id}
        id={index}
        position={{
          lat: store.latitude,
          lng: store.longitude,
        }}
        onClick={() => console.log('You clicked me!')}
      />
    ));

  render() {
    return (
      /* this.props.google
       <Map google={this.props.google} zoom={14}>
         <Marker onClick={this.onMarkerClick} name="Current location" />
       </Map> */
      <Map
        google={this.props}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 25.7617, lng: -80.1918 }}
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}

const mapStyles = {
  width: '100%',
  height: '100%',
};

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(MapContainer);
