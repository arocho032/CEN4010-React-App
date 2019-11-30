import {
	MODAL_LOAD,
	MODAL_CLOSE,
	ON_CHANGE_TEMP_USER,
	SET_LOADED
} from './constants.js'


export function modalLoad(curUser) {
	return {
		type: MODAL_LOAD,
		payload: curUser
	}
} 

export function modalKill() {
	return {
		type: MODAL_CLOSE
	}
}

export function setLoaded(value) {
	return {
		type: SET_LOADED,
		value: value
	}
}

export function requestUser(username) {
	return {
		type: "server/userLoadUser",
		data: {user: {username: username}}
	}
}

export function onInputChange(name, value, checked) {
	return {
		type: ON_CHANGE_TEMP_USER,
		update: {
			name: name, 
			value: checked == null ? value : checked
		}
	}
}