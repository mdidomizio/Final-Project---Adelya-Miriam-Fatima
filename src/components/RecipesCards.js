import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

const RecipesCard = (props) => {
  const [open, setOpen] = useState(false)

  let mealName = props.recipes.strMeal;
  let mealPic = props.recipes.strMealThumb;
      let mealTag = props.recipes.strTags;
      let mealOrigin = props.recipes.strArea;
      let instructions = props.recipes.strInstructions;
      let combinedIngredients = []; 

  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={mealPic} />
      <Card.Body>
        <Card.Title>{mealName}</Card.Title>
        <Card.Text>
          {mealTag} {mealOrigin}
        </Card.Text>

        <button type="button" className="btn btn-outline-success btn-floating" data-mdb-ripple-color="dark">
          <i class="fas fa-star"></i>
        </button>

        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
        See More
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
          <div>
          <h3>Ingredients:</h3>
          </div>
          <div>
          <p>{combinedIngredients}</p>
          </div>

          <div>
            <h3>Preparations:</h3>
            <p>{instructions}</p>
          </div>
          
          </div>
          </Collapse>

      </Card.Body>
    </Card>
    </>
  );
}

export default RecipesCard;