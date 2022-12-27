import React, { useState } from "react";

import Data from "../components/Data";
import Card from "../components/Card";
import { Link } from "react-router-dom";

import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  console.log(Data);
  return (
    <div>
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
              setSearchTerm(e.target.value);
            }}
          />
          <BsSearch style={{ alignSelf: "center", marginLeft: 5 }} />
        </nav>
      </header>

      <center>
        <h2 className="title">COMIC BOOK CHARACTERS</h2>
      </center>

      <div className="container">
        <main>
          {Data.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((val, key) => {
            return (
              <Link key={key} className="character-link" to={`/${val.name}`}>
                <Card className="card" data={val} />
              </Link>
            );
          })}
          {/* {Data.map((character) => {
            return (
              <Link
                key={character.name}
                className="character-link"
                to={`/${character.name}`}
              >
                <Card className="card" data={character} />
              </Link>
            );
          })} */}
        </main>
      </div>
    </div>
  );
};

export default Home;
