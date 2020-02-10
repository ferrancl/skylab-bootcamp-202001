function Item({ item: {props}, category, onClick}) {

    let films = false
    let people = false
    let locations = false
    let species = false 
    let vehicles = false

    switch (category){
        
        case 'films': 
            films = true

        case 'people':
            people = true
            
        case 'locations':
            locations = true
            
        case 'species':
            species = true
            
        case 'vehicles':
            vehicles = true
            
    }
    
    
    
    // <li className="results--item item" onClick={() => onClick(id)}>
    //     <h3>{name} <span onClickCapture={event => {
    //         event.stopPropagation()
    //         onFavClick(id)
    //     }}>
    //     {/* {isFav ? '💖' : '🤍'} */}
    //     </span></h3>
    //     <img src={thumbnail} />
    // </li>

    return (
        {films && <li className="results--item item" onClick={() => onClick(props.id)}>
        <h3 className="item-title">{props.title} ({props.release_date})</h3>
    </li>}

    return <li className="results--item item" onClick={() => onClick(id)}>
    <h3 className="item-title">{name}</h3>
    </li>

return <li className="results--item item" onClick={() => onClick(id)}>
    <h3 className="item-title">{title} ({release_date})</h3>
</li>

return <li className="results--item item" onClick={() => onClick(id)}>
<h3 className="item-title">{title} ({release_date})</h3>
</li>

return <li className="results--item item" onClick={() => onClick(id)}>
    <h3 className="item-title">{title} ({release_date})</h3>
</li>
    )



}


