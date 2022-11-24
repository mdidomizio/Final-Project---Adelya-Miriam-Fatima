const AboutApp = (props) => {
    return (
        <div className="card">
        <div className="card-header">
          {" "}
          <h2>About our App</h2>
        </div>
        <div className="card-body p-3 ">
          <blockquote class="blockquote mb-100 width=5rem">
          <ul>
            <li><h6>Who builded the App?</h6></li>
                <p className="fs-4 text-start"></p>
            <li><h6>What is the project and why did we build it?</h6></li>
                <p className="fs-4 text-start"></p>
            <li><h6>What can the user do</h6></li>
                <p className="fs-4 text-start"></p>
            <li><h6>Which tools have we used?</h6></li>
                <p className="fs-4 text-start"></p>
            <li><h6>How have we worked and organized our work</h6></li>
                <p className="fs-4 text-start"></p>
            <li><h6>Our main learnings</h6></li>
                <p className="fs-4 text-start"></p>
          </ul>
           
          </blockquote>
        </div>
      </div>
    );
  };
  
  export default AboutApp;
  