import { ReactElement } from "react";
import { Link } from "react-router-dom";
import brand from "../assets/brand.svg";

export default function Navbar(): ReactElement {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={brand} height="38" width="38" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTop"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTop">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Assignments
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/boids">
                Boids
              </Link>
            </li>
          </ul>
          <button className="btn btn-primary">
            <i className="bi bi-person-fill"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
