function Landing({categories, onCategoryClick}){
    return <ul>
        {categories.map(category => <Category key={category.id} category={category} onClick={onCategoryClick}/>)}
    </ul>
}