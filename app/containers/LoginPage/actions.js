import { ON_VIEW_CHANGE } from './constants'

export function onChangeView(target) {
    return {
        type: ON_VIEW_CHANGE,
        view: target
    }
}