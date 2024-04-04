export const setTagsPerPage = (number) => ({
    type: 'SET_TAGS_PER_PAGE',
    payload: number
});

export const setSortBy = (value) => ({
    type: 'SET_SORT_BY',
    payload: value
});

export const setOrder = (value) => ({
    type: 'SET_ORDER',
    payload: value
});