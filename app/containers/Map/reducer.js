import produce from 'immer';

export const initialState = {
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    mapCenter: { lat: 25.7617, lng: -80.1918 },
    markers: [
        // { id: 1, lat: 25.849433, lng: -80.230454 },
        // { id: 2, lat: 25.7574, lng: -80.3733 },
      ],
};


