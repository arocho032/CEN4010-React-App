import produce from 'immer';
import { ON_LOGIN_ATTEMPT, ON_CHANGE_TEMP_USER, ON_LOGOUT, ON_ATTEMPT_USER_CHANGE } from './constants';

export const initialState = {
	curUser: null,
	notification: null, 
	tempUser: {
		username: "",
		password: ""
	},
	passwordCheck: null,
	users: {
		jdoe001: {
			id: "jdoe001",
			name: "Jane Doe",
			email: "jdoe001@hostname.com",
			phoneNum: "1 (800)-123-4567",
			priv: true,
			dob: "01-01-1990",
			passwrd: "toor"
		},
		johns2: {
			id: "johns2",
			name: "John Snow",
			email: "js@white.hl",
			phoneNum: "1 (800)-123-4568",
			priv: false,
			dob: "01-01-1990",
			passwrd: "toor"
		},
	}
};


const appReducer = (state = initialState, action) => 
	produce(state, draft => {
		switch (action.type) {
			case ON_LOGOUT:
				draft.curUser = null
				break;
			case ON_CHANGE_TEMP_USER:
				draft.tempUser[action.update.name] = action.update.value 
				break;
			case ON_LOGIN_ATTEMPT:
				if(state.users[state.tempUser.username] == null) {
					draft.notification = {
						title: "Failed Login",
						desc: "Username or Password not Correct"
					}
				} else {
					draft.curUser = state.users[state.tempUser.username]
				}
				break;
			case ON_ATTEMPT_USER_CHANGE:
				if(action.payload.req)
					draft.passwordCheck = {
						req: true,
						succ: action.payload.succ,
					}
				else {
					draft.passwordCheck = {
						req: false,
						succ: action.payload.succ
					}
					draft.users[action.payload.tempUser.id] = action.payload.tempUser
					draft.curUser = draft.users[action.payload.tempUser.id]
				}
				break;
		}
	});

export default appReducer;