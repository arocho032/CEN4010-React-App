import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSidebar = state => {
		return state.sidebar || initialState;
	}
	
const makeSelectSidebarVisibility = () =>
	createSelector(
		selectSidebar, 
		sidebar => sidebar.sidebarVisibility
	); 

export { selectSidebar, makeSelectSidebarVisibility }