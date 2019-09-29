import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { selectUser } from '../App/selectors';

const selectLocation = (state, props) => {
		return props.location.pathname.split('/')[2];
	}
	
const selectUserPage = (state) => {
	return state.userpage || initialState
}

const selectTempUserInfo = (state) => {
	return state.userpage.tempUserChanges || initialState
}

const selectUserNameFromURL = (state, props) => {
		return state.app.users[props.location.pathname.split('/')[2]]
	}

const makeSelectLocation = () =>
	createSelector(
		selectLocation, 
		location => location
	); 

const makeSelectUser = () =>
 	createSelector(
		selectUserNameFromURL, 
		user => user
	);

const makeSelectModalOpen = () => 
	createSelector(
		selectUserPage, 
		userpage => userpage.modalOpen
	)

const makeSelectTempUserChanges = () => 
	createSelector(
		selectTempUserInfo, 
		userchanges => userchanges
	)

export { selectUserPage, selectLocation, makeSelectLocation, makeSelectUser, makeSelectModalOpen, makeSelectTempUserChanges }