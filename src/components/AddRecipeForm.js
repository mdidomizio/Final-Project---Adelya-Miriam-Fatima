import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useFormik, Field } from "formik";
import * as yup from "yup";



const AddRecipeForm = (props) => {
  const [error, setError] = useState(false);
  const [messageAdded, setMessageAdded] = useState(false);
//   const [open, setOpen] = useState(false);

//   const ingredientContainer = document.getElementById('input-cont');
//   var maxIngredientsAllowed = 20;
//   var ingredientCount = 1;
//   const addIngredient = () => {
//     ingredientCount++;
//     if(ingredientCount>20){
//     alert('you can add maximum 20 ingredients');
//     return;
//   }
//   let input = document.createElement('input');
//   input.placeholder = 'Enter your ingredient';
//   ingredientContainer.appendChild(input);
  
// }


  const formik = useFormik({
    initialValues: {
      nameRecipe: "",
      mealType: "",
      mealTag: "",
      mealOrigin: "",
      ingredients1: "",
      ingredients2: "",
      ingredients3: "",
      ingredients4: "",
      ingredients5: "",
      ingredients6: "",
      ingredients7: "",
      ingredients8: "",
      ingredients9: "",
      ingredients10: "",
      ingredients11: "",
      ingredients12: "",
      ingredients13: "",
      ingredients14: "",
      ingredients15: "",
      ingredients16: "",
      ingredients17: "",
      ingredients18: "",
      ingredients19: "",
      ingredients20: "",
      measurement1: "",
      measurement2: "",
      measurement3: "",
      measurement4: "",
      measurement5: "",
      measurement6: "",
      measurement7: "",
      measurement8: "",
      measurement9: "",
      measurement10: "",
      measurement11: "",
      measurement12: "",
      measurement13: "",
      measurement14: "",
      measurement15: "",
      measurement16: "",
      measurement17: "",
      measurement18: "",
      measurement19: "",
      measurement20: "",
      instruction: "",
      url: "",
    },

    validationSchema: yup.object().shape({
      nameRecipe: yup
        .string()
        .max(50, "50 characters or less")
        .required("Required"),
      mealType: yup
        .string()
        .oneOf([
          "Beef",
          "Breakfast",
          "Chicken",
          "Dessert",
          "Miscellaneous",
          "Pork",
          "Seafood",
          "Side",
          "Starter",
          "Vegetarian",
        ])
        .required(),
      mealOrigin: yup
        .string()
        .oneOf([
          "American",
          "British",
          "Canadian",
          "Chinese",
          "Croatian",
          "Dutch",
          "French",
          "Indian",
          "Irish",
          "Italian",
          "Jamaican",
          "Malaysian",
          "Mexican",
          "Polish",
          "Russian",
          "Vietnamese",
        ])
        .required(),
      ingredients1: yup.string().max(50, "50 characters or less").required(),
      ingredients2: yup.string().max(50, "50 characters or less"),
      ingredients3: yup.string().max(50, "50 characters or less"),
      ingredients4: yup.string().max(50, "50 characters or less"),
      ingredients5: yup.string().max(50, "50 characters or less"),
      ingredients6: yup.string().max(50, "50 characters or less"),
      ingredients7: yup.string().max(50, "50 characters or less"),
      ingredients8: yup.string().max(50, "50 characters or less"),
      ingredients9: yup.string().max(50, "50 characters or less"),
      ingredients10: yup.string().max(50, "50 characters or less"),
      ingredients11: yup.string().max(50, "50 characters or less"),
      ingredients12: yup.string().max(50, "50 characters or less"),
      ingredients13: yup.string().max(50, "50 characters or less"),
      ingredients14: yup.string().max(50, "50 characters or less"),
      ingredients15: yup.string().max(50, "50 characters or less"),
      ingredients16: yup.string().max(50, "50 characters or less"),
      ingredients17: yup.string().max(50, "50 characters or less"),
      ingredients18: yup.string().max(50, "50 characters or less"),
      ingredients19: yup.string().max(50, "50 characters or less"),
      ingredients20: yup.string().max(50, "50 characters or less"),
      measurement1: yup.string().max(50, "50 characters or less").required(),
      measurement2: yup.string().max(50, "50 characters or less"),
      measurement3: yup.string().max(50, "50 characters or less"),
      measurement4: yup.string().max(50, "50 characters or less"),
      measurement5: yup.string().max(50, "50 characters or less"),
      measurement6: yup.string().max(50, "50 characters or less"),
      measurement7: yup.string().max(50, "50 characters or less"),
      measurement8: yup.string().max(50, "50 characters or less"),
      measurement9: yup.string().max(50, "50 characters or less"),
      measurement10: yup.string().max(50, "50 characters or less"),
      measurement11: yup.string().max(50, "50 characters or less"),
      measurement12: yup.string().max(50, "50 characters or less"),
      measurement13: yup.string().max(50, "50 characters or less"),
      measurement14: yup.string().max(50, "50 characters or less"),
      measurement15: yup.string().max(50, "50 characters or less"),
      measurement16: yup.string().max(50, "50 characters or less"),
      measurement17: yup.string().max(50, "50 characters or less"),
      measurement18: yup.string().max(50, "50 characters or less"),
      measurement19: yup.string().max(50, "50 characters or less"),
      measurement20: yup.string().max(50, "50 characters or less"),
      instruction: yup.string().required(),
      url: yup.string().required(),
    }),
    onSubmit: (values) => {
      console.log("clg from submit post", values);
      createRecipeEntry(values);
    },
  });

  const createRecipeEntry = async (item) => {
    // upload image to cloudinary:
    let preset = "wardrobe_bootcamp";
    let cloudName = "dajs1jldd";
    let cloudPath = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    // create body to post:
    let dataForBody = new FormData();
    dataForBody.append("file", item.url[0]);
    dataForBody.append("upload_preset", preset);
    dataForBody.append("cloud_name", cloudName);

    const uploadImageToCloudinary = await fetch(cloudPath, {
      method: "POST",
      body: dataForBody,
    });
    let imageData = await uploadImageToCloudinary.json();
    console.log("post to cloud", imageData);

    // get access to token in local storage:
    let tokenFromLS = localStorage.getItem("token");
    let JWT_TOKEN = JSON.parse(tokenFromLS);

    try {
      let path = `${process.env.REACT_APP_RECIPES_API}/wardrobe`;
      let response = await fetch(path, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${JWT_TOKEN}`,
        },
        body: JSON.stringify({ ...item, url: imageData.url }),
      });
      if (response.status === 201) {
        //   TODO setMessageUpload(response.statusText)
      } else {
        let error = new Error(`${response.statusText}: ${response.url}`);
        error.status = response.status;
        throw error;
      }
    } catch (error) {
      console.log("something went wrong creating the New Item", error);
      setError(error.message);
    }
  };

  return (
    <>
      <div>
        <h3>Add a new recipe to your account</h3>
      </div>

      <div>
        <Form
          className="container-sm border border-solid p-5"
          onSubmit={formik.handleSubmit}
        >
          {/* {Object.keys(formik.initialValues).map((itemKey) => {
            if (
              itemKey === "id" ||
              itemKey === "url" ||
              itemKey === "mealType" ||
              itemKey === "mealOrigin" ||
              itemKey === "nameRecipe" ||
              itemKey === "instruction" )
              {
              return null;
            }
            return ( */}
              <Form.Group className="mb-3">
                <Form.Label>Name of the Recipe</Form.Label>
                <Form.Control
                  id="nameRecipe"
                  name="nameRecipe"
                  type="text"
                  placeholder={`Edit the name of your new recipe`}
                  onChange={formik.handleChange}
                />

                {formik.touched.nameRecipe && formik.errors.nameRecipe ? (
                  <div className="text-danger">{`The name of the recipe is ${formik.errors.nameRecipe}`}</div>
                ) : null}
              </Form.Group>
            


      

        <Form.Group className="ingredient row mt-5">
        <div className="ingredientContainer">
        <label htmlFor="url">Ingredients</label>
          <Row className="first row mt-2">
            <Col>
              <Form.Control
              id="ingredients1"
              name="ingredients1"
              type="text"
               placeholder="Ingredient"
               onChange={formik.handleChange} />
            </Col>
            <Col>
              <Form.Control 
              id="measurement1"
              name="measurement1"
              type="text"
              placeholder="Quantity (e.g 100g)" 
              onChange={formik.handleChange}
              />
            </Col>
            {/* <Col>
              <Button variant="outline-primary"
              onClick={addIngredient}
              > Next Ingredient</Button>
            </Col> */}
          </Row>

          {formik.touched.ingredients1 && formik.errors.ingredients1 ? (
              <div className="text-danger">{`${formik.errors.ingredients1}`}</div>
            ) : null}
      
            {formik.touched.measurement1 && formik.errors.measurement1 ? (
              <div className="text-danger">{`${formik.errors.measurement1}`}</div>
            ) : null}

            <Row className="second row mt-2">
            <Col>
              <Form.Control 
              id="ingredients2"
              name="ingredients2"
              type="text"
               placeholder="Ingredient"
               onChange={formik.handleChange} />
            </Col>
            <Col>
              <Form.Control 
              id="measurement2"
              name="measurement2"
              type="text"
              placeholder="Quantity (e.g 100g)" 
              onChange={formik.handleChange}
              />
            </Col>
            {/* <Col>
              <Button variant="outline-primary"
              onClick={addIngredient}
              > Next Ingredient</Button>
            </Col> */}
          </Row>

          {formik.touched.ingredients2 && formik.errors.ingredients2 ? (
              <div className="text-danger">{`${formik.errors.ingredients2}`}</div>
            ) : null}
      

            {formik.touched.measurement2 && formik.errors.measurement2 ? (
              <div className="text-danger">{`${formik.errors.measurement2}`}</div>
            ) : null}


            <Row className="third row mt-2">
            <Col>
              <Form.Control 
              id="ingredients3"
              name="ingredients3"
              type="text"
               placeholder="Ingredient"
               onChange={formik.handleChange} />
            </Col>
            <Col>
              <Form.Control 
              id="measurement3"
              name="measurement3"
              type="text"
              placeholder="Quantity (e.g 100g)"
              onChange={formik.handleChange} />
            </Col>
            {/* <Col>
              <Button variant="outline-primary"
              onClick={addIngredient}
              > Next Ingredient</Button>
            </Col> */}
          </Row>

          {formik.touched.ingredients3 && formik.errors.ingredients3 ? (
              <div className="text-danger">{`${formik.errors.ingredients3}`}</div>
            ) : null}
      

            {formik.touched.measurement3 && formik.errors.measurement3 ? (
              <div className="text-danger">{`${formik.errors.measurement3}`}</div>
            ) : null}

            <Row className="Fourth row mt-2">
            <Col>
              <Form.Control 
              id="ingredients4"
              name="ingredients4"
              type="text"
               placeholder="Ingredient" 
               onChange={formik.handleChange}
               />
            </Col>
            <Col>
              <Form.Control 
              id="measurement4"
              name="measurement4"
              type="text"
              placeholder="Quantity (e.g 100g)" 
              onChange={formik.handleChange}
              />
            </Col>
            {/* <Col>
              <Button variant="outline-primary"
              onClick={addIngredient}
              > Next Ingredient</Button>
            </Col> */}
          </Row>

          {formik.touched.ingredients4 && formik.errors.ingredients4 ? (
              <div className="text-danger">{`${formik.errors.ingredients4}`}</div>
            ) : null}
      

            {formik.touched.measurement4 && formik.errors.measurement4 ? (
              <div className="text-danger">{`${formik.errors.measurement4}`}</div>
            ) : null}

            <Row className="Fifth row mt-2">
            <Col>
              <Form.Control 
              id="ingredients5"
              name="ingredients5"
              type="text"
               placeholder="Ingredient" 
               onChange={formik.handleChange}/>
            </Col>
            <Col>
              <Form.Control 
              id="measurement5"
              name="measurement5"
              type="text"
              placeholder="Quantity (e.g 100g)" 
              onChange={formik.handleChange}
              />
            </Col>
            {/* <Col>
              <Button variant="outline-primary"
              onClick={addIngredient}
              > Next Ingredient</Button>
            </Col> */}
          </Row>

          {formik.touched.ingredients5 && formik.errors.ingredients5 ? (
              <div className="text-danger">{`${formik.errors.ingredients5}`}</div>
            ) : null}
      

            {formik.touched.measurement5 && formik.errors.measurement5 ? (
              <div className="text-danger">{`${formik.errors.measurement5}`}</div>
            ) : null}

          </div>

          <div>
          <Form.Group className="mb-3 row mt-5">
                <Form.Label>Preparation</Form.Label>
                <Form.Control as="textarea"
                  id="instruction"
                  name="instruction"
                  type="textarea"
                  placeholder={`Enter the preparation of the recipe`}
                  onChange={formik.handleChange}
                />

                {formik.touched.instruction && formik.errors.instruction ? (
                  <div className="text-danger">{`${formik.errors.instruction}`}</div>
                ) : null}
              </Form.Group>
          </div>
          
         {/* <Field name="mealOrigin" as="select"> */}
          <div className="mealOrigin row mt-5">
            <label>Cousine Country</label>
            <Form.Select 
            id="mealOrigin"
            name="mealOrigin"
            type="text"
            onSelectCapture={formik.handleChange}
            aria-label="Default select example">
              <option>Select your Cuisine Country</option>
              <option value="1">American</option>
              <option value="2">British</option>
              <option value="3">Canadian</option>
              <option value="3">Chinese</option>
              <option value="3">Croatian</option>
              <option value="3">Dutch</option>
              <option value="3">French</option>
              <option value="3">Indian</option>
              <option value="3">Irish</option>
              <option value="3">Italian</option>
              <option value="3">Jamaican</option>
              <option value="3">Malaysian</option>
              <option value="3">Mexican</option>
              <option value="3">Polish</option>
              <option value="3">Russian</option>
              <option value="3">Vietnamese</option>
            </Form.Select>
            {formik.touched.mealOrigin && formik.errors.mealOrigin ? (
                <div className="text-danger">{`${formik.errors.mealOrigin}`}</div>
              ) : null}
            </div>
         {/* </Field>  */}

          <div className="mealType row mt-5">
          <label>Meal Type</label>
          <Form.Select 
          id="mealType"
          name="mealType"
          type="text"
          as="select"
          onSelectCapture={formik.handleChange}
          aria-label="Default select example">
            <option>Select your Meal Type</option>
            <option value="1">Beef</option>
            <option value="2">Breakfast</option>
            <option value="3">Chicken</option>
            <option value="3">Dessert</option>
            <option value="3">Miscellaneous</option>
            <option value="3">Pork</option>
            <option value="3">Seafood</option>
            <option value="3">Side</option>
            <option value="3">Starter</option>
            <option value="3">Vegetarian</option>            
          </Form.Select>
          {formik.touched.mealType && formik.errors.mealType ? (
              <div className="text-danger">{`${formik.errors.mealType}`}</div>
            ) : null}
          </div>




        </Form.Group>



          <div className="imageUpload d-flex flex-column row mt-5">
            <label htmlFor="url">Add Image</label>
            <input
              id="url"
              name="url"
              type="file"
              onChange={(event) => {
                const fileToUpload = event.target.files;
                formik.setFieldValue("url", fileToUpload);
              }}
            />
            {formik.touched.url && formik.errors.url ? (
              <div className="text-danger">{`${formik.errors.url}`}</div>
            ) : null}
          </div>

          <Button variant="primary" type="submit">
            Create new recipe
          </Button>
        </Form>
        {error ? <div>{error.message}</div> : null}
        {messageAdded ? (
          <>
            <h2>Recipe created successfully, congratulation</h2>
            <Link to="/favorites"> Go back to your favorites page</Link>
          </>
        ) : null}
      </div>
    </>
  );
};

export default AddRecipeForm;
