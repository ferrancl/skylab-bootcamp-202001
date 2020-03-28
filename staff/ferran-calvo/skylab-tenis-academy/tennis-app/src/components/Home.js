import React, { useState, useEffect, useContext } from 'react'
import './Info.sass'
import './Footer.sass'
import clay from './clay.jpg'
import hard from './hard-court.jpeg'
import tennis from './tennis.jpg'
import activities from './activities.jpg'
import gym from './gym.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default (function ({ }) {

    return <>
        <section className="info">
        <img  className="info_image" src={clay} alt=""/>
        <h3 className="info_title">WELCOME TO BREAK POINT CLUB</h3>
        <h6 className="info_subtitle">More than 20.000 m² for practicing sport </h6>
        <p className="info_description">En Vall Parc tienes todo lo que necesitas para poder competir y practicar deporte en un entorno idílico. Un espacio para disfrutar del deporte y la naturaleza sin salir de Barcelona. Una oferta completa que incluye nuestras escuelas de tenis y pádel para todas las edades, pistas de squash y frontón, zonas de fitness y gimnasio, piscinas y restaurante.

            Más de 20 pistas de tenis y pádel para edad infantil, juvenil y adulto, rodeadas por el Parc Natural de la Serra de Collserola, una zona privilegiada.</p>
        <img  className="info_image" src={hard} alt=""/>

        <h6 className="info_subtitle">10 courts: 5 clay and 5 hardcourt</h6>
        <p className="info_description">En Vall Parc tienes todo lo que necesitas para poder competir y practicar deporte en un entorno idílico. Un espacio para disfrutar del deporte y la naturaleza sin salir de Barcelona. Una oferta completa que incluye nuestras escuelas de tenis y pádel para todas las edades, pistas de squash y frontón, zonas de fitness y gimnasio, piscinas y restaurante.

            Más de 20 pistas de tenis y pádel para edad infantil, juvenil y adulto, rodeadas por el Parc Natural de la Serra de Collserola, una zona privilegiada.</p>

        <div className="info_activities">
            <img src={tennis} className="info_activities_image" alt=""/>
            <p className="info_text">TENNIS</p>
        </div>
        <div className="info_activities">
            <img src={gym} className="info_activities_image" alt=""/>
            <p className="info_text">GYM</p>
        </div>
        <div className="info_activities">
            <img src={activities} className="info_activities_image" alt=""/>
            <p className="info_text">ACTIVITIES</p>
        </div>
    </section>
    <footer className="footer">
        <p className="footer_text"><FontAwesomeIcon className="header_icon" icon={faLocationArrow} size="1x" color="#ff1414" />Street 11 Nº 22, 3333 Barcelona</p>
        <p className="footer_text"><FontAwesomeIcon className="header_icon" icon={faPhone} size="1x" color="#ff1414" />   111 222 3333</p>
        <p className="footer_text"><FontAwesomeIcon className="header_icon" icon={faEnvelope} size="1x" color="#ff1414" />   break.point.club@gmail.com</p>
    </footer>
    </>
})