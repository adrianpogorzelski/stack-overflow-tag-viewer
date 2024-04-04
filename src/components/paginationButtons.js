import React from "react";
import { useDispatch, useSelector } from 'react-redux'

const PaginationButtons = ({currentPage, hasMore}) => {

    const dispatch = useDispatch();

    return (
        <div className="join grid grid-cols-2 w-96 mx-auto my-5">
            <button className="join-item btn btn-outline"
                    onClick={() => dispatch({type: "PREVIOUS_PAGE"})}
                    disabled={currentPage <= 1 ? true : false}
            >
                Previous page
            </button>
            <button className="join-item btn btn-outline"
                    onClick={() => dispatch({type: "NEXT_PAGE"})}
                    disabled={hasMore ? false : true}
            >
                Next page
            </button>
        </div>
    )
}

export default PaginationButtons;
