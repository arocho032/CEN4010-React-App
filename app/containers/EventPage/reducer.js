import produce from 'immer'

import {
    SET_LOADED
} from './constants'

export const initialState = {
    pageState: {
        isLoaded: false,
    },
    pageValues: null
}

const eventpageReducer = (state = initialState, action) => 
    produce(state, draft => {
        switch (action.type) {
            case SET_LOADED:
                draft.pageState.isLoaded = action.value
                break;
            case "successLoadingEvent":
                draft.pageValues = {...action.data}
                break;
            case "successAttendingEvent":
                draft.pageState.isLoaded = false;
                break;
        }
    })

export default eventpageReducer