export const setOK = () => ({
    type: 'SET_OK'
});

export const setError = (errorMessage) => ({
    type: 'SET_ERROR',
    payload: errorMessage;
});

export const setLoading = () => ({
    type: 'SET_LOADING'
});