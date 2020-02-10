function Landing ({goToResults}) {
    return <ul className="results">
            <li className="results__container" name="films">
                <div className="category films" onClick={ event => {
                    event.preventDefault()
                   
                    console.log('click')
                    goToResults('films')

                }
                }>
                    <h2 className="category__title">Films</h2>
                    <img className="category__img" src="images/movies.jpg"/>
                    <div className="category__opacity"></div>
                </div>
            </li>
            <li className="results__container">
                <div className="category people" name="people" onClick={ event => {
                    event.preventDefault()
                    goToResults('people')
                }
                }>
                    <h2 className="category__title">People</h2>
                    <img className="category__img" src="images/people.jpg"/>
                    <div className="category__opacity"></div>
                </div>
            </li>
            <li className="results__container">
                <div className="category locations" name="locations" onClick={ event => {
                    event.preventDefault()
                    goToResults('locations')
                }
                }>
                    <h2 className="category__title">Locations</h2>
                    <img className="category__img" src="images/locations.jpg"/>
                    <div className="category__opacity"></div>
                </div>
            </li>
            <li className="results__container">
                <div className="category species" name="species" onClick={ event => {
                    event.preventDefault()
                    goToResults('species')
                }
                }>
                    <h2 className="category__title">Species</h2>
                    <img className="category__img" src="images/species.jpg"/>
                    <div className="category__opacity"></div>
                </div>
            </li>
            <li className="results__container">
                <div className="category vehicles" name="vehicles" onClick={ event => {
                    event.preventDefault()
                    goToResults('vehicles')
                }
                }>
                    <h2 className="category__title">Vehicles</h2>
                    <img className="category__img" src="images/vehicles.jpg"/>
                    <div className="category__opacity"></div>
                </div>
            </li>
        </ul>
}