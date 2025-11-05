import { Link } from "react-router-dom";
import "@assets/scss/components/_header.scss";

const Header = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/" as={Link}>
            <div className="navbar-brand">
              <img alt="logo" src="/images/logo.svg" width={400} height={50} />
            </div>
          </Link>
          <div className="nav-menu">
            <div className="nav-item">
              <Link className="nav-link" as={Link} to="/features">
                Features
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" as={Link} to="/about">
                About Me
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" as={Link} to="/contact">
                Contact Me
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" as={Link} to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
