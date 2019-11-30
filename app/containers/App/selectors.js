import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;
const selectServer = state => state.app.server || initialState.server;
const selectUser = state => state.app.curUser || initialState.curUser;
const selectTempUser = state => state.app.tempUser || initialState.tempUser;
const selectRegisUser = state => state.app.regisUser || initialState.regisUser;
const selectTepmPass = state => state.app.passwordCheck || initialState.passwordCheck;
const selectUsers = state => state.app.users || initialState.users;

const makeSelectBackendCertificate = () => 
	createSelector(
		selectServer,
		server => server.cert
	)

const makeSelectSocketStatus = () =>
	createSelector(
		selectServer,
		server => !(server.cert === null)
	)

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

const makeSelectRegisUser= () =>
	createSelector(
		selectRegisUser, 
		tempUser => tempUser
	); 

const makeSelectPasswordField = () =>
	createSelector(
		selectTepmPass,
		passwordCheck => passwordCheck
	) 

export { selectUsers, selectServer, selectUser, makeSelectLocation, makeSelectRegisUser, makeSelectCurUser, makeSelectTempUser, makeSelectPasswordField, makeSelectSocketStatus, makeSelectBackendCertificate };
