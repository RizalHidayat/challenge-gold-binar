import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container ">
        <a className="navbar-brand" href="#">
          <div className="logo"></div>
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ms-3">
              <a className="nav-link" href="#">
                Our Service
              </a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="#">
                Why Us
              </a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="#">
                Testimonial
              </a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="#">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
