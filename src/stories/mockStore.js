import { Provider, createStore } from 'react-redux'

const initialState = {
    tags: {
        items: []
    },
    fetchState:
        {
            currentState: 'loading',
            errorMessage: null
        },
    page: {
        currentPage: 1
    }
}

const mockReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export const mockStore = createStore(mockReducer)

/*
export const mockStore = ( {tags = [], currentState = 'loading', errorMessage = null, currentPage = 1, children}) => {
    <Provider store={createStore({
            tags: {
                items: tags
            },
            fetchState:
                {
                    currentState: currentState,
                    errorMessage: errorMessage
                },
            page: {
                currentPage: currentPage
            }
        })}
    >
        {children}
    </Provider>
} */