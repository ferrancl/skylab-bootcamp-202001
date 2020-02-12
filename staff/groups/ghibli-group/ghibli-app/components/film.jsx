function Film({ item, category, onClick}) {
    return <li className="item" onClick={() => {
        onClick(item.id, category)
    }}>
    <h3 className="item-title">{item.title} ({item.release_date})</h3>
</li>
}