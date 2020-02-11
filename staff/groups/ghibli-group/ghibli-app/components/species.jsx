function Species({results, category, onClick}) {
    debugger
    return <ul className="results">
            <h2 className="results__title">Search by: {category}</h2>
            {results.map(item => <Specie key={item.id} item={item} category={category} onClick={onClick}/>)}
        </ul> 
}