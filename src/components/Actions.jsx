import React from "react";

const Actions = ({ onRouteChange }) =>{
    return(
        <>
            <div className="my-5 grid grid-cols-9 px-10">
                <button
                    onClick={() => onRouteChange("newCandidate")}
                    type=""
                    className="col-span-1 col-start-2 flex justify-center rounded-md bg-indigo-600 px-3 py-3 text-base font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    New Candidate
                </button>
                <button
                    onClick={() => onRouteChange("edit")}
                    type=""
                    className="col-span-1 col-start-4 flex justify-center rounded-md bg-indigo-600 px-3 py-3 text-base font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Edit Candidate
                </button>
                <button
                    type=""
                    className="col-span-1 col-start-6 flex justify-center rounded-md bg-red-600 px-3 py-3 text-base font-semibold text-white shadow-xs hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Delete
                </button>
                <button
                    onClick={() => onRouteChange("login")}
                    type=""
                    className="col-span-1 col-start-8 flex justify-center rounded-md bg-red-600 px-3 py-3 text-base font-semibold text-white shadow-xs hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Exit
                </button>
            </div>
        </>
    );
}

export default Actions;