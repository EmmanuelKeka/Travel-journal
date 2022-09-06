import React from "react";
import TravelRow from "./TravelRow"
import TravelData from "../data/TravelData";
function MainBody(){
    let TravelRows = TravelData.map(travelRow => {
        return(
            <TravelRow TravelRow = {travelRow}/>
        )
    })
    return(
        <>
            {TravelRows}
        </>
    )
}
export default MainBody;