import React from "react";
import Maplogo from "../image/free-location-pointer-icon-2961-thumb.png";
function TravelRow(props){
    return(
        <div className="travel-row-parent">
            <img className="row-image" src={require(`../image/${props.TravelRow.imageUrl}`)}/>
            <div className="travel-row-sub">
                <div className="travel-row-subsec items">
                    <img className="mapPointer sub-items" src={Maplogo}/>
                    <span className="sub-items" >{props.TravelRow.location}</span>
                    <a className="sub-items grey" href={props.TravelRow.googleMapsUrl} target="blank">View on Google Maps</a>
                </div>
                <h1 className="bold items">{props.TravelRow.title}</h1>
                <p className="bold items">{`${props.TravelRow.startDate} - ${props.TravelRow.endDate}`}</p>
                <p  className=" items">{props.TravelRow.description}</p>
            </div>
        </div>
    )
}

export default TravelRow;