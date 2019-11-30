import produce from 'immer'
import {
    SET_LOADED
} from './constants'

export const initialState = {
    pageState: {
        isLoaded: false,
	},
    events: [],
}

const homepageReducer = (state = initialState, action) => 
    produce(state, draft => {
        switch(action.type) {
            case SET_LOADED:
                draft.pageState.isLoaded = action.value;
                break;
            case "successAllEventsLoaded":
                console.log(action)
                draft.events = [...JSON.parse(action.data)]
                break;
        }
    })

export default homepageReducer;