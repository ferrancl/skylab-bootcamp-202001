import React, { useEffect } from 'react'
import './Header.sass'
import logo from './logo.png'

export default function () {
    // useEffect(() => {
    //     onMount()
    // }, [])

    return <>
        <header>
        <nav className="header">
            <a href="landing.html"><img src={logo} className="header_icon" alt=""/></a>
            <h2 className="header_title">BOOKING DATA</h2>
        </nav>
    </header>
    </>
}