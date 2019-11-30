import { createSelector } from 'reselect';
import { initialState } from './reducer';

import { selectUser } from '../app/selectors';

const selectOrganizations = state => {
	return state.organizations || initialState;
}

const makeSelectPageState = () => 
	createSelector(
		selectOrganizations, 
		orgs => orgs.pageState
	)

const makeSelectOrganizations = () =>
	createSelector(
		selectOrganizations,
		orgs => orgs.orgs
	)

const makeSelectModalOpen = () => 
	createSelector(
		selectOrganizations, 
		orgs => orgs.modalOpen
	)

const makeSelectTempOrg = () => 
	createSelector(
		selectOrganizations,
		selectUser,
		(orgs, curUser) => {
			return {...orgs.tempOrg, user: curUser == null ? null : curUser.id}
		}
	)

export { makeSelectPageState, selectOrganizations, makeSelectOrganizations, makeSelectModalOpen, makeSelectTempOrg}