function DetailsPeople({result}) {

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
        <img className="details__image" src="images/dust.png"></img>
    </div>
    </section>

    
}