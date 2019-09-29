import { 
	ADD_ORGANIZATION, 
	MODAL_STATE,
	ON_CHANGE_TEMP_ORG
} from './constants';

export function addOrganization(preProsOrgDetails) {
	return {
		type: ADD_ORGANIZATION,
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
			value: name == 'priv' ? checked : value

		}
	}
}