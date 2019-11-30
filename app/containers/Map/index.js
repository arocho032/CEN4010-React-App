import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Map as GoogleMap, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';

import { makeSelectMapState } from "./selectors";
import MapContainer from '../../components/MapContainer';

function displayMarkers(markers) {
    return markers.map((store, index) => {
        console.log(store)
        return        (
            <Marker key={index} position={{ lat: store.lat, lng: store.lng }}/>
        )
    }
    )
}

function Map(props) {
    if(props.handleClickedMap != null) {
        return (
            <MapContainer>
                <GoogleMap  google={ props.google }
                            onClick={(t, map, coordinates) => props.handleClickedMap(coordinates) }
                            zoom={8}
                            style={{ width: '100%', height: '100%', }}
                            initialCenter={ props.mapState.mapCenter }
                >
                    <Marker position={props.tempMarker}/>
                </GoogleMap>
            </MapContainer>
        )        
    }

    if(props.events != null) {
        var markers = props.events.map((event, index) => {
            var d = { lat: event.lat_coordinate, lng: event.long_coordinate }
            return (
                    <Marker key={index} position={d} title={event.name + ":" + event.description}/>
                    )
        })
        return (
            <MapContainer>
                <GoogleMap  google={ props.google }
                            zoom={8}
                            style={{ width: '100%', height: '100%', }}
                            initialCenter={ props.mapState.mapCenter }
                >            
                    {markers}
                </GoogleMap>
            </MapContainer>
        )        
    }

    return (
        <MapContainer>
            <GoogleMap  google={ props.google }
                        zoom={8}
                        style={{ width: '100%', height: '100%', }}
                        initialCenter={ props.mapState.mapCenter }
            >
            </GoogleMap>
        </MapContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    mapState:  makeSelectMapState(),
})

export function mapDispatchToProps(dispath) {
    return {};
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    GoogleApiWrapper(({ mapState }) => (({
        apiKey: mapState.apiKey,
    }))),
)(Map);