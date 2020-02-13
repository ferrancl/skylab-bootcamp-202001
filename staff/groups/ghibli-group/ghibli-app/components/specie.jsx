function Specie({ item: {id, name, classification}, category, onClick}) {
    return <li className="item" onClick={() => onClick(id, category)}>
    <h3 className="item-title">{name} ({classification})</h3>
</li>
}