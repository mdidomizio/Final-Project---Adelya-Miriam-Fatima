import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import "bootstrap-icons/font/bootstrap-icons.css";

const RecipesCard = (props) => {
  const [open, setOpen] = useState(false);

  let mealName = props.recipes.strMeal;
  let mealPic = props.recipes.strMealThumb;
  let mealTag = props.recipes.strTags;
  let mealOrigin = props.recipes.strArea;
  let instructions = props.recipes.strInstructions;
  let mealId = props.recipes.idMeal;
  let mealType = props.recipes.strCategory;

  let ingredients = [];
  let measurements = [];

  const objectKeys = Object.keys(props.recipes);

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

  return (
    <Card className="card m-4" style={{ width: "35rem" }}>
      <Card.Img variant="top" src={mealPic} />
      <Card.Body>
        <Card.Title>{mealName}</Card.Title>
        <Card.Text className="tags fst-italic">
          {mealTag} <br />
          {mealOrigin}
        </Card.Text>
        <Button
          onClick={(event) => {
            console.log("button works");
            // alert('Item is saved to favorites');
            props.addToFavorite(event.target.id);
          }}
          id={mealId}
          type="button"
          style={{ backgroundColor: '#E35012', color: '#FFF' }}
          className="btn btn-danger position-absolute top-0 end-0 opacity-85"
        >
          <i className="bi bi-bookmark-heart-fill"></i> Save to favorites
        </Button>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="btn btn-light"
          style={{ backgroundColor: '#94340c', color: '#FFF' }}
        >
          {open ? <div>See less</div> : <div> See More </div>}
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <div>
              <h5>Ingredients:</h5>
            </div>
            <div>
              <ul className="ingredients">
                {combinedIngredients.map(function (item, index) {
                  return (
                    <li key={index}>
                      {item[0]}: {item[1]}
                    </li>
                  );
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
  );
};

export default RecipesCard;
