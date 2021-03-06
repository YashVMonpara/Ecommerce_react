import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import Logo from "../assets/unicorn.png";
import "./header.style.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <img src={Logo} alt="" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        {" "}
        Shop{" "}
      </Link>
      <Link to="/shop" className="option">
        {" "}
        Contact{" "}
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          {" "}
          Sign Out{" "}
        </div>
      ) : (
        <Link className="option" to="/signin">
          Sign In
        </Link>
      )}
    </div>
  </div>
);

export default Header;
