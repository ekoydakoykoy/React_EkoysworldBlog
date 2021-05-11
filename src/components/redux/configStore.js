import { combineReducers, createStore } from 'redux';
import themeReducer from './ducks/ThemeChange';
import pageReducer from './ducks/CurrentPage';

const reducer = combineReducers({
    currentTheme: themeReducer,
    currentPage: pageReducer
});
const store = createStore(reducer);

export default store;
