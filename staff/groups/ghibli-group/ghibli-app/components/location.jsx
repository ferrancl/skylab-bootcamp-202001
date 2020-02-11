function Location({ item: {id, name}, onClick}) {
    return <li className="results--item item" onClick={() => onClick(id)}>
    <h3 className="item-title">{name}</h3>
</li>
}