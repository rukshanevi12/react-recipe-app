import Nav from "../components/Nav";

const AboutPage = () => {
  const technologies = [
    { name: "React", icon: "⚛️", color: "info" },
    { name: "TypeScript", icon: "📘", color: "primary" },
    { name: "Bootstrap 5", icon: "🎨", color: "purple" },
    { name: "React Router", icon: "🛣️", color: "warning" },
    { name: "Spoonacular API", icon: "🍳", color: "danger" },
    { name: "Vite", icon: "⚡", color: "success" },
  ];

  return (
    <>
      <Nav />
      <div className="container py-5">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-dark mb-3">
            About Recipe Finder
          </h1>
          <p className="lead text-muted">
            A modern recipe search application built with cutting-edge web
            technologies
          </p>
        </div>

        {/* Developer Info Card */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div
                    className="bg-dark text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "100px",
                      height: "100px",
                      fontSize: "48px",
                    }}
                  >
                    👨‍💻
                  </div>
                  <h2 className="fw-bold text-dark">Rukshan Perera</h2>
                  <p className="text-muted fs-5">
                    Full Stack Software Engineer
                  </p>
                </div>

                <div className="text-center mb-4">
                  <p className="lead">
                    Passionate about building elegant and efficient web
                    applications that solve real-world problems.
                  </p>
                </div>

                {/* Social Links */}
                <div className="d-flex justify-content-center gap-3">
                  <a
                    href="https://github.com/rukshanevi12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark btn-lg"
                  >
                    <i className="bi bi-github me-2"></i>
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rukshan-perera-965956205/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info btn-lg text-white"
                  >
                    <i className="bi bi-linkedin me-2"></i>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <h3 className="text-center fw-bold text-dark mb-4">
              Technologies Used
            </h3>
            <div className="row g-4">
              {technologies.map((tech, index) => (
                <div key={index} className="col-md-4">
                  <div className="card h-100 shadow border-0 hover-card">
                    <div className="card-body text-center p-4">
                      <div className="fs-1 mb-3">{tech.icon}</div>
                      <h5 className="fw-bold text-dark">{tech.name}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Info Section */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <h3 className="fw-bold text-dark mb-4">About This Project</h3>
                <p className="mb-3">
                  Recipe Finder is a modern web application that helps users
                  discover and explore delicious recipes from around the world.
                  Built with React and TypeScript, this app leverages the power
                  of the Spoonacular API to provide detailed recipe information
                  including ingredients, instructions, cooking times, and
                  nutritional data.
                </p>

                <h5 className="fw-bold text-dark mt-4 mb-3">Key Features:</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Search thousands of recipes by name or ingredient
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    View detailed recipe information with step-by-step
                    instructions
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    See ingredient lists with amounts and measurements
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Responsive design that works on all devices
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Fast and intuitive user interface
                  </li>
                </ul>

                <div className="alert alert-info mt-4">
                  <h6 className="fw-bold mb-2">
                    <i className="bi bi-info-circle me-2"></i>API Information
                  </h6>
                  <p className="mb-0">
                    This application uses the free tier of the Spoonacular Food
                    API. Spoonacular provides access to over 5,000 recipes and
                    360,000+ food products with detailed nutritional
                    information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15) !important;
        }
      `}</style>
    </>
  );
};

export default AboutPage;
