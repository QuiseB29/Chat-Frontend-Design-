import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Chat App</span>
            <div className="user">
                <img src="https://d3b3by4navws1f.cloudfront.net/shutterstock_315520139.jpg" alt="" />
                <span>John</span>
                <button>logout</button>


            </div>
        </div>
    )
}

export default Navbar;