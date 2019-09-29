import { createSelector } from 'reselect';
// import { initialState } from './reducer';

const selectLocation = (state, props) => {
		return props.location.pathname.split('/')[2];
	}
	
const selectUser = (state, props) => {
		return state.app.users[props.location.pathname.split('/')[2]]
	}

const makeSelectLocation = () =>
	createSelector(
		selectLocation, 
		location => location
	); 

const makeSelectUser = () =>
 	createSelector(
		selectUser, 
		user => user
	);

export { selectLocation, makeSelectLocation, makeSelectUser}