function Film({ item: {id, title, release_date}, onClick}) {
    return <li className="results--item item" onClick={() => onClick(id)}>
    <h3 className="item-title">{title} ({release_date})</h3>
</li>
}