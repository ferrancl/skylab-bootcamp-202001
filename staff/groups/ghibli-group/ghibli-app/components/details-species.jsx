function DetailsSpecies({result, loggedIn, linkedCharacters, linkedLocations, linkedSpecies, linkedVehicles}) {

    return <div className="details__info">
        <div className="details__info-container">
            <p className="details__info-title details__category">NAME</p>
            <p className="details__info-text">{result.name}</p>
        </div>
        <div className="details__info-container">
            <p className="details__info-description details__category">CLASSIFICATION</p>
            <p className="details__info-text">{result.classification}</p>
        </div>
        <div className="details__info-container">
            <p className="details__info-director details__category">EYE COLORS</p>
            <p className="details__info-text">{result.eye_colors}</p>
        </div>
        <div className="details__info-container">
            <p className="details__info-producer details__category">HAIR COLORS</p>
            <p className="details__info-text">{result.hair_colors}</p>
        </div>
        <img className="details__image" src="images/dust.png"></img>
    </div>
    
}