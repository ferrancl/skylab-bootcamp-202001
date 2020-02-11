function Films({results, category, onClick}) {
    return <ul className="results">
            <h2 className="results__title">Search by: {category}</h2>
            {results.map(item => <Film key={item.id} item={item} category={category} onClick={onClick}/>)}
        </ul> 
}