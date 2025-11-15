import Nav from "../components/Nav";
import profileImage from "../assests/images/profile.jpg";

const AboutPage = () => {
  const technologies = [
    { name: "React", icon: "⚛️", description: "UI Library" },
    { name: "TypeScript", icon: "📘", description: "Type Safety" },
    { name: "Bootstrap 5", icon: "🎨", description: "Styling Framework" },
    { name: "React Router", icon: "🛣️", description: "Navigation" },
    { name: "Spoonacular API", icon: "🍳", description: "Recipe Data" },
    { name: "Vite", icon: "⚡", description: "Build Tool" },
  ];

  return (
    <>
      <Nav />
      <div
        className="bg-gradient"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "80px 0",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-center mb-4 mb-lg-0">
              <div className="position-relative d-inline-block">
                <div className="bg-white rounded-circle p-2 shadow-lg d-inline-block">
                  <div
                    className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "200px",
                      height: "200px",
                      fontSize: "80px",
                    }}
                  >
                    <img
                      src={profileImage}
                      alt="Rukshan Perera"
                      className="rounded-circle"
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 text-dark">
              <h1 className="display-3 fw-bold mb-3">Rukshan Perera</h1>
              <h3 className="mb-4 opacity-75">Full Stack Software Engineer</h3>
              <p className="lead mb-4">
                Passionate about building elegant and efficient web applications
                that solve real-world problems with modern technologies.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a
                  href="https://github.com/rukshanevi12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark text-light btn-lg shadow"
                >
                  <i className="bi bi-github me-2"></i>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/rukshan-perera-965956205/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-light btn-lg shadow text-white"
                >
                  <i className="bi bi-linkedin me-2"></i>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div
              className="alert alert-warning border-0 shadow-sm"
              role="alert"
            >
              <div className="d-flex align-items-start">
                <i className="bi bi-exclamation-triangle-fill fs-2 me-3 text-warning"></i>
                <div>
                  <h5 className="alert-heading fw-bold mb-2">
                    <i className="bi bi-info-circle me-2"></i>
                    API Rate Limit Notice
                  </h5>
                  <p className="mb-2">
                    This application uses the <strong>free tier</strong> of the
                    Spoonacular API, which is limited to{" "}
                    <strong>50 requests per day</strong>.
                  </p>
                  <p className="mb-0">
                    If you encounter an error message about reaching the daily
                    limit, please try again tomorrow or contact me for a demo
                    with upgraded access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                <h2 className="fw-bold text-dark mb-4 d-flex align-items-center">
                  <span
                    className="bg-danger text-white rounded-circle p-3 me-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    🍽️
                  </span>
                  About Recipe Finder
                </h2>
                <p className="lead text-muted mb-4">
                  A modern, responsive recipe search application that helps food
                  enthusiasts discover and explore delicious recipes from around
                  the world.
                </p>

                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-search text-info fs-3 me-3"></i>
                      <div>
                        <h5 className="fw-bold">Smart Search</h5>
                        <p className="text-muted mb-0">
                          Search thousands of recipes by name or ingredients
                          with instant results
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-list-check text-success fs-3 me-3"></i>
                      <div>
                        <h5 className="fw-bold">Detailed Instructions</h5>
                        <p className="text-muted mb-0">
                          Step-by-step cooking instructions with ingredients and
                          equipment
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-phone text-danger fs-3 me-3"></i>
                      <div>
                        <h5 className="fw-bold">Responsive Design</h5>
                        <p className="text-muted mb-0">
                          Works seamlessly on desktop, tablet, and mobile
                          devices
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-lightning-charge text-warning fs-3 me-3"></i>
                      <div>
                        <h5 className="fw-bold">Fast & Intuitive</h5>
                        <p className="text-muted mb-0">
                          Lightning-fast search with a clean, user-friendly
                          interface
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <h2 className="text-center fw-bold text-dark mb-5">
              Built With Modern Technologies
            </h2>
            <div className="row g-4">
              {technologies.map((tech, index) => (
                <div key={index} className="col-md-4 col-sm-6">
                  <div className="card h-100 border-0 shadow-sm hover-lift">
                    <div className="card-body text-center p-4">
                      <div className="fs-1 mb-3">{tech.icon}</div>
                      <h5 className="fw-bold text-dark mb-2">{tech.name}</h5>
                      <p className="text-muted small mb-0">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              className="card border-0 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
              }}
            >
              <div className="card-body p-5">
                <h3 className="fw-bold text-dark mb-4 text-center">
                  <i className="bi bi-code-slash me-2"></i>
                  Technical Implementation
                </h3>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <h6 className="fw-bold text-dark">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Frontend Architecture
                    </h6>
                    <ul className="list-unstyled ms-4 text-muted">
                      <li>• Component-based React architecture</li>
                      <li>• TypeScript for type safety</li>
                      <li>• React Router for navigation</li>
                      <li>• Bootstrap 5 for responsive UI</li>
                    </ul>
                  </div>
                  <div className="col-md-6 mb-3">
                    <h6 className="fw-bold text-dark">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      API Integration
                    </h6>
                    <ul className="list-unstyled ms-4 text-muted">
                      <li>• RESTful API integration</li>
                      <li>• Spoonacular Food API</li>
                      <li>• Async data fetching</li>
                      <li>• Error handling & loading states</li>
                    </ul>
                  </div>
                </div>
                <div className="text-center mt-4 pt-3 border-top">
                  <p className="text-muted mb-2">
                    <i className="bi bi-rocket-takeoff me-2"></i>
                    Deployed on <strong>Netlify</strong> with continuous
                    deployment from GitHub
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15) !important;
        }
      `}</style>
    </>
  );
};

export default AboutPage;
