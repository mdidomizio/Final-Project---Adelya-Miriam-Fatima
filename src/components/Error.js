const Error = (props) => {
    return (
      <div className="card">
        <div className="card-header">
          {" "}
          <h2>Ups, something went wrong!</h2>
        </div>
        <div className="card-body p-3">
          <blockquote class="blockquote mb-100 width=18rem">
            <p> Please try later or check the URL you have used</p>
          </blockquote>
        </div>
      </div>
    );
  };
  export default Error;