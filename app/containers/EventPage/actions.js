import {
    SET_LOADED
} from './constants'

export function setPageStateLoaded(value) {
    return {
        type: SET_LOADED,
        value: value
    }
}

export function requestEvent(event_id) {
    return {
        type: 'server/eventLoadEvent',
        data: {event_id: event_id}
    }
}

export function attendEvent(event_id, user_id) {
    return {
        type: 'server/eventAttend',
        data: {event_id: event_id, user_id: user_id}
    }
}