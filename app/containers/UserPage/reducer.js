import produce from 'immer';
import {
	MODAL_LOAD,
	MODAL_CLOSE, 
	ON_CHANGE_TEMP_USER,
	SET_LOADED
} from './constants'

export const initialState = {
	pageState: {
		isLoaded: false,
		modalOpen: false
	},
	pageValues: null,
	tempUserChanges: {
			id: "",
			name: "",
			email: "",
			priv: null,
			password: ""
		},
}

const userpageReducer = (state = initialState, action) => 
	produce(state, draft => {
		switch (action.type) {
			case "successfulUserloaded":
				draft.pageValues = {...action.user}
				break;
			case SET_LOADED:
				draft.pageState.isLoaded = action.value
				break;
			case MODAL_LOAD:
				draft.modalOpen = true;
				draft.tempUserChanges = action.payload
				break;
			case MODAL_CLOSE:
				draft.modalOpen = false
				draft.tempUser = initialState['tempUserChanges']
				break;
			case ON_CHANGE_TEMP_USER:
				draft.tempUserChanges[action.update.name] = action.update.value
				break;
		}
	})

export default userpageReducer
