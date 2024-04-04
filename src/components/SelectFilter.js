import React from "react";

const SelectFilter = ({description, handlerFunction, options}) => {

    return (
        <label className="form-control w-auto max-w-xs px-5">
            <div className="label">
                <span className="label-text">{description}</span>
            </div>
            <select
                className="select select-xs sm:select-sm select-bordered w-fit max-w-xs"
                onChange={handlerFunction}
            >
                {options.map((option => (
                    <option value={option}>{ // Change the names to more user-friendly ones
                        option === 'popular' ? "Popularity" :
                        option === 'activity' ? "Activity" :
                        option === 'name' ? "Name" :
                        option === 'asc' ? "Ascending" :
                        option === 'desc' ? 'Descending' :
                        option
                    }</option>
                )))}
            </select>
        </label>
    )
}

export default SelectFilter;