import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSidebar = state => {
		console.log(state)
		return state.sidebar || initialState;
	}
	
const makeSelectSidebarVisibility = () =>
	createSelector(
		selectSidebar, 
		sidebar => sidebar.sidebarVisibility
	); 

export { selectSidebar, makeSelectSidebarVisibility }