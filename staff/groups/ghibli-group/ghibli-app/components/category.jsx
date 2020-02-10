function Category({category, goToResults}){
    return <li className="results__container" name={category}>
    <div className={`category  ${category}`} onClick={ event => {
        event.preventDefault()
       
        console.log('click')
        goToResults('films')

    }
    }>
        <h2 className="category__title">Films</h2>
        <img className="category__img" src="images/movies.jpg"/>
        <div className="category__opacity"></div>
    </div>
</li>
}