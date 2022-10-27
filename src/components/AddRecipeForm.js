import { useState } from 'react';
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from "formik";
import * as yup from "yup";

const  AddRecipeForm = () => {

  const[error, setError] = useState(false)
  const [messageAdded, setMessageAdded] = useState(false)

  const formik = useFormik({
    initialValues: {
        nameRecipe: "",
        mealType: "",
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
        nameRecipe: yup.string().max(50, "50 characters or less").required("Required"),
        mealType: yup.string().oneOf(["Beef", "Breakfast", "Chicken", "Dessert", "Miscellaneous", "Pork", "Seafood", "Side", "Starter", "Vegetarian"]).required(),
        mealOrigin: yup.string().oneOf(["American", "British", "Canadian", "Chinese", "Croatian", "Dutch", "French", "Indian", "Irish", "Italian", "Jamaican", "Malaysian", "Mexican", "Polish", "Russian", "Vietnamese",]).required(),
        ingredients1: yup.string().max(50, "50 characters or less").required(),
        ingredients2: yup.string().max(50, "50 characters or less").required(),
        ingredients3: yup.string().max(50, "50 characters or less").required(),
        ingredients4: yup.string().max(50, "50 characters or less").required(),
        ingredients5: yup.string().max(50, "50 characters or less").required(),
        ingredients6: yup.string().max(50, "50 characters or less").required(),
        ingredients7: yup.string().max(50, "50 characters or less").required(),
        ingredients8: yup.string().max(50, "50 characters or less").required(),
        ingredients9: yup.string().max(50, "50 characters or less").required(),
        ingredients10: yup.string().max(50, "50 characters or less").required(),
        measurement1: yup.string().max(50, "50 characters or less").required(),
        measurement2: yup.string().max(50, "50 characters or less").required(),
        measurement3: yup.string().max(50, "50 characters or less").required(),
        measurement4: yup.string().max(50, "50 characters or less").required(),
        measurement5: yup.string().max(50, "50 characters or less").required(),
        measurement6: yup.string().max(50, "50 characters or less").required(),
        measurement7: yup.string().max(50, "50 characters or less").required(),
        measurement8: yup.string().max(50, "50 characters or less").required(),
        measurement9: yup.string().max(50, "50 characters or less").required(),
        measurement10: yup.string().max(50, "50 characters or less").required(),
        instruction: yup.string().required(),
        url: yup.string().required()
    }),
    onSubmit: (values) => {
      console.log("clg from submit post", values)
      createRecipeEntry(values)
      
    },
  });

  const createRecipeEntry = async (item) =>{
  
  try{
//   TODO let path = `${process.env.REACT_APP_WARDROBE_API}/users`;
//   let response = await fetch(path, {
//   method: "POST",
//   headers: { "Content-type": "application/json" },
//   body: JSON.stringify({...item}),
//   mode: "cors"
//   });
//   if (response.status === 201) {
//     setMessageAdded(response.statusText)
//   } else {
//   let error = new Error(`${response.statusText}: ${response}`);
//   error.status = response.status;
//   throw error;
//   }
//   } catch (error) {
//   console.log("something went wrong Recipe not added", error);
//   setError(error.message);
//   }
//   };

  return (
    <>

      <div>
      <h3>Add a new recipe to your account</h3>
      </div>

      <div>
      <Form className="container-sm border border-solid p-5" onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
          <Form.Label>Name of the Recipe</Form.Label>
          <Form.Control 
          id="nameRecipe"
          name="nameRecipe"
          type="text" 
          placeholder="Edit the name of your new recipe"
          onChange={formik.handleChange}
          />

          {formik.touched.username && formik.errors.username ? (
                  <div className='text-danger'>{`Username is ${formik.errors.username}`}</div>
                ) : null
                }
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label> Meal Type</Form.Label>
          <Form.Control 
          id="mealType"
          name="mealType"
          type="text" 
          placeholder="Select a meal type"
          onChange={formik.handleChange} />
          {formik.touched.email && formik.errors.email ? (
                  <div className='text-danger'>{`Email is ${formik.errors.email}`}</div>
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
          {formik.touched.password && formik.errors.password ? (
                  <div className='text-danger'>{`Password is ${formik.errors.password}`}</div>
                ) : null
                }

        </Form.Group>
        <Button variant="primary" type="submit">
          Create new recipe
        </Button>
      </Form>
      {error? (<div>{error.message}</div>) : null}
      {messageAdded ? (
          <>
            <h2>Recipe created successfully, congratulation</h2>
            <Link to="/"> Go back to main page</Link>
          </>
          ) : (null)}
      </div>
</>

  );
}

export default AddRecipeForm;