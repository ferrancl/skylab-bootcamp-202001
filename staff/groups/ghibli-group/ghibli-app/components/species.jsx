function Species({results, category, onClick}) {
    return <ul className="results">
            <h2 className="results__title">{category.toUpperCase()}</h2>
            {results.map(item => <Specie key={item.id} item={item} category={category} onClick={onClick}/>)}
        </ul> 
}