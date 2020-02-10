function Category({category, goToResults}){
    return <li className="results__container" name={category}>
    <div className={`category  ${category}`} onClick={ event => {
        event.preventDefault()
        goToResults(`${category}`)
    }
    }>
        <h2 className="category__title">{`${category}`}</h2>
        <img className="category__img" src={`images/${category}.jpg`}/>
        <div className="category__opacity"></div>
    </div>
</li>
}