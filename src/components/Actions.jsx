import React from "react";
import { useNavigate } from "react-router-dom";
import { useEmployee } from "../contexts/EmployeeContext";

const Actions = () =>{
    const { onExit, userRole } = useEmployee();
    const navigate = useNavigate();
    
    return(
        <>
            <div className="my-5 grid grid-cols-5 px-10">
                <button
                    onClick={() => navigate("/NewCandidate")}
                    type="button"
                    disabled={userRole !== "Admin"}
                    className={`col-span-1 col-start-2 flex justify-center rounded-md px-3 py-3 text-base font-semibold text-white
                                shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                                ${userRole === "Admin" ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-400 cursor-not-allowed"} group/forTooltip`}
                >
                    New Candidate
                    {userRole !== 'Admin' &&(
                    <span className="absolute invisible left-1/2 mb-8 -mt-1 -translate-x-40 rounded-md bg-gray-700 px-3 py-1 text-s text-white group-hover/forTooltip:visible">
                        Access Denied
                    </span>
                    )}
                </button>
                
                <button
                    onClick={() => {
                        onExit()
                        navigate('/')
                    }}
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