import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);

const Login = (props) => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState();

  const loginUser = async (input) => {
    console.log(input);
    let path = `${process.env.REACT_APP_RECIPES_API}/users/login`;
    try {
      let response = await fetch(path, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(input),
      });
      if (response.status === 200) {
        console.log(response);
        let data = await response.json();
        console.log('data: ' + JSON.stringify(data));
        let token = data.token;
        let userId = data.userId;
        // save to localStorage
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('userId', JSON.stringify(userId));
        console.log('userId: ' + userId);
        setMessage('You are logged in!');
        // change state of loggedIn
        props.setLoggedIn(true);
      } else {
        let error = new Error(`${response.statusText}: ${response.url}`);
        error.status = response.status;
        throw error;
      }
    } catch (error) {
      console.log('There was an error when logging in user', error);
      setError({ message: 'There was an error when logging in' });
    }
  };
  return (
    <div className="Loginform">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email().required('Required field'),
          password: Yup.string()
            .password()
            .max(72, 'Must be 15 characters or less')
            .required('Required'),
        })}
        onSubmit={(values) => {
          console.log('in on sumbit', values);
          loginUser(values);
        }}
      >
        <Form className="Form d-flex justify-content-center m-5">
          <div className="SigninForm d-flex flex-column m-5 gap-3">
            <h3> Log in </h3>
            <div className="mb-3">
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="form-control"
              />
            </div>
            <ErrorMessage name="email" />
            <div className="mb-3">
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="form-control"
              />
            </div>
            <ErrorMessage name="password" />
            <button
              type="submit"
              style={{ backgroundColor: '#94340c', color: '#FFF' }}
              className="btn shadow-lg rounded"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
      {message ? (
        <div>
          <p>You are logged in!</p>
          <Link className="btn btn-outline-secondary" to="/favorites">
            {' '}
            Go to My Recipes page
          </Link>
        </div>
      ) : null}
      {error ? <div>{error.message}</div> : null}
    </div>
  );
};
export default Login;
