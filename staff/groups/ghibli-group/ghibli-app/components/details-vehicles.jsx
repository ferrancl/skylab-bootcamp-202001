function DetailsVehicles({result}) {

    return <section className="details">
        <div className="details__info">
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
            <img className="details__image" src="images/dust.png"/>
        </div>
    </section>

}