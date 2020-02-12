function InfoDetail({category, linkedItems}) {
    return <div>
        <p className="details__info-score details__category">{category}</p>
        <div className="details__info-container">{linkedItems.map(name => <InfoDetailList name={name}/>)}</div>
    </div>
    
}