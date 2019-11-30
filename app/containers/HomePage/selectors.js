import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomePage = (state) => state.homepage || initialState

const makeSelectPageState = () => 
	createSelector(
		selectHomePage, 
		org => org.pageState
	)

const makeSelectEvents = () => 
    createSelector(
        selectHomePage,
        org => org.events
    )

export { selectHomePage, makeSelectPageState, makeSelectEvents }