import React from "react";
import Card from "./Card.jsx";

const StaffList = ({ employees, onRouteChange }) =>{
    return( !employees.length ?
        <h1>Loading</h1> :
        <>
            <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 lg:grid-cols-2 xl:grid-cols-3">
                {
                    employees.map((employee, i) =>{
                        return (
                            <Card
                                key={employee.id}
                                employee={employee}
                                onRouteChange={onRouteChange}
                            />
                        );
                    })
                }
            </div>
        </>
    );
}

export default StaffList;