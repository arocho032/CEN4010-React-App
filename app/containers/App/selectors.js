import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;
const selectUser = state => state.app.curUser || initialState.curUser;
const selectTempUser = state => state.app.tempUser || initialState.tempUser;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectCurUser = () => 
	createSelector(
		selectUser, 
		curUser => curUser
	);
	
const makeSelectTempUser= () =>
	createSelector(
		selectTempUser, 
		tempUser => tempUser
	); 

export { makeSelectLocation, makeSelectCurUser, makeSelectTempUser };
