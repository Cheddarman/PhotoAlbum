import {createStore} from 'redux'
import {albumReducer} from './reducers/albums'

const store = createStore(albumReducer)

export default store