import { combineReducers, createStore } from 'redux';
import themeReducer from './ducks/ThemeChange';

const reducer = combineReducers({
    currentTheme: themeReducer
});
const store = createStore(reducer);

export default store;