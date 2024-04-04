import TagTable  from '../components/TagTable';
import '../output.css'
import { store } from '../store/store'
import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'

export default {
    title: 'TagTable',
    component: TagTable,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [(Story) =>
        <Provider store={store}>
            <Story />
        </Provider>
    ],
};

export const Loading = {
    args: {
        currentState: 'loading',
    }
};

export const OK = {
    args: {
        tags: [
            {
                name: "first tag",
                count: 123
            },
            {
                name: "second tag",
                count: 456
            },
            {
                name: "third tag",
                count: 789
            }],
        currentState: 'ok',
    }
};

export const Error = {
    args: {
        currentState: 'error',
        errorMessage: 'Error 123: Something went very wrong'
    }
}



