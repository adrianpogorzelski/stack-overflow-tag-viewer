import React from "react";
import { useDispatch } from 'react-redux'
import SelectFilter from './SelectFilter'

const Filters = () => {

    const dispatch = useDispatch();

    const handleTagsPerPageChange = (e) => {
        dispatch({type: "SET_TAGS_PER_PAGE", payload: e.target.value})
    }

    const handleSortBy = (e) => {
        dispatch({type: "SET_SORT_BY", payload: e.target.value})
    }

    const handleSetOrder = (e) => {
        dispatch({type: "SET_ORDER", payload: e.target.value})
    };

    return (
        <div className='container my-5 mx-auto flex justify-center items-end'>

            <h2 className="text-xl sm:me-5">Filters</h2>

            <SelectFilter
                description="Tags per page"
                handlerFunction={handleTagsPerPageChange}
                options={[20, 50, 100]}
            />

            <SelectFilter
                description="Sort by"
                handlerFunction={handleSortBy}
                options={['popular', 'activity', 'name']}
            />

            <SelectFilter
                description="Order by"
                handlerFunction={handleSetOrder}
                options={['desc', 'asc']}
            />

        </div>
    )
}

export default Filters;