const initialState = {currentState: 'loading'}

const fetchStateReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_OK":
            return {
                ...state,
                currentState: 'ok'
            };
        case "SET_ERROR":
            return {
                ...state,
                currentState: 'error'
            };
        case "SET_LOADING":
            return {
                ...state,
                currentState: 'loading'
            };
        default:
            return state
    }
}

export default fetchStateReducer