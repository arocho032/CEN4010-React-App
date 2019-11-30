import produce from 'immer';
import { ON_VIEW_CHANGE } from './constants'

export const initialState = {
    view: "signin"
}

const loginReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch(action.type) {
            case ON_VIEW_CHANGE:
                draft.view = action.view
        }
    })

export default loginReducer