import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFormik } from 'formik';
import * as yup from 'yup';

const AddRecipeForm = (props) => {
  const [error, setError] = useState(false);
  const [messageAdded, setMessageAdded] = useState(false);

  const formik = useFormik({
    initialValues: {
      namerecipe: '',
      mealtype: '',
      mealorigin: '',
      ingredients1: '',
      ingredients2: '',
      ingredients3: '',
      ingredients4: '',
      ingredients5: '',
      // ingredients6: "",
      // ingredients7: "",
      // ingredients8: "",
      // ingredients9: "",
      // ingredients10: "",
      // ingredients11: "",
      // ingredients12: "",
      // ingredients13: "",
      // ingredients14: "",
      // ingredients15: "",
      // ingredients16: "",
      // ingredients17: "",
      // ingredients18: "",
      // ingredients19: "",
      // ingredients20: "",
      measurement1: '',
      measurement2: '',
      measurement3: '',
      measurement4: '',
      measurement5: '',
      // measurement6: "",
      // measurement7: "",
      // measurement8: "",
      // measurement9: "",
      // measurement10: "",
      // measurement11: "",
      // measurement12: "",
      // measurement13: "",
      // measurement14: "",
      // measurement15: "",
      // measurement16: "",
      // measurement17: "",
      // measurement18: "",
      // measurement19: "",
      // measurement20: "",
      instruction: '',
      url: '',
    },

    validationSchema: yup.object().shape({
      namerecipe: yup
        .string()
        .max(150, '150 characters or less')
        .required('Required'),
      mealtype: yup
        .string()
        .oneOf([
          'Beef',
          'Breakfast',
          'Chicken',
          'Dessert',
          'Miscellaneous',
          'Pork',
          'Seafood',
          'Side',
          'Starter',
          'Vegetarian',
        ])
        .required(),
      mealorigin: yup
        .string()
        .oneOf([
          'American',
          'British',
          'Canadian',
          'Chinese',
          'Croatian',
          'Dutch',
          'French',
          'Indian',
          'Irish',
          'Italian',
          'Jamaican',
          'Malaysian',
          'Mexican',
          'Polish',
          'Russian',
          'Vietnamese',
        ])
        .required(),
      ingredients1: yup.string().max(150, '150 characters or less').required(),
      ingredients2: yup
        .string()
        .max(150, '150 characters or less')
        .optional()
        .nullable(),
      ingredients3: yup
        .string()
        .max(150, '150 characters or less')
        .optional()
        .nullable(),
      ingredients4: yup
        .string()
        .max(150, '150 characters or less')
        .optional()
        .nullable(),
      ingredients5: yup
        .string()
        .max(150, '150 characters or less')
        .optional()
        .nullable(),
      // ingredients6: yup.string().max(150, "150 characters or less"),
      // ingredients7: yup.string().max(150, "150 characters or less"),
      // ingredients8: yup.string().max(150, "150 characters or less"),
      // ingredients9: yup.string().max(150, "150 characters or less"),
      // ingredients10: yup.string().max(150, "150 characters or less"),
      // ingredients11: yup.string().max(150, "150 characters or less"),
      // ingredients12: yup.string().max(150, "150 characters or less"),
      // ingredients13: yup.string().max(150, "150 characters or less"),
      // ingredients14: yup.string().max(150, "150 characters or less"),
      // ingredients15: yup.string().max(150, "150 characters or less"),
      // ingredients16: yup.string().max(150, "150 characters or less"),
      // ingredients17: yup.string().max(150, "150 characters or less"),
      // ingredients18: yup.string().max(150, "150 characters or less"),
      // ingredients19: yup.string().max(150, "150 characters or less"),
      // ingredients20: yup.string().max(150, "150 characters or less"),
      measurement1: yup.string().max(150, '150 characters or less').required(),
      measurement2: yup
        .string()
        .max(150, '150 characters or less')
        .optional()
        .nullable(),
      measurement3: yup
        .string()
        .max(150, '150 characters or less')
        .optional()
        .nullable(),
      measurement4: yup
        .string()
        .max(150, '150 characters or less')
        .optional()
        .nullable(),
      measurement5: yup
        .string()
        .max(150, '150 characters or less')
        .optional()
        .nullable(),
      // measurement6: yup.string().max(150, "150 characters or less"),
      // measurement7: yup.string().max(150, "150 characters or less"),
      // measurement8: yup.string().max(150, "150 characters or less"),
      // measurement9: yup.string().max(150, "150 characters or less"),
      // measurement10: yup.string().max(150, "150 characters or less"),
      // measurement11: yup.string().max(150, "150 characters or less"),
      // measurement12: yup.string().max(150, "150 characters or less"),
      // measurement13: yup.string().max(150, "150 characters or less"),
      // measurement14: yup.string().max(150, "150 characters or less"),
      // measurement15: yup.string().max(150, "150 characters or less"),
      // measurement16: yup.string().max(150, "150 characters or less"),
      // measurement17: yup.string().max(150, "150 characters or less"),
      // measurement18: yup.string().max(150, "150 characters or less"),
      // measurement19: yup.string().max(150, "150 characters or less"),
      // measurement20: yup.string().max(150, "150 characters or less"),
      instruction: yup.string().max(250000).required(),
      url: yup.string().required(),
    }),
    onSubmit: (values) => {
      console.log('clg from submit post', values);
      createRecipeEntry(values);
    },
  });

  const createRecipeEntry = async (item) => {
    // upload image to cloudinary:
    let preset = process.env.REACT_APP_CLOUDINARY_PRESET;
    let cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
    let cloudPath = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    // create body to post:
    let dataForBody = new FormData();
    dataForBody.append('file', item.url[0]);
    dataForBody.append('upload_preset', preset);
    dataForBody.append('cloud_name', cloudName);

    const uploadImageToCloudinary = await fetch(cloudPath, {
      method: 'POST',
      body: dataForBody,
    });
    let imageData = await uploadImageToCloudinary.json();
    console.log('post to cloud', imageData);

    // get access to token in local storage:
    let tokenFromLS = localStorage.getItem('token');
    let JWT_TOKEN = JSON.parse(tokenFromLS);

    try {
      let path = `${process.env.REACT_APP_RECIPES_API}/recipes`;
      let response = await fetch(path, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${JWT_TOKEN}`,
        },
        body: JSON.stringify({ ...item, url: imageData.url }),
      });
      if (response.status === 201) {
        setMessageAdded(true);
      } else {
        let error = new Error(`${response.statusText}: ${response.url}`);
        error.status = response.status;
        throw error;
      }
    } catch (error) {
      console.log('something went wrong creating the New Recipe', error);
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
              id="namerecipe"
              name="namerecipe"
              type="text"
              placeholder={`Edit the name of your new recipe`}
              onChange={formik.handleChange}
            />

            {formik.touched.namerecipe && formik.errors.namerecipe ? (
              <div className="text-danger">{`The name of the recipe is ${formik.errors.namerecipe}`}</div>
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
                    onChange={formik.handleChange}
                  />
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
                    onChange={formik.handleChange}
                  />
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
                    onChange={formik.handleChange}
                  />
                </Col>
                <Col>
                  <Form.Control
                    id="measurement3"
                    name="measurement3"
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
                    onChange={formik.handleChange}
                  />
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
                <Form.Control
                  as="textarea"
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

            <Form.Group className="mb-3">
              <Form.Label>Cuisine Country</Form.Label>
              <Form.Control
                id="mealorigin"
                name="mealorigin"
                type="text"
                placeholder={`Add a Cuisine Country`}
                onChange={formik.handleChange}
              />

              {formik.touched.mealorigin && formik.errors.mealorigin ? (
                <div className="text-danger">{`${formik.errors.mealorigin}`}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Meal Type</Form.Label>
              <Form.Control
                id="mealtype"
                name="mealtype"
                type="text"
                placeholder={`Add a Meal Type`}
                onChange={formik.handleChange}
              />

              {formik.touched.mealtype && formik.errors.mealtype ? (
                <div className="text-danger">{`${formik.errors.mealtype}`}</div>
              ) : null}
            </Form.Group>

            {/* <div className="mealOrigin row mt-5">
            <label>Cuisine Country</label>
            <Form.Select 
            id="mealOrigin"
            name="mealOrigin"
            type="select"
            onSelect={(e)=>{
              console.log(e)
            }}
            aria-label="Default select example">
              <option>Select your Cuisine Country</option>
              <option value="American">American</option>
              <option value="British">British</option>
              <option value="Canadian">Canadian</option>
              <option value="Chinese">Chinese</option>
              <option value="Croatian">Croatian</option>
              <option value="Dutch">Dutch</option>
              <option value="French">French</option>
              <option value="Indian">Indian</option>
              <option value="Irish">Irish</option>
              <option value="Italian">Italian</option>
              <option value="Jamaican">Jamaican</option>
              <option value="Malaysian">Malaysian</option>
              <option value="Mexican">Mexican</option>
              <option value="Polish">Polish</option>
              <option value="Russian">Russian</option>
              <option value="Vietnamese">Vietnamese</option>
            </Form.Select>
            {formik.touched.mealOrigin && formik.errors.mealOrigin ? (
                <div className="text-danger">{`${formik.errors.mealOrigin}`}</div>
              ) : null}
            </div> */}

            {/* <div className="mealType row mt-5">
            <label>Meal Type</label>
            <Form.Select 
            id="mealType"
            name="mealType"
            type="select"
            as="select"
            onSelect={formik.handleChange}
            aria-label="Default select example">
              <option>Select your Meal Type</option>
              <option value="Beef">Beef</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Chicken">Chicken</option>
              <option value="Dessert">Dessert</option>
              <option value="Miscellaneous">Miscellaneous</option>
              <option value="Pork">Pork</option>
              <option value="Seafood">Seafood</option>
              <option value="Side">Side</option>
              <option value="Starter">Starter</option>
              <option value="Vegetarian">Vegetarian</option>            
            </Form.Select>
            {formik.touched.mealType && formik.errors.mealType ? (
                <div className="text-danger">{`${formik.errors.mealType}`}</div>
              ) : null}
            </div> */}
          </Form.Group>

          <div className="imageUpload d-flex flex-column row mt-5">
            <label htmlFor="url">Add Image</label>
            <input
              id="url"
              name="url"
              type="file"
              onChange={(event) => {
                const fileToUpload = event.target.files;
                formik.setFieldValue('url', fileToUpload);
              }}
            />
            {formik.touched.url && formik.errors.url ? (
              <div className="text-danger">{`${formik.errors.url}`}</div>
            ) : null}
          </div>

          <Button
            style={{ backgroundColor: '#94340c', color: '#FFF' }}
            variant="primary"
            type="submit"
          >
            Create new recipe
          </Button>
        </Form>
        {error ? <div>{error.message}</div> : null}
        {messageAdded ? (
          <>
            <p>Recipe created successfully, congratulation</p>
            <Link className="btn btn-outline-secondary" to="/favorites">
              {' '}
              Go back to My Recipes page
            </Link>
          </>
        ) : null}
      </div>
    </>
  );
};

export default AddRecipeForm;
