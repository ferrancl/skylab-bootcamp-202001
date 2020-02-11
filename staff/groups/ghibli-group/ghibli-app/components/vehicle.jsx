function Vehicle({ item: {id, name}, category, onClick}) {
    return <li className="results--item item" onClick={() => onClick(id, category)}>
    <h3 className="item-title">{name}</h3>
</li>
}