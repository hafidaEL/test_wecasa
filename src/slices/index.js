import { combineReducers } from 'redux'

import haircutPrestationReducer from './haircutPrestation'

const rootReducer = combineReducers({
    haircutPrestation: haircutPrestationReducer,
})

export default rootReducer