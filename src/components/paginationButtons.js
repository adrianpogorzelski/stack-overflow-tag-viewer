import React from "react";
import { useDispatch } from 'react-redux'

const PaginationButtons = ({currentPage, hasMore}) => {

    const dispatch = useDispatch();

    return (
        <div className="join grid grid-cols-2 w-96 mx-auto my-5">
            <button className="join-item btn btn-outline" // ** PREVIOUS PAGE BUTTON **
                    onClick={() => dispatch({type: "PREVIOUS_PAGE"})}
                    disabled={currentPage <= 1 ? true : false} // Disable button on first (and any number below if so happens) pages
            >
                Previous page
            </button>
            <button className="join-item btn btn-outline" // ** NEXT PAGE BUTTON **
                    onClick={() => dispatch({type: "NEXT_PAGE"})}
                    disabled={hasMore ? false : true} // If there are no more pages, disable Next button
            >
                Next page
            </button>
        </div>
    )
}

export default PaginationButtons;
