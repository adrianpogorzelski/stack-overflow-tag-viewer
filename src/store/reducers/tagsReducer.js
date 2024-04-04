const initialState = {
    items: [],
    hasMore: false
}

const tagsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TAGS":
            return {
                ...state,
                items: action.payload
            };
        case "ADD_HASMORE":
            return {
                ...state,
                hasMore: action.payload
            }
        default:
            return state
    }
}

export default tagsReducer;