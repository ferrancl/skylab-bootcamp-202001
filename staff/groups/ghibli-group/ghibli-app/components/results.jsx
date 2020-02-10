function Results({results, category}) {

    return <ul className="results">
            <h2 className="results__title">Search by: {}</h2>
            {results.map(item => <Item key={item.id} item={item} category={category}/>)}
        </ul> 
            // <i className="fas fa-arrow-circle-up results__up"></i>
    
    // <ul className="results">
    //     {results.map(item => <Item key={item.id} item={item} onClick={onItemClick} onFavClick={onItemFavClick} />)}
    // </ul>


}