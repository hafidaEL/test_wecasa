import { combineReducers } from 'redux'

import haircutPrestationReducer from './haircutPrestation'
import basketReducer from './basket'

const rootReducer = combineReducers({
    haircutPrestation: haircutPrestationReducer,
    basket: basketReducer,
})

export default rootReducer