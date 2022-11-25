import React from "react"
import ReactDOM from "react-dom"

function Card(props) {    
    return (
        <div className="card">
          <img src={props.item.imageUrl} className="card-image" />
            <div className="card-details">
                <h6>{props.item.location}<span className="location"><a href={props.item.googleMapsUrl}>View on Google Maps</a></span></h6>
                <h3>{props.item.title}</h3>
                <h5>{props.item.startDate} - {props.item.startDate}</h5>
                <p>{props.item.description}</p>
            </div>
        </div>
        
    )
}


export default Card
