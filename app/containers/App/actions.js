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

export function attemptUserChange(password, user_id, tempUser) {
	return {
		type: "server/userUpdateProfile",
		data: {user_id: user_id, update: tempUser, password: password}
	}
	
}