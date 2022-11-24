import FavoriteCard from "./FavoriteCard";

const ApiRecipesContainer = (props) => {
    return (
    
        
          <div className="Favorite d-flex flex-wrap justify-content-center">
         
            {props.favorites.length > 0 ? (
              props.favorites.map((element, index) => {
                return (
                  
                  <div key={index}> 
                 
                    <FavoriteCard item={element} />
                    
                  </div>
    
                );
              })
              
            
            ) : (
              <h3> Save your favorite recipes here! </h3>
            )}
            
        </div>
    
       
    
      );

 }
export default ApiRecipesContainer;