import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__logo">Tasty</div>
        <div className="navbar__container__items">
          <ul className="navbar__container__items__list">
            <NavLink to={'/'}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink to={'/AddPage'}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li>Add Page</li>
            </NavLink>
            <NavLink to={'/WishList'}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li>WishList Page</li>
            </NavLink>
            
            <li>Menu</li>
            <li>Specialities</li>
            <li>Reservation</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="navbar__container__menu">
        <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
