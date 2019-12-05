import produce from 'immer';

import {
  MODAL_STATE,
  SET_LOADED,
  ON_CHANGE_VALUE,
  ON_HANDLE_MAP_CLICK,
  ON_MATRIX_CHANGE,
} from './constants';

export const initialState = {
  pageState: {
    isLoaded: false,
    cancelEventModalOpen: false,
    createEventModalOpen: false,
    rolesModalOpen: false,
  },
  pageValues: null,
  members: [],
  events: [],
  tempEvent: {
    eventName: '',
    eventDescription: '',
    eventDate: '',
    eventTime: '',
    eventVisibility: false,
    eventType: null,
    hostedBy: null,
  },
  tempEventCoor: {
    latitude: 25.7617,
    longitude: -80.1918,
  },
  tempGrantRole: {
    targetUser: '',
    values: [false, false, false, false, false],
  },
  tempCancelEvent: {
    eventID: '',
  },
};

const orgpageReducer = (state = initialState, action) =>
  produce(state, draft => {
    console.log(action);
    switch (action.type) {
      case ON_HANDLE_MAP_CLICK:
        draft.tempEventCoor.latitude = action.coordinates.latLng.lat();
        draft.tempEventCoor.longitude = action.coordinates.latLng.lng();
        break;
      case ON_CHANGE_VALUE:
        draft[action.update.target][action.update.name] = action.update.value;
        break;
      case MODAL_STATE:
        draft.pageState[action.modalName] = action.setState;
        break;
      case ON_MATRIX_CHANGE:
        draft.tempGrantRole.values[action.index] = action.update;
        break;
      case SET_LOADED:
        draft.pageState.isLoaded = action.value;
        break;
      case 'succesfulOrgloaded':
        draft.pageValues = { ...action.data };
        break;
      case 'successOrgEventsLoaded':
        draft.events = [...JSON.parse(action.data)];
        break;
      case 'successMembersLoaded':
        draft.members = [...JSON.parse(action.data)];
        break;
      case 'successJoinOrganization':
        draft.pageState.isLoaded = false;
        break;
      case 'successEventCancel':
        draft.pageState.cancelEventModalOpen = false;
        draft.tempCancelEvent = {
          eventID: '',
        };
        draft.pageState.isLoaded = false;
        break;
      case 'successGrantingRole':
        draft.pageState.rolesModalOpen = false;
        draft.tempGrantRole = initialState.tempGrantRole;
        draft.pageState.isLoaded = false;
        break;
      case 'successEventCreation':
        draft.pageState.createEventModalOpen = false;
        draft.tempEvent = {
          eventName: '',
          eventDescription: '',
          eventDate: '',
          eventTime: '',
          eventVisibility: false,
          eventType: null,
          hostedBy: null,
        };
        draft.tempEventCoor = {
          latitude: 25.7617,
          longitude: -80.1918,
        };
        draft.pageState.isLoaded = false;
        break;
      default:
        break;
    }
  });

export default orgpageReducer;
