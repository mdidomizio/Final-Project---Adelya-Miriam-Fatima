import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

const RecipesCard = (recipes) => {
  const [open, setOpen] = useState(false)

  let mealName = recipes.strMeal;
  let mealPic = recipes.strMealThumb;
      let mealTag = recipes.strTags;
      let mealOrigin = recipes.strArea;
      let instructions = recipes.strInstructions;
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

        <Button variant="primary">Add Favorites</Button>

        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
        click
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
          <div>
          Ingredients:
            {combinedIngredients}
          </div>

          <div>
            Preparations:
            {instructions}
          </div>
          
          </div>
          </Collapse>

      </Card.Body>
    </Card>
    </>
  );
}

export default RecipesCard;