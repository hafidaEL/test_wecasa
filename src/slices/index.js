import { combineReducers } from 'redux'

import haircutPrestationReducer from './haircutPrestation'
import basketReducer from './basket'
import userReducer from './user'

const rootReducer = combineReducers({
    haircutPrestation: haircutPrestationReducer,
    basket: basketReducer,
    user: userReducer
})

export default rootReducer