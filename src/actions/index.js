export const TOGGLE_REFINEMENTS = 'TOGGLE_REFINEMENTS'
export const toggleRefinements = () => ({
	type: TOGGLE_REFINEMENTS
})

export const SEARCH_STATE_CHANGED = 'SEARCH_STATE_CHANGED'
export const searchState = state => ({
	type: SEARCH_STATE_CHANGED,
	state
})

export const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT'
export const selectedProduct = product => ({
	type: SET_SELECTED_PRODUCT,
	product
})
