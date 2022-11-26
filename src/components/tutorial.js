import React from "react";
import {Formik, FormikProps, Form, Field, ErrorMessage} from "formik";
// import { render } from "@testing-library/react";

export class MyForm extends React.Component {
        
    handelSubmit = (values, {
            props = this.props,
            setSubmitting
        }) =>{
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            return;
        }
    
    
    render() {

        return(
            <Formik
            initialValues={{
                name: '',
                email: '',
                gender: ''
            }}
            validate={(values)=> {
                let errors = {};
                    if (!values.email)
                        errors.email = "email required";

                    return errors;
            }}

            onSubmit={this.handelSubmit}
            render={props => {
                return (
                    <Form>
                        <Field type="text" name="name"></Field>
                        <ErrorMessage name="name"/>

                        <Field type="email" name="email"></Field>
                        <ErrorMessage name="email"/>

                        <Field component="select" name="gender" placeholder="select options">
                            <option value="male">Male</option>
                            <option value="female">Female</option>

                        </Field>
                        <ErrorMessage name="gender"/>
                        <button
                        type="submit"
                        disable={props.isSubmitting}>
                            Submit form
                        </button>


                    </Form>

                )
            }}

            />);
        }
    }
