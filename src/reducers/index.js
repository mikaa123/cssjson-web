import {combineReducers} from 'redux'
import {SEARCH_STATE_CHANGED, SET_SELECTED_PRODUCT} from './../actions'
import refinements from './refinements'

const searchState = (state = {}, action) => {
	switch (action.type) {
		case SEARCH_STATE_CHANGED:
			return action.state
		default:
			return state
	}
}

const selectedProduct = (state = null, action) => {
	switch (action.type) {
		case SET_SELECTED_PRODUCT:
			return action.product
		default:
			return state
	}
}

const rootReducer = combineReducers({
	refinements,
	searchState,
	selectedProduct
})

export default rootReducer
