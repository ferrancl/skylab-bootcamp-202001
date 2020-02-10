function Item({ item: {props}, category, onClick}) {
    switch (category){
        case 'films':
            return <li className="results--item item" onClick={() => onClick(props.id)}>
            <h3 className="item-title">{props.title} ({props.release_date})</h3>
        </li>

        case 'people':
            return <li className="results--item item" onClick={() => onClick(id)}>
            <h3 className="item-title">{name}</h3>
        </li>

        case 'locations':
            return <li className="results--item item" onClick={() => onClick(id)}>
            <h3 className="item-title">{title} ({release_date})</h3>
        </li>

        case 'species':
            return <li className="results--item item" onClick={() => onClick(id)}>
            <h3 className="item-title">{title} ({release_date})</h3>
        </li>

        case 'vehicles':
            return <li className="results--item item" onClick={() => onClick(id)}>
            <h3 className="item-title">{title} ({release_date})</h3>
        </li>

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


}