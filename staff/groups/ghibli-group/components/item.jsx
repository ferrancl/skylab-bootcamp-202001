function Item({ item: { id, name, thumbnail, isFav }, onClick, onFavClick }) {
    return <li className="results--item item" onClick={() => onClick(id)}>
        <h3>{name} <span onClickCapture={event => {
            event.stopPropagation()
            
            onFavClick(id)
        }}>{isFav ? '💖' : '🤍'}</span></h3>
        <img src={thumbnail} />
    </li>
}