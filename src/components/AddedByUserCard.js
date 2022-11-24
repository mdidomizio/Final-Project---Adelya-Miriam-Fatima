import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import "bootstrap-icons/font/bootstrap-icons.css";

const AddedByUserCard = (props) => {
    const [open, setOpen] = useState(false);
  
    let nameRecipeRecipe = props.item.namerecipe;
    let urlRecipe = props.item.url;
    let mealOriginRecipe = props.item.mealorigin;
    let instructionsRecipe = props.item.instruction;
    let mealIdRecipe= props.item.id;
    let mealTypeRecipe = props.item.mealtype;
  
    let ingredientsRecipes = [];
    let measurementsRecipes = [];
  
    const objectKeysRecipe = Object.keys(props.item);
    console.log(objectKeysRecipe)
  
    objectKeysRecipe.forEach((key) => {
      if (key.startsWith("ingredients")) {
        ingredientsRecipes.push(props.item[key]);
      } else if (key.startsWith("measurement")) {
        measurementsRecipes.push(props.item[key]);
      }
    });
  
    ingredientsRecipes = ingredientsRecipes
      .filter((ingredientRecipe) => ingredientRecipe !== "")
      .filter((measurementRecipe) => measurementRecipe !== null);
  
    let combinedIngredientsRecipes = [];
    for (let i = 0; i < ingredientsRecipes.length; i++) {
      combinedIngredientsRecipes.push([ingredientsRecipes[i], measurementsRecipes[i]]);
    }
    console.log("combined ingredients", combinedIngredientsRecipes)
    return (
      <Card className="card m-2" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={urlRecipe} />
        <Card.Body>
          <Card.Title>{nameRecipeRecipe}</Card.Title>
          <Card.Text className="tags fst-italic">
            
              {mealTypeRecipe} <br />
              {mealOriginRecipe}
            
          </Card.Text>
          <Button
            onClick={(event) => {
              console.log("button works");
              props.updateRecipe(event);
            }}
            id={mealIdRecipe}
            type="button"
            className="btn btn-primary mt-2 mx-1"
          >
            Edit your recipe
          </Button>

          {/* <button className="btn btn-primary mt-2 mx-1"  onClick={handleShow}>
            Edit Recipe
            </button> */}

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your Recipe!</Modal.Title>
        </Modal.Header>
        
        <UpdateForm item={props.item} handleClose={handleClose} updateRecipe={props.updateRecipe}/>
         
      </Modal>  */}




          <Button
            onClick={(event) => {
              console.log("button works");
              props.deleteRecipeFromDb(event);
            }}
            id={mealIdRecipe}
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
                <ul className="ingredientsRecipe">
                  {combinedIngredientsRecipes.map(function (item) {
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
                <p>{instructionsRecipe}</p>
              </div>
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    );
  };
  export default AddedByUserCard;
  