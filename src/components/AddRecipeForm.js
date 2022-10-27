import { useState } from 'react';
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from "formik";
import * as yup from "yup";

const AddRecipeForm = () => {

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
  // upload image to cloudinary:
  let preset = 'wardrobe_bootcamp'
  let cloudName = 'dajs1jldd'
  let cloudPath = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
  // create body to post: 
  let dataForBody = new FormData()
  dataForBody.append('file', item.url[0])
  dataForBody.append('upload_preset', preset)
  dataForBody.append('cloud_name', cloudName)

  const uploadImageToCloudinary = await fetch(cloudPath, {
        method: 'POST',
        body: dataForBody
      })
      let imageData = await uploadImageToCloudinary.json()
      console.log('post to cloud', imageData);

      // get access to token in local storage:
      let tokenFromLS = localStorage.getItem('token')
      let JWT_TOKEN = JSON.parse(tokenFromLS)  

try{
    let path = `${process.env.REACT_APP_WARDROBE_API}/wardrobe`;
    let response = await fetch(path, {
      method: "POST",
      headers: { 
        "Content-type": "application/json",
        'Authorization': `Bearer ${JWT_TOKEN}`
    },
      body: JSON.stringify({...item, url: imageData.url}),
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

          {formik.touched.nameRecipe && formik.errors.nameRecipe ? (
                  <div className='text-danger'>{`the name of the recipe is ${formik.errors.nameRecipe}`}</div>
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

        </Form.Group>

        <div className='imageUpload d-flex flex-column'>
          <label htmlFor="url">Add Image</label>
          <input 
          id='url' 
          name='url' 
          type="file" 
          onChange={(event)=> {
            const fileToUpload = event.target.files 
            formik.setFieldValue('url', fileToUpload)
          }}
          />
          {formik.touched.url && formik.errors.url ? (
            <div className='text-danger'>{`Url is ${formik.errors.url}`}</div> 
          ) : null 
          }
        </div> 



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

export default AddRecipeForm