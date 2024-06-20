import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <section id="homeLink">
          <img src="src/img/logo.png" height={30} alt="Bookstore" />
          <p>X-course-task/Daniil Chuhai</p>
        </section>
        <section id="searchSection">
          <input
            type="text"
            placeholder="Search books, authors, ISBNs"
            id="search"
          />
          <img id="searchIcon" src="src/img/search.svg" alt="Search" />
        </section>
        <section id="navigation">
          <ul className="navbar">
            <li className="nav-item">
              <a href="">Bookstore Owner</a>
            </li>
            <li className="nav-item">
              <a href="">Sign In</a>
            </li>
            <li className="nav-item">
              <a href="">
                <img src="src/img/cart.svg" alt="cart" width="" />
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="sub_header">
        <section id="tabs">
          <ul className="navbar">
            <li className="nav-item">
              <a href="">Gift cards</a>
            </li>
            <li className="nav-item">
              <a href="">Special offers!</a>
            </li>
            <li className="nav-item">
              <a href="">Fiction</a>
            </li>
            <li className="nav-item">
              <a href="">Non-Fiction</a>
            </li>
            <li className="nav-item">
              <a href="">Best Sellers</a>
            </li>
            <li className="nav-item">
              <a href="">New Books!</a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Header;
