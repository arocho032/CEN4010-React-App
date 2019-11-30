import {
	ON_LOGIN_ATTEMPT,
	ON_CHANGE_TEMP_USER,
	ON_LOGOUT,
	ON_ATTEMPT_USER_CHANGE,
	ON_REGISTRATION_ATTEMPT,
	ON_CHANGE_RESG_USER
} from './constants';

export function onLoginAttempt(tempUser) {
	return {
		type: "server/userLogin",
		data: {user: tempUser}
	}
}

export function onRegistrationAttempt(registerUser) {
	return {
		type: "server/userRegister",
		data: {user: registerUser}
	}
}


export function onLogout() {
	return {
		type: ON_LOGOUT,
	}	
}

export function onLoginInputChange(name, value, issuer) {
	if(issuer && issuer == "register")
		return {
			type: ON_CHANGE_RESG_USER,
			update: {
					name: name,
					value: value
				}
			}
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