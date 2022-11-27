import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Yup from "yup";

const FastEditor = (props) => {
  //let itemsForInputs = Object.keys(props.item)
  const formik = useFormik({
    initialValues: {
      namerecipe: props.item.namerecipe,
      mealtype: props.item.mealtype,
      mealorigin: props.item.mealorigin,
      ingredients1: props.item.ingredients1,
      ingredients2: props.item.ingredients2,
      ingredients3: props.item.ingredients3,
      ingredients4: props.item.ingredients4,
      ingredients5: props.item.ingredients5,
      measurement1: props.item.measurement1,
      measurement2: props.item.measurement2,
      measurement3: props.item.measurement3,
      measurement4: props.item.measurement4,
      measurement5: props.item.measurement5,
      instruction: props.item.instruction,
      url: props.item.url,
    },

    validationSchema: Yup.object({
      namerecipe: Yup.string()
        .max(150, "150 characters or less")
        .required("Required"),
      mealtype: Yup.string()
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
      mealorigin: Yup.string()
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
      ingredients1: Yup.string().max(150, "150 characters or less").required(),
      ingredients2: Yup.string()
        .max(150, "150 characters or less")
        .optional()
        .nullable(),
      ingredients3: Yup.string()
        .max(150, "150 characters or less")
        .optional()
        .nullable(),
      ingredients4: Yup.string()
        .max(150, "150 characters or less")
        .optional()
        .nullable(),
      ingredients5: Yup.string()
        .max(150, "150 characters or less")
        .optional()
        .nullable(),
      measurement1: Yup.string().max(150, "150 characters or less").required(),
      measurement2: Yup.string()
        .max(150, "150 characters or less")
        .optional()
        .nullable(),
      measurement3: Yup.string()
        .max(150, "150 characters or less")
        .optional()
        .nullable(),
      measurement4: Yup.string()
        .max(150, "150 characters or less")
        .optional()
        .nullable(),
      measurement5: Yup.string()
        .max(150, "150 characters or less")
        .optional()
        .nullable(),
      instruction: Yup.string().required(),
      url: Yup.string().required(),
    }),
    onSubmit: (values) => {
      console.log("clg from submit", values);
      // check url:
      let changedUrl = false;
      if (values.url !== props.item.url) {
        changedUrl = true;
      }
      props.updateRecipe(values, props.item.id, changedUrl);
      props.handleClose();
    },
  });
  return (
    <div className="UpdateForm">
      <form className="d-flex flex-column" onSubmit={formik.handleSubmit}>
        <Modal.Body className="tags fst-italic">
          {/* Instead of writing the input by hand for each field, we can loop over each property and build inputs in the map */}
          <Form.Group className="mb-3">
            <Form.Label className="tags fst-italic">Name of the Recipe</Form.Label>
            <Form.Control
              id="namerecipe"
              name="namerecipe"
              type="text"
              placeholder={`Edit the name of your new recipe`}
              onChange={formik.handleChange}
              value={formik.values.namerecipe}
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
                    value={formik.values.ingredients1}
                  />
                </Col>
                <Col>
                  <Form.Control
                    id="measurement1"
                    name="measurement1"
                    type="text"
                    placeholder="Quantity (e.g 100g)"
                    onChange={formik.handleChange}
                    value={formik.values.measurement1}
                  />
                </Col>
              </Row>

              {formik.touched.ingredients1 && formik.errors.ingredients1 ? (
                <div className="text-danger">{`${formik.errors.ingredients1}`}</div>
              ) : null}

              {formik.touched.measurement1 && formik.errors.measurement1 ? (
                <div className="text-danger">{`${formik.errors.measurement1}`}</div>
              ) : null}

              <Row className="Second row mt-2">
                <Col>
                  <Form.Control
                    id="ingredients2"
                    name="ingredients2"
                    type="text"
                    placeholder="Ingredient"
                    onChange={formik.handleChange}
                    value={formik.values.ingredients2}
                  />
                </Col>
                <Col>
                  <Form.Control
                    id="measurement2"
                    name="measurement2"
                    type="text"
                    placeholder="Quantity (e.g 100g)"
                    onChange={formik.handleChange}
                    value={formik.values.measurement2}
                  />
                </Col>
              </Row>

              {formik.touched.ingredients2 && formik.errors.ingredients2 ? (
                <div className="text-danger">{`${formik.errors.ingredients2}`}</div>
              ) : null}

              {formik.touched.measurement2 && formik.errors.measurement2 ? (
                <div className="text-danger">{`${formik.errors.measurement2}`}</div>
              ) : null}

              <Row className="Third row mt-2">
                <Col>
                  <Form.Control
                    id="ingredients3"
                    name="ingredients3"
                    type="text"
                    placeholder="Ingredient"
                    onChange={formik.handleChange}
                    value={formik.values.ingredients3}
                  />
                </Col>
                <Col>
                  <Form.Control
                    id="measurement3"
                    name="measurement3"
                    type="text"
                    placeholder="Quantity (e.g 100g)"
                    onChange={formik.handleChange}
                    value={formik.values.measurement3}
                  />
                </Col>
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
                    value={formik.values.ingredients4}
                  />
                </Col>
                <Col>
                  <Form.Control
                    id="measurement4"
                    name="measurement4"
                    type="text"
                    placeholder="Quantity (e.g 100g)"
                    onChange={formik.handleChange}
                    value={formik.values.measurement4}
                  />
                </Col>
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
                    value={formik.values.ingredients5}
                  />
                </Col>
                <Col>
                  <Form.Control
                    id="measurement5"
                    name="measurement5"
                    type="text"
                    placeholder="Quantity (e.g 100g)"
                    onChange={formik.handleChange}
                    value={formik.values.measurement5}
                  />
                </Col>
              </Row>

              {formik.touched.ingredients5 && formik.errors.ingredients5 ? (
                <div className="text-danger">{`${formik.errors.ingredients5}`}</div>
              ) : null}

              {formik.touched.measurement5 && formik.errors.measurement5 ? (
                <div className="text-danger">{`${formik.errors.measurement5}`}</div>
              ) : null}
            </div>
          </Form.Group>

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
                value={formik.values.instruction}
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
              value={formik.values.mealorigin}
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
              value={formik.values.mealtype}
            />
            {formik.touched.mealtype && formik.errors.mealtype ? (
              <div className="text-danger">{`${formik.errors.mealtype}`}</div>
            ) : null}
          </Form.Group>

          <div className="imageupload">
            <label htmlFor="url">Change image</label>
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
        </Modal.Body>
        <Modal.Footer>
          <Button
          style={{ color: '#94340c', backgroundColor: '#FFF' }}
            variant="secondary"
            type="button"
            onClick={() => {
              props.handleClose();
            }}
          >
            Cancel
          </Button>
          <Button variant="primary" type="submit" style={{ backgroundColor: '#94340c', color: '#FFF', border: '1px solid  rgb(148, 52, 12)' }}>
            Update Recipe
          </Button>
        </Modal.Footer>
      </form>
    </div>
  );
};
export default FastEditor;
