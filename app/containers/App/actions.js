import {
	ON_LOGIN_ATTEMPT,
	ON_CHANGE_TEMP_USER,
	ON_LOGOUT
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
