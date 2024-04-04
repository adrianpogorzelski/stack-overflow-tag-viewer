export const fetchTags = async (dispatch, currentPage, tagsPerPage, sortBy, order) => {

    const ENDPOINT = "https://api.stackexchange.com/2.3/tags?"

    try {
        const response = await fetch(
            `${ENDPOINT}
            page=${currentPage}
            &pagesize=${tagsPerPage}
            &order=${order}
            &sort=${sortBy}
            &site=stackoverflow`
        )

        if (!response.ok) {
            const error = await response.json()
            const errorMessage = await `Error ${error.error_id}: ${error.error_name} - ${error.error_message}`
            dispatch({type: 'SET_ERROR', payload: errorMessage})
            throw new Error(errorMessage);
        }

        const data = await response.json();
        dispatch({ type: 'ADD_TAGS', payload: data.items });
        dispatch({ type: 'ADD_HASMORE', payload: data.has_more });
        dispatch({type: 'SET_OK'});
        return data.items;

    } catch (e) {
        console.error(e)
        return e
    }
}