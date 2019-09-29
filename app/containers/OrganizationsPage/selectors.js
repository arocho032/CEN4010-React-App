import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectOrganizations = state => {
	return state.organizations || initialState;
}

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
		orgs => orgs.tempOrg
	)

export { selectOrganizations, makeSelectOrganizations, makeSelectModalOpen, makeSelectTempOrg}