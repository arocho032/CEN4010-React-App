/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import sidebarReducer from 'containers/Sidebar/reducer';
import userpageReducer from 'containers/UserPage/reducer';
import homepageReducer from 'containers/HomePage/reducer';
import eventpageReducer from 'containers/EventPage/reducer';
import orgpageReducer from 'containers/OrganizationPage/reducer';
import organizationsReducer from 'containers/OrganizationsPage/reducer';
import loginReducer from 'containers/LoginPage/reducer';
import appReducer from 'containers/App/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    app: appReducer,
    eventpage: eventpageReducer,
    userpage: userpageReducer, 
    orgpage: orgpageReducer,
    homepage: homepageReducer,
    sidebar: sidebarReducer,
    organizations: organizationsReducer,
    login: loginReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
