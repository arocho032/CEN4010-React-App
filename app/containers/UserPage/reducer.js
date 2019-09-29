import produce from 'immer';
import {
	MODAL_LOAD,
	MODAL_CLOSE, 
	ON_CHANGE_TEMP_USER,
	ON_ATTEMPT_USER_CHANGE
} from './constants'

export const initialState = {
	modalOpen: false,
	tempUserChanges: {
			id: "",
			name: "",
			email: "",
			phoneNum: "",
			priv: null,
			dob: "",
			password: ""
		},
}

const userpageReducer = (state = initialState, action) => 
	produce(state, draft => {
		switch (action.type) {
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
