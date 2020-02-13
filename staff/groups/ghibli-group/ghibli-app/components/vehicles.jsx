function Vehicles({results, category, onClick}) {
    debugger
    return <ul className="results">
            <h2 className="results__title">{category.toUpperCase()}</h2>
            {results.map(item => <Vehicle key={item.id} item={item} category={category} onClick={onClick}/>)}
        </ul> 
}