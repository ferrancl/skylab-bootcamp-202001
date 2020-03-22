import React, { useEffect } from 'react'
import './Prove.sass'
import logo from './logo.png'

export default function () {
    // useEffect(() => {
    //     onMount()
    // }, [])

    return <>
        <header>
        <nav className="header">
            <ul class="nav">
                <li class="logo"><a href="landing.html"><img src={logo} className="header_icon" alt=""/></a></li>
                <li class="btn"><a href="#" class="btn-link">&#9776;</a>
                    <ul class="menu">
                        <li><a href="#work">Update Profile</a></li>
                        <li><a href="#about">My Books</a></li>
                        <li><a href="#careers">Search</a></li>
                        <li><a href="#contact">Logout</a></li>
                    </ul>
                </li>
            </ul>
            {/* <a href="landing.html"><img src={logo} className="header_icon" alt=""/></a>
            <h2 className="header_title">BOOKING DATA</h2> */}
        </nav>
    </header>
    </>
}