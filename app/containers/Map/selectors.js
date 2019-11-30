import { createSelector } from 'reselect'
import { initialState } from './reducer.js'

const selectMapState = state => {
    return state.mapState || initialState
}

const makeSelectMapState = () => 
    createSelector(
        selectMapState,
        mapState => mapState
    )

export { selectMapState, makeSelectMapState }

