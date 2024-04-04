import TagTable  from '../components/TagTable';
import '../output.css'
import { store } from '../store/store'
import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'

export default {
    title: 'Components/TagTable',
    component: TagTable,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [(Story) =>
        <Provider store={store}>
            <Story />
        </Provider>
    ]
};

export const Render = {};

export const Loading = {
};

