import { createSelector } from 'reselect';
import { initialState } from './reducer';

import { selectOrgNameFromURL } from '../OrganizationPage/selectors'

const selectEvents = state => {
	return state.events || initialState;
}

const makeSelectAllEvents = () =>
	createSelector(
		selectEvents,
		events => events.events
	)

const makeSelectHostedEvent = () => 
	createSelector(
		selectOrgNameFromURL,
		selectEvents,
		(org, events) => events.events.filter(event => event.hostId == org.hostId)
	)

export { selectEvents, makeSelectAllEvents, makeSelectHostedEvent }