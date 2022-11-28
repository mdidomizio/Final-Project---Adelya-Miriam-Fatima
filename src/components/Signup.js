import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import YupPassword from 'yup-password';
YupPassword(Yup);

const SignUp = () => {
  const [error, setError] = useState(null);
  const [messageSignup, setMessageSignup] = useState();

  const registration = async (newUser) => {
    let userInfo = { ...newUser };
    let path = `${process.env.REACT_APP_RECIPES_API}/users`;
    try {
      let response = await fetch(path, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
      console.log('response from fetch', response);
      if (response.status === 201) {
        setMessageSignup('User is created');
      } else {
        let error = new Error(`${response.statusText}: ${response.url}`);
        error.status = response.status;
        throw error;
      }
    } catch (error) {
      console.log('There was an error when updating data', error);
      setError('There was an error when signing up');
    }
  };

  const EditingCard = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required field'),
    email: Yup.string().email().required('Required field'),
    password: Yup.string().password().required('Required field'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validationSchema={EditingCard}
        onSubmit={(values) => {
          console.log(values);
          registration(values);
        }}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form
            className="Form d-flex justify-content-center m-5"
            onSubmit={handleSubmit}
          >
            <div className="registrationForm d-flex flex-column m-5 gap-3">
              <h3> Registration</h3>
              <div className="mb-3">
                <Field
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  aria-describedby="username"
                  placeholder="Username"
                />
                {touched.username && errors.username && (
                  <div className="text-danger">{errors.username}</div>
                )}
              </div>
              <div className="mb-3">
                <Field
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
                {errors.email && touched.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <Field
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                {errors.password && touched.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
              </div>
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: '#94340c', color: '#FFF' }}
              >
                Register
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {messageSignup ? (
        <div>
          <p>You are signed up! </p>
          <Link className="btn btn-outline-secondary" to="/login">
            {' '}
            Go to login page
          </Link>
        </div>
      ) : null}
      {error ? <div>{error}</div> : null}
    </div>
  );
};
export default SignUp;
