import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;
const selectUser = state => state.app.curUser || initialState.curUser;
const selectTempUser = state => state.app.tempUser || initialState.tempUser;
const selectTepmPass = state => state.app.passwordCheck || initialState.passwordCheck;
const selectUsers = state => state.app.users || initialState.users;

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

const makeSelectPasswordField = () =>
	createSelector(
		selectTepmPass,
		passwordCheck => passwordCheck
	) 

export { selectUsers, selectUser, makeSelectLocation, makeSelectCurUser, makeSelectTempUser, makeSelectPasswordField };
