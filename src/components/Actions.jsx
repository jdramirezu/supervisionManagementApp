import React from "react";

const Actions = () =>{
    return(
        <>
            <div className="my-5 grid grid-cols-7 px-10">
                <button
                    type=""
                    className="col-span-1 col-start-2 flex justify-center rounded-md bg-indigo-600 px-3 py-3 text-base font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    New Candidate
                </button>
                <button
                    type=""
                    className="col-span-1 col-end-7 flex justify-center rounded-md bg-indigo-600 px-3 py-3 text-base font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Edit Candidate
                </button>
            </div>
        </>
    );
}

export default Actions;