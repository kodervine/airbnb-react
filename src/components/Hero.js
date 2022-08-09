import React from "react"
import grid from "/Images/photo-grid.png"

export default function Hero (){
    return (
        <div className="hero-container">
            <img src={grid} />
            <div className="hero-text">
                <h1>Online experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}