const initialState = {
    currentPage: 1
}

const pageReducer = (state = initialState, action) => {
    switch(action.type) {
        case "NEXT_PAGE":
            return {
                ...state,
                currentPage: state.currentPage + 1
            };
        case "PREVIOUS_PAGE":
            return {
                ...state,
                currentPage: state.currentPage - 1
            };
        default:
            return state
    }
}

export default pageReducer;
