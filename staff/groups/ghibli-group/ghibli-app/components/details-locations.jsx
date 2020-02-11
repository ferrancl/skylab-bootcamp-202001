function DetailsLocations({result}) {

    return <div className="details__info">
        <div className="details__info-container">
            <p className="details__info-title details__category">NAME</p>
            <p className="details__info-text">{result.name}</p>
        </div>
        <div className="details__info-container">
            <p className="details__info-description details__category">CLIMATE</p>
            <p className="details__info-text">{result.climate}</p>
        </div>
        <div className="details__info-container">
            <p className="details__info-director details__category">TERRAIN</p>
            <p className="details__info-text">{result.terrain}</p>
        </div>
        <img className="details__image" src="images/dust.png"></img>
    </div>

    
}