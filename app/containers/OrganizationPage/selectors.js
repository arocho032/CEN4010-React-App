import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectOrgPage = (state) => state.orgpage || initialState
const selectTempEvent = (state) => state.orgpage.tempEvent || initialState.tempEvent

const makeSelectPageState = () => 
	createSelector(
		selectOrgPage, 
		org => org.pageState
	)

const makeSelectPageOrg = () => 
	createSelector(
		selectOrgPage, 
		org => org.pageValues
	)

const makeSelectEvents = () => 
    createSelector(
        selectOrgPage,
        org => org.events
    )

const makeSelectTempEvent = () => 
    createSelector(
        selectTempEvent,
        tempEvent => tempEvent
    )

const makeSelectModalOpen = (modalName) =>
    createSelector(
        selectOrgPage,
        org => org.pageState[modalName]
    )

const makeSelectMembers = () => 
    createSelector(
        selectOrgPage,
        org => org.members
    )

const makeSelectTempEventCoor = () =>
    createSelector(
        selectOrgPage,
        org => org.tempEventCoor
    )

const makeSelectTempGrantRole = () =>
    createSelector(
        selectOrgPage,
        org => org.tempGrantRole
    )

const makeSelectTempCancelEvent = () =>
    createSelector(
        selectOrgPage,
        org => org.tempCancelEvent,
    )

export { makeSelectTempCancelEvent, selectOrgPage, makeSelectTempEventCoor, makeSelectPageState, makeSelectTempEvent, makeSelectTempGrantRole, makeSelectModalOpen, makeSelectPageOrg, makeSelectEvents, makeSelectMembers}