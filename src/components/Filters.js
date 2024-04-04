import React from "react";
import { useDispatch } from 'react-redux'

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

            <label className="form-control w-auto max-w-xs px-5">
                <div className="label">
                    <span className="label-text">Tags per page</span>
                </div>
                <select
                    className="select select-xs sm:select-sm select-bordered w-fit max-w-xs"
                    onChange={handleTagsPerPageChange}
                >
                    <option value='20'>20</option>
                    <option value='50'>50</option>
                    <option value='100'>100</option>
                </select>
            </label>

            <label className="form-control w-auto max-w-xs px-5">
                <div className="label">
                    <span className="label-text">Sort by</span>
                </div>
                <select
                    className="select select-xs sm:select-sm select-bordered w-fit max-w-xs"
                    onChange={handleSortBy}
                >
                    <option value='popular'>Popularity</option>
                    <option value='activity'>Activity</option>
                    <option value='name'>Name</option>
                </select>
            </label>

            <label className="form-control w-auto max-w-xs px-5">
                <div className="label">
                    <span className="label-text">Order by</span>
                </div>
                <select
                    className="select select-xs sm:select-sm select-bordered w-fit max-w-xs"
                    onChange={handleSetOrder}
                >
                    <option value='desc'>Descending</option>
                    <option value='asc'>Ascending</option>
                </select>
            </label>
        </div>
    )
}

export default Filters;