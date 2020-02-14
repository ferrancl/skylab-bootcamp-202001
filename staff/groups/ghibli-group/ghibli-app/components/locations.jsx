function Locations({results, category, onClick}) {
    return <ul className="results">
        <div className="results__title-container">
            <h2 className="results__title">{category.toUpperCase()}</h2>
        </div>
        <div className="results__container">
            {results.map(item => <Location key={item.id} item={item} category={category} onClick={onClick}/>)}
        </div>
    </ul> 
}