function Specie({ item: {id, name, classification}, onClick}) {
    return <li className="results--item item" onClick={() => onClick(id)}>
    <h3 className="item-title">{name} ({classification})</h3>
</li>
}