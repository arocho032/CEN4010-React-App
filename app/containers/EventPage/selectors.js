import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectEventPage = (state) => state.eventpage || initialState

const makeSelectPageState = () =>
    createSelector(
        selectEventPage, 
        event => event.pageState
    )

const makeSelectPageContent = () => 
    createSelector(
        selectEventPage, 
        event => event.pageValues
    )

export { makeSelectPageState, makeSelectPageContent }