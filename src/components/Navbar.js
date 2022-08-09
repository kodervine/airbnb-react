import React from "react"
import airbnbLogo from "/Images/airbnb-logo.png"

export default function Navbar() {
    return (
            <nav className="navbar">
                <img src={airbnbLogo} alt="airbnb logo" />
            </nav>
    )
}