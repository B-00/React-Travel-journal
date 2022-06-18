import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.img} alt=""/>
            <div>
                <div className="card-loc-info">
                    <img className="card-pin" src={require('../images/pin.PNG')} alt="" />
                    <p className="card-location">{props.location}</p>
		    <a className="card-google-link" href={props.googlemaps}>View on Google Maps</a>
                </div>
                <div className="card-info">
                    <h1 className="card-title">{props.title}</h1>
                    <h4 className="card-date">{props.startdate} - {props.enddate}</h4>
                    <p className="card-desc">{props.desc}</p>
                </div>
            </div>
        </div>
    );
}
