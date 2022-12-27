import React, { useState, createContext } from "react";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <header className="header">
      <h1 className="cbc">CBC</h1>
      <GiHamburgerMenu className="ham" style={{ alignSelf: "center" }} />

      <nav>
        <span className="links">
          <Link className="nav-link" to="/">
            CHARACTERS
          </Link>
          <Link className="nav-link" to="/">
            MATCH-UPS
          </Link>
        </span>
        <input
          type="text"
          placeholder="find your hero/villan"
          onChange={(e) => {
            return e.target.value;
          }}
        />
        <BsSearch style={{ alignSelf: "center", marginLeft: 5 }} />
      </nav>
    </header>
  );
};

export default Header;
