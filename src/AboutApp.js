const AboutApp = (props) => {
  return (
    <div className="card d-flex flex-wrap justify-content-center">
      <div className="card-header">
        <h3 className="h2">Digital Recipes Book</h3>
      </div>
      <div className="card-body p-3 d-flex flex-wrap justify-content-center">
        <blockquote class="blockquote mb-100 width=5rem">
          <section>
            <h3
              className="h3 input-group-text p-3"
              style={{
                fontSize: '22px',
                border: '1px solid #94340c',
                letterSpacing: '0.5px',
              }}
            >
              - Who built the App?
            </h3>
            <p
              className="text-start  p-4"
              style={{
                fontSize: '18px',
                letterSpacing: '0.5px',
              }}
            >
              Miriam Di Domizio, Fatima Sailab, Adelya Nasretdinova
            </p>
          </section>

          <div>
            <h3
              className="h3 input-group-text p-3"
              style={{
                fontSize: '22px',
                border: '1px solid #94340c',
                letterSpacing: '0.5px',
              }}
            >
              - What is the project and why did we build it?
            </h3>
            <p
              className="text-start p-4"
              style={{
                fontSize: '18px',
                letterSpacing: '0.5px',
              }}
            >
              Miriam is passionate about cooking and coding.
            </p>
          </div>
          <div>
            <h3
              className="h3 input-group-text p-3"
              style={{ fontSize: '22px', border: '1px solid #94340c' }}
            >
              - What can the user do
            </h3>
            <ul
              className="text-start p-4"
              style={{
                fontSize: '18px',
                letterSpacing: '0.5px',
              }}
            >
              <li>Sign up, Log in, Log out</li>
              <li>Browse the recipes database</li>
              <li>Filter the recipes</li>
              <li>Searching by key words</li>
              <li>Select and save favorite recipes</li>
              <li>Create and upload your own recipes</li>
              <li>Delete recipes</li>
            </ul>
          </div>
          <div>
            <h3
              className="h3 input-group-text p-3"
              style={{ fontSize: '22px', border: '1px solid #94340c' }}
            >
              - Which tools have we used?
            </h3>

            <ul
              className="text-start  p-4"
              style={{
                fontSize: '18px',
                letterSpacing: '0.5px',
              }}
            >
              <li>Frontend: React</li>
              <li>Backend: Express</li>
              <li>Database: PSQL</li>
              <li>Style: Bootstrap</li>
              <li>Validation Frontend: Formik, Yup</li>
              <li>Validation Backend: Express Validator</li>
            </ul>
          </div>

          <div>
            <h3
              className="h3 input-group-text p-3"
              style={{ fontSize: '22px', border: '1px solid #94340c' }}
            >
              - How have we worked and organized our work
            </h3>

            <ul
              className="text-start  p-4"
              style={{
                fontSize: '18px',
                letterSpacing: '0.5px',
              }}
            >
              <li>Pair programming</li>
              <li>Agile approach</li>
              <li>Daily stand-ups</li>
              <li>Group code review and resolving merge conflicts</li>
            </ul>
          </div>
          <div>
            <h3
              className="h3 input-group-text p-3"
              style={{ fontSize: '22px', border: '1px solid #94340c' }}
            >
              - Our main learnings
            </h3>

            <ul
              className="text-start p-4"
              style={{
                fontSize: '18px',
                letterSpacing: '0.5px',
              }}
            >
              <li>Collaboration and team work</li>
              <li>Planning and time management</li>
              <li>
                Understanding of principles of end-to-end project development
              </li>
              <li>Debugging skills and confidence in self-research</li>
            </ul>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export default AboutApp;
