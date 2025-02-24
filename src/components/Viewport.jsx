import React from "react";
import StaffList from "./StaffList.jsx";

const Viewport = ({employees, onRouteChange}) =>{
    return( !employees.length ?
        <h1>Loading</h1> :
        <>
            <div className="overflow-y-scroll h-160 border-y border-solid border-white py-5">
                <StaffList employees={employees} onRouteChange={onRouteChange}/>
            </div>
        </>
    );
}

export default Viewport;