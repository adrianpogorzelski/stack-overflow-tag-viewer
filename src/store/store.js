import { createStore } from 'redux';
import {combineReducers} from 'redux';
import tagsReducer from './reducers/tagsReducer'
import fetchStateReducer from './reducers/fetchStateReducer'

const reducers = combineReducers({
    tags: tagsReducer,
    fetchState: fetchStateReducer
})

export const store = createStore(reducers)
