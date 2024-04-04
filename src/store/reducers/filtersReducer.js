const initialState = {
    tagsPerPage: 20,
    sortBy: 'popular',
    order: 'desc'
}

const filtersReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_TAGS_PER_PAGE":
            return {
                ...state,
                tagsPerPage: action.payload
            };
        case "SET_SORT_BY":
            return {
                ...state,
                sortBy: action.payload
            };
        case "SET_ORDER":
            return {
                ...state,
                order: action.payload
            };
        default:
            return state
    }
}

export default filtersReducer;