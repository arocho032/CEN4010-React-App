import {
	ON_LOGIN_ATTEMPT,
	ON_CHANGE_TEMP_USER,
	ON_LOGOUT,
	ON_ATTEMPT_USER_CHANGE
} from './constants';

export function onLoginAttempt() {
	return {
		type: ON_LOGIN_ATTEMPT,
	}
}

export function onLogout() {
	return {
		type: ON_LOGOUT,
	}	
}

export function onLoginInputChange(name, value) {
	return {
		type: ON_CHANGE_TEMP_USER,
		update: {
			name: name,
			value: value
		}
	}
}

export function attemptUserChange(checkPassword, password, curPassword, tempUser) {
	var payload = {}
	if(checkPassword == null)
		payload = {
			req: true,
			succ: null
		}
	else if (password == curPassword) 
		payload = {
			req: false,
			succ: true,
			tempUser: tempUser
		}
	else 
		payload = {
			req: true,
			succ: false
		}
	return {
		type: ON_ATTEMPT_USER_CHANGE,
		payload: payload
	}
}