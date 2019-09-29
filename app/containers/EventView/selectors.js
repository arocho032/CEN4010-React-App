import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectEvents = state => {
	return state.events || initialState;
}

const makeSelectEvents = () =>
	createSelector(
		selectEvents,
		event => event.events
	)

export { selectEvents, makeSelectEvents }