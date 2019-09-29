/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import sidebarReducer from 'containers/Sidebar/reducer';
import organizationsReducer from 'containers/OrganizationsPage/reducer';
import appReducer from 'containers/App/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    app: appReducer,
    sidebar: sidebarReducer,
    organizations: organizationsReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
