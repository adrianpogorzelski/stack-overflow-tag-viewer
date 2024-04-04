const initialState = {
    items: []
}

const tagsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TAGS":
            return {
                ...state,
                items: action.payload
            };
        default:
            return state
    }
}

export default tagsReducer;