function Vehicles({results, category}) {
    debugger
    return <ul className="results">
            <h2 className="results__title">Search by: {}</h2>
            {results.map(item => <Vehicle key={item.id} item={item} category={category}/>)}
        </ul> 
}