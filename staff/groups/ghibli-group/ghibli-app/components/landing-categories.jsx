function Landing({categories, goToResults}){
    return <ul>
        {categories.map(category => <Category key={category.id} category={category} goToResults={goToResults}/>)}
    </ul>
}