import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useFormik } from "formik";
import * as yup from "yup";

const AddRecipeForm = (props) => {
  const [error, setError] = useState(false);
  const [messageAdded, setMessageAdded] = useState(false);

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
      // mealTag: yup.string().oneOf(["rian"]).required(),
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
      let path = `${process.env.REACT_APP_WARDROBE_API}/wardrobe`;
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
          {Object.keys(formik.initialValues).map((itemKey) => {
            if (
              itemKey === "id" ||
              itemKey === "url" ||
              itemKey === "mealType" ||
              itemKey === "mealOrigin" ||
              itemKey === "mealTag")
              {
              return null;
            }
            return (
              <Form.Group className="mb-3">
                <Form.Label>{itemKey}</Form.Label>
                <Form.Control
                  id={itemKey}
                  name={itemKey}
                  type="text"
                  placeholder={`Edit the ${itemKey} of your new recipe`}
                  onChange={formik.handleChange}
                />

                {formik.touched[itemKey] && formik.errors[itemKey] ? (
                  <div className="text-danger">{`${itemKey} is ${formik.errors[itemKey]}`}</div>
                ) : null}
              </Form.Group>
            );
          })}

          
        <Form.Group className="mb-3">
        <div>
          <Row>
            <Col>
              <Form.Control placeholder="Ingredient" />
            </Col>
            <Col>
              <Form.Control placeholder="Quantity" />
            </Col>
          </Row>
          {formik.touched.ingredients1 && formik.errors.ingredients1 ? (
              <div className="text-danger">{`The first Ingredient is ${formik.errors.mealOrigin}`}</div>
            ) : null}
      

            {formik.touched.measurement1 && formik.errors.measurement1 ? (
              <div className="text-danger">{`The quantity of the first ingredient is ${formik.errors.mealOrigin}`}</div>
            ) : null}
          </div>
          
          <div>
          <Form.Select 
          id="mealOrigin"
          name="mealOrigin"
          type="text"
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
              <div className="text-danger">{`The Cuisine Country  is ${formik.errors.mealOrigin}`}</div>
            ) : null}
          </div>

          <div>
          <Form.Select 
          id="mealType"
          name="mealType"
          type="text"
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
              <div className="text-danger">{`The Meal Type is ${formik.errors.mealType}`}</div>
            ) : null}
          </div>

          {/* <div>
          <Form.Select 
          id="mealTag"
          name="mealTag"
          type="text"
          aria-label="Default select example">
            <option>Select your Meal Tag</option>
            <option value="1">uno</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="3">Four</option>
            <option value="3">Five</option>
            <option value="3">Six</option>
            <option value="3">Seven</option>
            <option value="3">Eight</option>
            <option value="3">Nine</option>
            <option value="3">Ten</option>            
          </Form.Select>
          {formik.touched.mealTag && formik.errors.mealTag ? (
              <div className="text-danger">{`The Meal Type is ${formik.errors.mealTag}`}</div>
            ) : null}
          </div> */}


        </Form.Group>

          {/* <Form.Group className="mb-3">
          <Form.Label> Meal Type</Form.Label>
          <Form.Control 
          id="mealType"
          name="mealType"
          type="text" 
          placeholder="Select a meal type"
          onChange={formik.handleChange} />
          {formik.touched.mealType && formik.errors.mealType ? (
                  <div className='text-danger'>{`The meal type is ${formik.errors.mealType}`}</div>
                ) : null
                }

        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Country Cuisine</Form.Label>
          <Form.Control 
          id="mealOrigin"
          name="mealOrigin"
          type="text" 
          placeholder="Select a Country Cousine" 
          onChange={formik.handleChange} />
          {formik.touched.mealOrigin && formik.errors.mealOrigin ? (
                  <div className='text-danger'>{`The Country Cuisine is ${formik.errors.mealOrigin}`}</div>
                ) : null
                }

        </Form.Group> */}

          <div className="imageUpload d-flex flex-column">
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
              <div className="text-danger">{`Url is ${formik.errors.url}`}</div>
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
            <Link to="/"> Go back to main page</Link>
          </>
        ) : null}
      </div>
    </>
  );
};

export default AddRecipeForm;
