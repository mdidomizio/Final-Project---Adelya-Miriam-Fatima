import { useState } from 'react';
import { Link } from 'react-router-dom';

const Logout = (props) => {
  const [messageLoggedout, setMessageLoggedout] = useState(false);
  return (
    <div className="Logout">
      <h2>Hope to see you back soon!</h2>
      <p>Click here to log out:</p>
      <button
        type="submit"
        className="btn"
        style={{ backgroundColor: '#94340c', color: '#FFF' }}
        onClick={() => {
          localStorage.removeItem('token');
          props.setLoggedIn(false);
          setMessageLoggedout(true);
        }}
      >
        Logout
      </button>
      {messageLoggedout ? (
        <>
          <p>You are now logged out</p>
          <Link className="btn btn-outline-secondary" to="/">
            {' '}
            Go back to Home
          </Link>
        </>
      ) : null}
    </div>
  );
};

export default Logout;
