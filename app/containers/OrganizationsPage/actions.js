import { 
	MODAL_STATE,
	ON_CHANGE_TEMP_ORG,
	SET_LOADED
} from './constants';

export function addOrganization(tempOrg, curUser) {
	return {
		type: "server/organizationCreate",
		data: {organization: tempOrg, user: curUser}
	}
}

export function modalStateOpen(set) {
	return {
		type: MODAL_STATE,
		setState: set
	}
}

export function onInputChange(name, value, checked) {
	return {
		type: ON_CHANGE_TEMP_ORG,
		update: {
			name: name,
			value: name == 'privacy' ? checked ? "PRIVATE" : "PUBLIC" : value
		}
	}
}

export function requestOrganizations(startIndex, count) {
	console.log("trace")
	return {
		type: 'server/organizationLoadAll',
		data: {organization: {startIndex: startIndex, count: count}}
	}
}

export function setLoaded(value) {
	console.log("Trace")	
	return {
		type: SET_LOADED,
		value: value,
	}
}