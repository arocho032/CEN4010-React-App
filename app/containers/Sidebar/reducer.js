import produce from 'immer';
import { SHOW_SIDEBAR } from './constants';

export const initialState = {
	sidebarVisibility: false,
};

const sidebarReducer = (state = initialState, action) => 
	produce(state, draft => {
		console.log(state);
		switch (action.type) {
			case SHOW_SIDEBAR:
				console.log(action.sidebarVisibility)
				draft.sidebarVisibility = action.sidebarVisibility;
				break;
		}
	});

export default sidebarReducer;