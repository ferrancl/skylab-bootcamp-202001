function DetailsFilms({result, loggedIn, user, fav}) {

    return <section className="details">
        <div className="details__info">
            <div className="details__info-container">
                <p className="details__info-title details__category">TITLE</p>
                <p className="details__info-text">{result.title}</p>
            </div>
            <div className="details__info-container">
                <p className="details__info-description details__category">DESCRIPTION</p>
                <p className="details__info-text">{result.description}</p>
            </div>
            <div className="details__info-container">
                <p className="details__info-director details__category">DIRECTOR</p>
                <p className="details__info-text">{result.director}</p>
            </div>
            <div className="details__info-container">
                <p className="details__info-producer details__category">PRODUCER</p>
                <p className="details__info-text">{result.producer}</p>
            </div>
            <div className="details__info-container">
                <p className="details__info-release details__category">RELEASE</p>
                <p className="details__info-text">{result.release_date}</p>
            </div>
            <div className="details__info-container">
                <p className="details__info-score details__category">SCORE</p>
                <p className="details__info-text">{result.rt_score}</p>
            </div>

            <div onClick={() => fav(result.id, user)} className={user.favs.includes(result.id) ? "watchlist--clicked" : "watchlist"}>
                <button className="watchlist__button">
                    <img className="watchlist__img" src="images/plus.svg"/>
                    {loggedIn ? <span className="watchlist__text">ADD TO WATCHLIST</span>
                    : <span className="watchlist__text">LOGIN TO ADD TO WATCHLIST</span>}
                </button>
            </div>
            <img className="details__image" src="images/dust.png"></img>
        </div>
    </section>

    
}