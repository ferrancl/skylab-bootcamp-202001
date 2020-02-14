function DetailsPeople({result, linkedFilms, linkedLocations, linkedSpecies, linkedVehicles, onClick, goBack, category, query, image, goToLogin}) {

    return <section className="details">
    <div className="details__info">
        <div className="details__info-container">
            <p className="details__info-title details__category">NAME</p>
            <p className="details__info-text">{result.name}</p>
        </div>
        <div className="details__info-container">
            <p className="details__info-description details__category">GENDER</p>
            <p className="details__info-text">{result.gender}</p>
        </div>
        <div className="details__info-container">
            <p className="details__info-director details__category">AGE</p>
            <p className="details__info-text">{result.age} years-old</p>
        </div>
        <div className="details__info-container">
            <p className="details__info-producer details__category">EYE COLOR</p>
            <p className="details__info-text">{result.eye_color}</p>
        </div>
        <div className="details__info-container">
            <p className="details__info-release details__category">HAIR COLOR</p>
            <p className="details__info-text">{result.hair_color}</p>
        </div>
        {linkedFilms!== undefined && <div className="details__info-container">{ <Films key={name.id} category={'films'} results={linkedFilms} onClick={onClick} goToLogin={goToLogin}/>}</div>}
        {linkedLocations!== undefined && <div className="details__info-container">{ <Locations key={name.id} category={'locations'} results={linkedLocations} onClick={onClick}/>}</div>}
        {linkedSpecies!== undefined && <div className="details__info-container">{ <Species key={name.id} category={'species'} results={linkedSpecies} onClick={onClick}/>}</div>}
        {linkedVehicles!== undefined && <div className="details__info-container">{ <Vehicles key={name.id} category={'vehicles'} results={linkedVehicles} onClick={onClick}/>}</div>}

        <img className="details__image" src={image[Math.floor(Math.random() * 4)]}></img>

        <a href="" className="goback" onClick={event => {
            event.preventDefault()
            goBack(category, query)
        }} >Go Back</a>

    </div>
    </section>    
}