function People({results, category}) {
    debugger
    return <ul className="results">
            <h2 className="results__title">Search by: {category}</h2>
            {results.map(item => <Character key={item.id} item={item} category={category}/>)}
        </ul> 
}