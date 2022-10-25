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

      let ingredients = [];
      let measurements = [];
      

      const objectKeys = Object.keys(props.recipes);
      console.log(objectKeys);
      objectKeys.forEach((key) => {
        if (key.startsWith("strIngredient")) {
          ingredients.push(props.recipes[key]);
        } else if (key.startsWith("strMeasure")) {
          measurements.push(props.recipes[key]);
        }
      });

      ingredients = ingredients
        .filter((ingredient) => ingredient !== "")
        .filter((measurement) => measurement !== null);

      let combinedIngredients = [];
      for (let i = 0; i < ingredients.length; i++) {
        combinedIngredients.push([ingredients[i], measurements[i]]);
      }
      console.log("combinedIngredients", combinedIngredients);

  return (
    <>
    <Card className="card m-2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={mealPic} />
      <Card.Body>
        <Card.Title>{mealName}</Card.Title>
        <Card.Text>
          {mealTag} {mealOrigin}
        </Card.Text>

        {/* <button type="button" className="btn btn-outline-success btn-floating" data-mdb-ripple-color="dark">
        <i class="bi bi-heart-fill"></i>
        </button> */}

        <Button variant="primary"><i class="bi bi-heart-fill"></i></Button>{' '}

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
          <h5>Ingredients:</h5>
          </div>
          <div>
          <ul className="ingredients">
        {combinedIngredients.map(function (item) {
          return <li key={item}>{item[0]}: {item[1]}</li>;
        })}
          </ul>

          </div>

          <div>
            <h5>Preparations:</h5>
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