const AboutApp = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Digital Recipes Book</h2>
      </div>
      <div className="card-body p-3 ">
        <blockquote className="blockquote mb-100 width=5rem">
          <section>
            <h4>Who built the App?</h4>
            <p className="fs-4 text-start">
              Miriam Di Domizio, Fatima Sailab, Adelya Nasretdinova
            </p>
          </section>

          <div>
            <h4>What is the project and why did we build it?</h4>
            <p className="fs-4 text-start">
              Miriam is passionate about cooking and coding.
            </p>
          </div>
          <div>
            <h4>What can the user do</h4>
            <div className="fs-4 text-start">
              <ul>
                <li>Sign up, Log in, Log out</li>
                <li>Browse the recipes database</li>
                <li>Filter the recipes</li>
                <li>Searching by key words</li>
                <li>Select and save favorite recipes</li>
                <li>Create and upload your own recipes</li>
                <li>Delete recipes</li>
              </ul>
            </div>
          </div>
          <div>
            <h4>Which tools have we used?</h4>
            <div className="fs-4 text-start">
              <ul>
                <li>Frontend: React</li>
                <li>Backend: Express</li>
                <li>Database: PSQL</li>
                <li>Style: Bootstrap</li>
                <li>Validation Frontend: Formik, Yup</li>
                <li>Validation Backend: Express Validator</li>
              </ul>
            </div>
          </div>

          <div>
            <h4>How have we worked and organized our work</h4>
            <div className="fs-4 text-start">
              <ul>
                <li>Pair programming</li>
                <li>Agile approach</li>
                <li>Daily stand-ups</li>
                <li>Group code review and resolving merge conflicts</li>
              </ul>
            </div>
          </div>
          <div>
            <h4>Our main learnings</h4>
            <div className="fs-4 text-start">
              <ul>
                <li>Collaboration and team work</li>
                <li>Planning and time management</li>
                <li>
                  Understanding of principles of end-to-end project development
                </li>
                <li>Debugging skills and confidence in self-research</li>
              </ul>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export default AboutApp;
