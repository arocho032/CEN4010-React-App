import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectView = state => state.login.view || initialState.view;

const makeSelectView = () => 
    createSelector(
        selectView,
        view => view
    )

export { makeSelectView, selectView }