import produce from 'immer';
import { LOCATION_CHANGE } from 'connected-react-router';
import { SET_LOADED } from './constants';

export const initialState = {
  pageState: {
    isLoaded: false,
  },
  events: [],
};

const homepageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOCATION_CHANGE:
      case SET_LOADED:
        draft.pageState.isLoaded = action.value;
        break;
      case 'successAllEventsLoaded':
        console.log(action);
        draft.events = [...JSON.parse(action.data)];
        break;
    }
  });

export default homepageReducer;
