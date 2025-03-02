import React from "react";
import { useNavigate } from "react-router-dom";

const Actions = () =>{
    const navigate = useNavigate();
    
    return(
        <>
            <div className="my-5 grid grid-cols-5 px-10">
                <button
                    onClick={() => navigate("/NewCandidate")}
                    type=""
                    className="col-span-1 col-start-2 flex justify-center rounded-md bg-indigo-600 px-3 py-3 text-base font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    New Candidate
                </button>
                
                <button
                    onClick={() => navigate('/')}
                    type=""
                    className="col-span-1 col-start-4 flex justify-center rounded-md bg-red-600 px-3 py-3 text-base font-semibold text-white shadow-xs hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Exit
                </button>
            </div>
        </>
    );
}

export default Actions;