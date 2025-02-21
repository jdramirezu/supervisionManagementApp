import React from "react";
import StaffList from "./StaffList.jsx";

const Viewport = () =>{
    return(
        <>
            <div className="overflow-y-scroll h-160 border-y border-solid border-white py-5">
                <StaffList />
            </div>
        </>
    );
}

export default Viewport;