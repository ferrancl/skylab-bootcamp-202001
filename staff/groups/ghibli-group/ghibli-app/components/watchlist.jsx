function Watchlist ({favs, onClick, loggedIn, fav, user={user}}) {
    return <ul className="results">
    <h2 className="results__title">WATCHLIST</h2>
    {favs && favs.map(item => <Film key={item.id} item={item} category='films' onClick={onClick} loggedIn={loggedIn} fav={fav} user={user}/>)}
    {!favs && <span className="no-watchlist">You have no movies in your watchlist!</span>}
</ul> 
}