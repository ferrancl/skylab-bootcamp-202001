function DetailsLocations({result, loggedIn, linkedFilms, linkedCharacters, linkedSpecies, linkedVehicles, onClick}) {
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
        {linkedFilms!== undefined && <div className="details__info-container">{ <Films key={name.id} category={'films'} results={linkedFilms} onClick={onClick}/>}</div>}
        {linkedCharacters!== undefined && <div className="details__info-container">{<People key={name.id} category={'people'} results={linkedCharacters} onClick={onClick}/>}</div>}
        {linkedSpecies!== undefined && <div className="details__info-container">{ <Species key={name.id} category={'species'} results={linkedSpecies} onClick={onClick}/>}</div>}
        {linkedVehicles!== undefined && <div className="details__info-container">{ <Vehicles key={name.id} category={'vehicles'} results={linkedVehicles} onClick={onClick}/>}</div>}
        <img className="details__image" src="images/dust.png"></img>
    </div>

    
}