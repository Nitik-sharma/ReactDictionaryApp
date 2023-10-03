import {createStore,combineReducers} from 'redux'
import historyReducer from './reducer/Reducer'

const rootReducer =combineReducers({
    history:historyReducer,
})

const store =createStore(rootReducer);

export default store;