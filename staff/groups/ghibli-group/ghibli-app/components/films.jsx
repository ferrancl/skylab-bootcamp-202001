function Films({results, category, onClick, goToLogin, user, fav, loggedIn}) {
    return <ul className="results">
        <div className="results__title-container">
            <h2 className="results__title">{category.toUpperCase()}</h2>
        </div>
        <div className="results__container">
            {results.map(item => <Film key={item.id} item={item} category={category} onClick={onClick} user={user} fav={fav} loggedIn={loggedIn} goToLogin={goToLogin}/>)}
        </div>
    </ul> 
}