function Item({id, title, release_date}) {
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

