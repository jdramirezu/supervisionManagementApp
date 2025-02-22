import React from "react";
import Card from "./Card.jsx";

const StaffList = () =>{
    return(
        <>
            <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 lg:grid-cols-2 xl:grid-cols-3">
                <Card name={"John Doe"} id={"00123456"} status={"Active"} contract={"Part time"} area={"Area 1"}/>
                <Card name={"Peter Smith"} id={"00123846"} status={"Active"} contract={"Full time"} area={"Area 3"}/>
                <Card name={"Karol Boyle"} id={"00184344"} status={"Inactive"} contract={"Full time"} area={"Area 2"}/>
                <Card name={"Susan Bones"} id={"00246848"} status={"Active"} contract={"Part time"} area={"Area 2"}/>
                <Card name={"Michael Green"} id={"00354655"} status={"Inactive"} contract={"Full time"} area={"Area 1"}/>
                <Card name={"Michelle Matthews"} id={"00213514"} status={"Inactive"} contract={"Part time"} area={"Area 3"}/>
            </div>
        </>
    );
}

export default StaffList;