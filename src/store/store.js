import { createStore } from 'redux';
import {combineReducers} from 'redux';
import tagsReducer from './reducers/tagsReducer'
import fetchStateReducer from './reducers/fetchStateReducer'
import pageReducer from './reducers/pageReducer'

const reducers = combineReducers({
    tags: tagsReducer,
    fetchState: fetchStateReducer,
    page: pageReducer
})

export const store = createStore(reducers)
