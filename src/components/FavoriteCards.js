import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import "bootstrap-icons/font/bootstrap-icons.css";

const FavoriteCards = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="card m-2" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.mealPic} />
      <Card.Body>
        <Card.Title>{props.mealName}</Card.Title>
        <Card.Text>
          <p className="tags fst-italic">
            {props.mealTag} <br />
            {props.mealOrigin}
          </p>
        </Card.Text>
        <Button
          onClick={(event) => {
            console.log("button works");
            props.removeFromFavorite(event);
          }}
          id={props.mealId}
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
                {props.combinedIngredients.map(function (item) {
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
              <p>{props.instructions}</p>
            </div>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};
export default FavoriteCards;
