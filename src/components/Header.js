import React from "react";

function Header(){
  return (
    <React.Fragment>
        <nav className="navbar bg-light">
        <div className="container-fluid">
            <a className="navbar-brand">EpiGames</a>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        </nav>
    </React.Fragment>
  );
}

export default Header;