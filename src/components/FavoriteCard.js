import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import 'bootstrap-icons/font/bootstrap-icons.css';

const FavoriteCard = (props) => {
  const [open, setOpen] = useState(false);

  let mealName = props.item.strmeal;
  let mealPic = props.item.strmealthumb;
  let mealTag = props.item.strtags;
  let mealOrigin = props.item.strarea;
  let instructions = props.item.strinstructions;
  let mealId = props.item.idmeal;
  let mealType = props.item.strcategory;

  let ingredientsFavorite = [];
  let measurementsFavorite = [];

  const objectKeysFavorite = Object.keys(props.item);

  objectKeysFavorite.forEach((key) => {
    if (key.startsWith('stringredient')) {
      ingredientsFavorite.push(props.item[key]);
    } else if (key.startsWith('strmeasure')) {
      measurementsFavorite.push(props.item[key]);
    }
  });

  ingredientsFavorite = ingredientsFavorite
    .filter((ingredientFavorite) => ingredientFavorite !== '')
    .filter((measurementFavorite) => measurementFavorite !== null);

  let combinedIngredientsFavorite = [];
  for (let i = 0; i < ingredientsFavorite.length; i++) {
    combinedIngredientsFavorite.push([
      ingredientsFavorite[i],
      measurementsFavorite[i],
    ]);
  }

  console.log('combined ingredient fav', combinedIngredientsFavorite);
  return (
    <Card className="card m-4" style={{ width: '35rem' }}>
      <Card.Img variant="top" src={mealPic} />
      <Card.Body>
        <Card.Title>{mealName}</Card.Title>
        <Card.Text className="tags fst-italic">
          {mealTag} <br />
          {mealOrigin}
        </Card.Text>

        <Button
          onClick={(event) => {
            console.log('button works');
            props.removeFromFavorite(event);
          }}
          id={mealId}
          type="button"
          style={{ backgroundColor: '#94340c', color: '#FFF' }}
          className="btn btn-danger position-absolute top-0 end-0 opacity-85"
        >
          <i className="bi bi-trash"></i>
          Remove
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
              <ul className="ingredientsFavorite">
                {combinedIngredientsFavorite.map(function (item) {
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
              <span>{instructions}</span>
            </div>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};
export default FavoriteCard;
