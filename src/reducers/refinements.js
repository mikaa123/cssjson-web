import {combineReducers} from 'redux'
import {TOGGLE_REFINEMENTS} from './../actions'

const visible = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_REFINEMENTS:
			return !state
		default:
			return state
	}
}

export default combineReducers({
	visible
})
