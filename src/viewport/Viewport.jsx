import React from "react";
import StaffList from "../staffList/StaffList.jsx";

const Viewport = () =>{
    return(
        <>
            <div className="overflow-y-scroll h-160 border border-solid border-white">
                <StaffList />
            </div>
        </>
    );
}

export default Viewport;