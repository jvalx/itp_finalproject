import { Link } from 'react-router-dom';
import './index';
import './index.css';

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg  mb-2">
      <div className="container-fluid">
        <Link to="/" activeClassName="active">
          Home
        </Link>
        <br></br>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-3 mb-lg-0 pr-3">
            <li className="nav-item">
              <Link to="/posts" activeClassName="active">
                Projects
              </Link>
              <br></br>
            </li>
            <li className="nav-item">
              <Link to="/contact" activeClassName="active">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" activeClassName="active">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
