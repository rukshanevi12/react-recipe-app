import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger shadow-sm">
      <div className="container">
        <Link className="navbar-brand fs-2 fw-bold text-white" to="/">
          🍽️ Recipe Finder
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link text-white fw-semibold ${
                  isActive("/")
                    ? "active border-bottom border-white border-3"
                    : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-white fw-semibold ${
                  isActive("/about")
                    ? "active border-bottom border-white border-3"
                    : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
