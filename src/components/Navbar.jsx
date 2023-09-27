import React from "react";

function Navbar(props) {

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} shadow`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Notes
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
              <div class="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="button"
                  id="flexSwitchCheckChecked"
                  onClick={props.toggleMode}
                />
                <label
                  className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`}
                  htmlFor="flexSwitchCheckChecked"
                >
                  {props.modeType}
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
