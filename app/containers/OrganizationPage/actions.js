import {
    SET_LOADED,
    MODAL_STATE,
    ON_CHANGE_VALUE,
    ON_HANDLE_MAP_CLICK,
} from './constants'

export function setLoaded(value) {
	return {
		type: SET_LOADED,
		value: value
	}
}

export function modalStateOpen(modalName, set) {
	return {
        type: MODAL_STATE,
        modalName: modalName,
		setState: set
	}
}

export function onHandleMapClick(coordinates) {
    return {
        type: ON_HANDLE_MAP_CLICK,
        coordinates: coordinates
    }
}

export function onInputChange(name, target, value, checked) {
    console.log(name, target, value, checked)
	return {
		type: ON_CHANGE_VALUE,
		update: {
            name: name,
            target: target,
			value: name == 'eventVisibility' ? checked : value
		}
	}
}

export function addEvent(tempEventCoor, tempEvent, hostedBy) {
    return {
        type: "server/eventCreate",
        data: {event: {...tempEvent, ...tempEventCoor, hostedBy: hostedBy}}
    }
}

export function cancelEvent(event_id) {
    return {
        type: "server/cancelEvent",
        data: {event: {event_id: event_id}}
    }
}

export function joinOrganization(username, organization_id) {
    return {
        type: "server/organizationJoin",
        data: {organization_id: organization_id, username: username}
    }
}

export function grantRole(username, roleId, orgId) {
    return {
        type: "server/organizationGrantRole",
        data: {organization_id: orgId, username: username, roleId: roleId}
    }
}

export function requestOrganization(organization_id) {
    return {
        type: "server/organizationLoadOrganization",
        data: {organization: {organization_id: organization_id.toString()}}
    }
}

export function requestEvents(organization_id, startIndex) {
    return {
        type: "server/organizationLoadEventsFromOrganization",
        data: {organization: {organization_id: organization_id.toString(), startIndex: startIndex}}
    }
}

export function requestMembers(organization_id, startIndex) {
    return {
        type: "server/organizationLoadUsersFromOrganization",
        data: {organization: {organization_id: organization_id.toString(), startIndex: startIndex}}
    }
}