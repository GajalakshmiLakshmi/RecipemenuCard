export default function RecipeCard({RecipeName,Time,serving,people,diff,method,type,isequal,chef,img}) 
{
    return(
        <div className="recipe-card">
        <header className="recipe-header">
          <h2 className="recipe-title">{RecipeName}</h2>
          <p className="recipe-timing">{Time}</p>
        </header>
        <div className="recipe-body">
          <div className="recipe-details-container">
            <div className="recipe-detail">
              <span className="recipe-label">{serving} </span>
              <span className="recipe-value">{people}</span>
            </div>
            
            <div className="recipe-detail">
              <span className="recipe-label">{diff} </span>
              <span className="recipe-value">{method}</span>
            </div>
            
            <div className="recipe-detail">
              <span className="recipe-label">{type} </span>
              <span className="recipe-value">{isequal}</span>
            </div>
          </div>
          <img className="foodimg"src={img} alt="Food" />
        </div>
      
          <div className="recipe-footer">
           <small>{chef}</small>
          </div>
        </div>
    );
}