import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import "bootstrap-icons/font/bootstrap-icons.css";

const AddedByUserCards = (props) => {
    const [open, setOpen] = useState(false);
  
    let mealName = props.recipes.nameRecipe;
    let mealPic = props.recipes.url;
    // let mealTag = props.item.strtags;
    let mealOrigin = props.recipes.mealOrigin;
    let instructions = props.recipes.instructions;
    let mealId = props.recipes.id;
    let mealType = props.recipes.mealType;
  
    let ingredients = [];
    let measurements = [];
  
    const objectKeys = Object.keys(props.item);
  
    objectKeys.forEach((key) => {
      if (key.startsWith("ingredients")) {
        ingredients.push(props.item[key]);
      } else if (key.startsWith("measurement")) {
        measurements.push(props.item[key]);
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
      <Card className="card m-2" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={mealPic} />
        <Card.Body>
          <Card.Title>{mealName}</Card.Title>
          <Card.Text>
            <p className="tags fst-italic">
              {mealType} <br />
              {mealOrigin}
            </p>
          </Card.Text>
          <Button
            onClick={(event) => {
              console.log("button works");
              props.removeFromFavorite(event);
            }}
            id={mealId}
            type="button"
            className="btn btn-danger position-absolute top-0 end-0 opacity-85"
          >
            <i className="bi bi-trash"></i>
            Remove
          </Button>
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
                <ul className="ingredientsFavorite">
                  {combinedIngredients.map(function (item) {
                    return (
                      <li key={item}>
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
  export default AddedByUserCards;
  