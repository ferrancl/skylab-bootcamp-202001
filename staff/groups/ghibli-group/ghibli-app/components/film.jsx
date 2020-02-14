function Film({ item, category, loggedIn, user, onClick, goToLogin, fav}) {
    return <li className="item" >
    <h3 className="item-title" onClick={() => {
        onClick(item.id, category)
    }}>{item.title} ({item.release_date})</h3>
    <div onClick={() => user ? fav(item.id, user) : ''} className={!user ? "watchlist" : user.favs.includes(item.id) ? "watchlist--clicked" : "watchlist"}>
            <button className="watchlist__button">
                {loggedIn && !user.favs.includes(item.id) && <span className="watchlist__text"><img className="watchlist__img" src="images/plus.svg"/></span>}

                {loggedIn && user.favs.includes(item.id) && <span className="watchlist__text">-</span>}
            </button>
            {!loggedIn && <span className="watchlist__text"><img className="watchlist__img" src="images/plus.svg" onClick={() => goToLogin()}/></span>}
        </div>
</li>
}