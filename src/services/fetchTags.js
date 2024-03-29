export const fetchTags = async () => {
    try {
        const response = await fetch("https://api.stackexchange.com/2.3/tags?order=xx&sort=popular&site=stackoverflow")

        if (!response.ok) {
            const error = await response.json()
            const errorMessage = `Error ${error.error_id}: ${error.error_name} - ${error.error_message}`
            throw errorMessage;
            return errorMessage;
        }
        return response.json();
    } catch (e) {
        console.error(e)
        return e
    }
}