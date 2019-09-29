import {
	MODAL_LOAD,
	MODAL_CLOSE,
	ON_CHANGE_TEMP_USER
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

export function onInputChange(name, value, checked) {
	return {
		type: ON_CHANGE_TEMP_USER,
		update: {
			name: name, 
			value: value
		}
	}
}