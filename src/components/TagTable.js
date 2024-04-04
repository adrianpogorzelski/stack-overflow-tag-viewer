import React, {useEffect} from "react";
import {fetchTags} from "../services/fetchTags";
import { useDispatch, useSelector } from 'react-redux';

const TagTable = ({tags, currentState, errorMessage}) => {

    return (
        <div className="container min-h-screen">
            <table className="table mx-auto min-w-96 w-3/4">
                <thead>
                <tr>
                    <th className="text-left">Tag name</th>
                    <th className="text-right">Tag usage count</th>
                </tr>
                </thead>
            </table>

            {currentState === 'loading' ? /* Check if the fetch is completed */
                <div className='hero my-5'>
                    <span className="loading loading-spinner loading-lg"></span>
                </div> :

                /* ERROR STATE */
                (currentState === 'error' ? (
                    <div role="alert" className="alert alert-error mt-5 mx-auto w-3/4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{errorMessage}</span>
                    </div>
                    ) : ( // OK STATE
                        <>
                    <table className="table mx-auto min-w-96 w-3/4">
                        <tbody>
                            {tags.map((tag => (
                            <tr key={tag.name}>
                                <td className="text-left">{tag.name}</td>
                                <td className="text-right">{tag.count}</td>
                            </tr>
                            )))}
                        </tbody>
                    </table>
                    </>
                    )
                )
            }
        </div>
    )
}

export default TagTable;