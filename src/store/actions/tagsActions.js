export const addTags = (data) => ({
    type: 'ADD_TAGS',
    payload: data,
});

export const addHasMore = (hasMore) => ({
    type: 'ADD_HASMORE',
    payload: hasMore,
})
