function DetailsVehicles({result, loggedIn, onClick, linkedFilms, linkedCharacters, linkedLocations, linkedSpecies}) {

    return <div className="details__info">
        <div className="details__info-container">
            <p className="details__info-title details__category">NAME</p>
            <p className="details__info-text">{result.name}</p>
        </div>
        <div className="details__info-container">
            <p className="details__info-description details__category">DESCRIPTION</p>
            <p className="details__info-text">{result.description}</p>
        </div>
        <div className="details__info-container">
            <p className="details__info-director details__category">VEHICLE CLASS</p>
            <p className="details__info-text">{result.vehicle_class}</p>
        </div>
        <div className="details__info-container">
            <p className="details__info-producer details__category">LENGTH</p>
            <p className="details__info-text">{result.length}ft</p>
        </div>
        {linkedFilms!== undefined && <div className="details__info-container">{ <Films key={name.id} category={'films'} results={linkedFilms} onClick={onClick}/>}</div>}
        {linkedCharacters!== undefined && <div className="details__info-container">{ <People key={name.id} category={'species'} results={linkedCharacters} onClick={onClick}/>}</div>}
        {linkedLocations!== undefined && <div className="details__info-container">{ <Locations key={name.id} category={'locations'} results={linkedLocations} onClick={onClick}/>}</div>}
        {linkedSpecies!== undefined && <div className="details__info-container">{ <Species key={name.id} category={'vehicles'} results={linkedVehicles} onClick={onClick}/>}</div>}
        <img className="details__image" src="images/dust.png"/>
    </div>

}