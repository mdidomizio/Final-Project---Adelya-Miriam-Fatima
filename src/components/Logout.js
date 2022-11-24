const Logout = (props) => {
  return (
    <div className="Logout">
      <h2>Hope to see you back soon!</h2>
      <p>Click here to log out:</p>
      <button type="button" class="btn btn-outline-secondary"
        onClick={() => {
          localStorage.removeItem("token");
          props.setLoggedIn(false);
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
