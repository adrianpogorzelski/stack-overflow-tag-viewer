export const fetchTags = async (dispatch, currentPage) => {
    const ENDPOINT = "https://api.stackexchange.com/2.3/tags?"

    try {
        const response = await fetch(`${ENDPOINT}page=${currentPage}&order=desc&sort=popular&site=stackoverflow`)


        if (!response.ok) {
            const error = await response.json()
            const errorMessage = await `Error ${error.error_id}: ${error.error_name} - ${error.error_message}`
            dispatch({type: 'SET_ERROR', payload: errorMessage})
            throw new Error(errorMessage);
        }

        const data = await response.json();
        dispatch({ type: 'ADD_TAGS', payload: data.items });
        dispatch({type: 'SET_OK'})
        return data.items;

    } catch (e) {
        console.error(e)
        return e
    }
}