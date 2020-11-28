import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <a className="navbar-brand" href="/">
        Google Book Search
      </a>
      <a className="navbar-text" href="/saved">
        View your Saved Books
      </a>
    </nav>
  );
}

export default Nav;