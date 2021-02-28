//action
const TOGGLETHEME = 'toggleTheme';


export const toggleTheme = () => ({
    type: TOGGLETHEME
});


// initial state;
const initialState = {
    theme: true
}

// reducer 
export default ( state = initialState, {type}) => {
        switch(type) {
            case TOGGLETHEME:
                return {...state, theme: !state.theme }
            default:
                return state;
        }
}
