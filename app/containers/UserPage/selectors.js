import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUserPage = (state) => {
	return state.userpage || initialState
}

const selectTempUserInfo = (state) => {
	return state.userpage.tempUserChanges || initialState
}

const makeSelectModalOpen = () => 
	createSelector(
		selectUserPage, 
		userpage => userpage.pageState.modalOpen
	)

const makeSelectTempUserChanges = () => 
	createSelector(
		selectTempUserInfo, 
		userchanges => userchanges
	)

const makeSelectPageState = () => 
	createSelector(
		selectUserPage, 
		user => user.pageState
	)

const makeSelectPageUser = () => 
	createSelector(
		selectUserPage, 
		user => user.pageValues
	)
	
const makeSelectEvents = () =>
	createSelector(
		selectUserPage,
		user => user.events
	)

const makeSelectOrgs = () =>
	createSelector(
		selectUserPage,
		user => user.orgs
	)

export { makeSelectEvents, makeSelectOrgs, selectUserPage, makeSelectPageUser, makeSelectPageState, makeSelectModalOpen, makeSelectTempUserChanges }