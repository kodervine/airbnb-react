import React from "react"
import katie from "/Images/katie-zafares.png";
import star from "/Images/star.png";

export default function Card() {
    return (
        <div className="card-body">
            <p className="soldout-text">sold out</p>
            <img src={`../images/${props.img}`} alt="Katie"/>
            <div className="text-container">
                <div className="star-body">
                    <img src="/images/star.png" alt="Star image" />
                    <p>{props.rating} <span>{props.reviewCount}.{props.country}</span></p>
                </div>
                <p>{props.title}</p>
              <p className="person-text">From {props.price} <span>/ person</span></p>
            </div>
        </div>
    )
}