import {
    SET_LOADED
} from './constants'

export function requestAllEvents(startIndex) {
    return {
        type: "server/eventLoadAllEvent",
        data: {organization: {startIndex: startIndex}}
    }
}

export function setPageStateLoaded(value) {
    console.log(SET_LOADED)
    return {
        type: SET_LOADED,
        value: value,
    }
}