import { Formik, FormikProps, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
 import * as Yup from 'yup';
 
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

 const EditorRecipesFromUser = (props) => {
    const [error, setError] = useState(false)
    const [messageUpdated, setMessageUpdated] = useState()

    let itemsForInputs = Object.keys(props.item)
 
return(
    <div className="Sign up form">
  <Formik
       initialValues={{ 
        namerecipe:'' , 
        mealtype:'', 
        mealorigin:'',
        ingredients1:'',
        ingredients2:'',
        ingredients3:'',
        ingredients4:'',
        ingredients5:'',
        measurement1:'',
        measurement2:'',
        measurement3:'',
        measurement4:'',
        measurement5:'',
        instruction:'',
        url:''}}

    validate= {(values)=>{
      let errors = {};
        if (!values.namerecipe)
        errors.namerecipe = "The recipe name is required";

        return errors;

    }}

       validationSchema={Yup.object({
        namerecipe: Yup.string()
           .max(150, 'Must be 150 characters or less')
           .required('Required'),
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
            .required('Required'),
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
        ingredients2: Yup.string().max(150, "150 characters or less").optional().nullable(),
        ingredients3: Yup.string().max(150, "150 characters or less").optional().nullable(),
        ingredients4: Yup.string().max(150, "150 characters or less").optional().nullable(),
        ingredients5: Yup.string().max(150, "150 characters or less").optional().nullable(),
        measurement1: Yup.string().max(150, "150 characters or less").required(),
        measurement2: Yup.string().max(150, "150 characters or less").optional().nullable(),
        measurement3: Yup.string().max(150, "150 characters or less").optional().nullable(),
        measurement4: Yup.string().max(150, "150 characters or less").optional().nullable(),
        measurement5: Yup.string().max(150, "150 characters or less").optional().nullable(),
        instruction: Yup.string().required(),
        url: Yup.string().required(),
       })}
       onSubmit={(this.handelSubmit) => {
        console.log('values in onsubmit', values);
      // check url:
      //   let changedUrl = false
      //   if (values.url !== props.item.url) {
      //       changedUrl = true
      //   }
      // props.updateRecipe(values, props.item.id, changedUrl)
      // props.handleClose()


        //   pull function(values)
       }}
     >
       <Form className='d-flex flex-column m-5'>
         <label htmlFor="nameRecipe">Name of the Recipe</label>
         <Field name="nameRecipe" type="text" placeholder="Edit the name of the recipe"/>
         <ErrorMessage name="nameRecipe" />

         <label htmlFor="ingredients1">Ingredients</label>
         <Field name="ingredients1" type="text" placeholder="Ingredient"/>
         <ErrorMessage name="ingredients1" />

         {/* <label htmlFor="ingredients1">Ingredients</label> */}
         <Field name="measurement1" type="text" placeholder="Edit the Quantity (e.g 100g)" />
         <ErrorMessage name="measurement1" />

         <Field name="ingredients2" type="text" placeholder="Ingredient"/>
         <ErrorMessage name="ingredients2" />

         {/* <label htmlFor="ingredients1">Ingredients</label> */}
         <Field name="measurement2" type="text" placeholder="Edit the Quantity (e.g 100g)" />
         <ErrorMessage name="measurement2" />

         <Field name="ingredients3" type="text" placeholder="Ingredient"/>
         <ErrorMessage name="ingredients3" />

         {/* <label htmlFor="ingredients1">Ingredients</label> */}
         <Field name="measurement3" type="text" placeholder="Edit the Quantity (e.g 100g)" />
         <ErrorMessage name="measurement3" />

         <Field name="ingredients4" type="text" placeholder="Ingredient"/>
         <ErrorMessage name="ingredients4" />

         {/* <label htmlFor="ingredients1">Ingredients</label> */}
         <Field name="measurement4" type="text" placeholder="Edit the Quantity (e.g 100g)" />
         <ErrorMessage name="measurement4" />

         <Field name="ingredients5" type="text" placeholder="Ingredient"/>
         <ErrorMessage name="ingredients5" />

         {/* <label htmlFor="ingredients1">Ingredients</label> */}
         <Field name="measurement5" type="text" placeholder="Edit the Quantity (e.g 100g)" />
         <ErrorMessage name="measurement5" />

         <label htmlFor="instruction">Preparation</label>
         <Field name="instruction" type="textarea" placeholder="Edit the instructions for the preparation"/>
         <ErrorMessage name="instruction" />

         <label htmlFor="mealOrigin">Cuisine Country</label>
         <Field name="mealOrigin" type="select" placeholder="Select one of the following options"/>
         <ErrorMessage name="mealOrigin" />

         <label htmlFor="mealOrigin">Meal Type</label>
         <Field name="mealType" type="select" placeholder="Select one of the following options"/>
         <ErrorMessage name="mealType" />

         <label htmlFor="url">Add a New Image</label>
         <Field name="url" 
         type="file"
         onChange={(event) => {const fileToUpload = event.target.files}}
         />
         <ErrorMessage name="ingredients1" />


         <button type="submit">Submit</button>
       </Form>
     </Formik>
     {messageUpdated? (<div>{messageUpdated}</div>) : null}
     {error? (<div>{error.message}</div>) : null}
    </div>

  )
}

export default EditorRecipesFromUser

//modal with bootstrap
// return (
//     < div className="Editor">
//       <form onSubmit={formik.handleSubmit}>
//         <Modal.Body >
//           {/*Instead of writing the input by hand for each field, we can loop over each property and build inputs in the map */}
//           {itemsForInputs.map(itemKey => {
//             if(itemKey === 'id' || itemKey === 'url') { return null }
//             return (
//               <div key={itemKey} className='d-flex flex-column'>
//                 <label htmlFor={itemKey}> {`${itemKey} of item`} </label>
//                 <input
//                   id={itemKey}
//                   name={itemKey}
//                   type="text"
//                   placeholder={`Edit the ${itemKey} of the item!`} 
//                   value={formik.values[itemKey]}
//                   // use callback from formik
//                   onChange={formik.handleChange}
//                 />
//                 {formik.touched[itemKey] && formik.errors[itemKey] ? (
//                   <div className='text-danger'>{`${itemKey} is ${formik.errors[itemKey]}`}</div>
//                 ) : null 
//                 }
//               </div>)
//           })}
//          <div className='imageupload'>
//           <label htmlFor="url">Change image</label>
//           <input 
//           id='url' 
//           name='url' 
//           type="file" 
//           onChange={(event)=> {
//             const fileToUpload = event.target.files 
//             formik.setFieldValue('url', fileToUpload)
//           }}
//           />
//           {formik.touched.url && formik.errors.url ? (
//             <div className='text-danger'>{`Url is ${formik.errors.url}`}</div> 
//           ) : null 
//           }
//         </div> 
      
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={props.handleClose} >
//             Cancel
//           </Button>
//           <Button variant="primary" type='submit'>
//             Update
//           </Button>
//         </Modal.Footer>
//       </form>
//     </div>
//   )
// }


// export default Editor