import React from "react"
import katie from "/Images/katie-zafares.png";
import star from "/Images/star.png";

export default function Card() {
    return (
        <div className="card-body">
            <p className="soldout-text">sold out</p>
            <img src={katie} alt="Katie"/>
            <div className="text-container">
                <div className="star-body">
                    <img src={star} alt="Star image" />
                    <p>5.0 <span>(6).USA</span></p>
                </div>
                <p>Life lessons with Katie Zaferes</p>
              <p className="person-text">From 136 <span>/ person</span></p>
            </div>
        </div>
    )
}