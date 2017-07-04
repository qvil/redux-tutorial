// Actions
export const INCREMENT = 'redux-tutorial/counter/INCREMENT';
export const DECREMENT = 'redux-tutorial/counter/DECREMENT';

export const increase = () => ({
    type: INCREMENT
});

export const decrease = () => ({
    type: DECREMENT
});

const initialState = {
    count: 0
};

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }            
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }            
        default:
            return state;
    }
}

export default reducer;