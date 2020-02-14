function DetailsFilms({result, loggedIn, user, fav, linkedCharacters, linkedLocations, linkedSpecies, linkedVehicles, onClick, goToLogin, goBack, category, query, image}) {    
    
  return <section className="details">
    <div className="poster-container">
            <a href="" className="goback" onClick={event => {
                event.preventDefault()
                goBack(category, query)
            }} >GO BACK</a>
        <img className="poster" src={`images/${result.title.split(' ').join('')}.jpg`}></img>
    </div>
    <div className="details__container">
        <div className="details__info">
            <div className="details__info-container">
                <h2 className="details__info-title details__category">TITLE</h2>
                <p className="details__info-text">{result.title}</p>
            </div>
            <div className="details__info-container">
                <h2 className="details__info-description details__category">DESCRIPTION</h2>
                <p className="details__info-text">{result.description}</p>
            </div>
            <div className="details__info-container">
                <h2 className="details__info-director details__category">DIRECTOR</h2>
                <p className="details__info-text">{result.director}</p>
            </div>
            <div className="details__info-container">
                <h2 className="details__info-producer details__category">PRODUCER</h2>
                <p className="details__info-text">{result.producer}</p>
            </div>
            <div className="details__info-container">
                <h2 className="details__info-release details__category">RELEASE</h2>
                <p className="details__info-text">{result.release_date}</p>
            </div>
            <div className="details__info-container">
                <h2 className="details__info-score details__category">SCORE</h2>
                <p className="details__info-text">{result.rt_score}</p>
            </div>
            <h3 className="details__category featured">FEATURED:</h3>
            {linkedCharacters !== undefined  && <div className="details__info-container">{ <People key={name.id} category={'people'} results={linkedCharacters} onClick={onClick}/>}</div>}
            {linkedLocations !== undefined && <div className="details__info-container">{ <Locations key={name.id} category={'locations'} results={linkedLocations} onClick={onClick}/>}</div>}
            {linkedSpecies !== undefined && <div className="details__info-container">{ <Species key={name.id} category={'species'} results={linkedSpecies} onClick={onClick}/>}</div>}
            {linkedVehicles !== undefined && <div className="details__info-container">{ <Vehicles key={name.id} category={'vehicles'} results={linkedVehicles} onClick={onClick}/>}</div>}
            <div onClick={() => user ? fav(result.id, user) : ''} className={!user ? "watchlist" : user.favs.includes(result.id) ? "watchlist--clicked" : "watchlist"}>
                <button className="watchlist__button">

                    {loggedIn && !user.favs.includes(result.id) && <span className="watchlist__text"><img className="watchlist__img" src="images/plus.svg"/></span>}

                    {loggedIn && user.favs.includes(result.id) && <img className="watchlist__img" src="images/minus.svg"/>}

                    {!loggedIn && <img className="watchlist__img" src="images/plus.svg"/>}

                    {/* <img className="watchlist__img" src="images/plus.svg"/> */}

                    {loggedIn && !user.favs.includes(result.id) && <span className="watchlist__text">ADD TO WATCHLIST</span>}

                    {loggedIn && user.favs.includes(result.id) && <span className="watchlist__text">REMOVE FROM WATCHLIST</span>}

                    {!loggedIn && <span className="watchlist__text" onClick={goToLogin}>LOGIN TO ADD TO WATCHLIST</span>}
                </button>
            </div>

            {/* <img className="details__image" src={image[Math.floor(Math.random() * 4)]}></img> */}

        </div>
    </div>
</section>

    
}