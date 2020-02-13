function Landing({categories, goToResults}){
    return <ul className="results">
        {categories.map(category => <Category key={category} category={category} goToResults={goToResults}/>)}
    </ul>
}