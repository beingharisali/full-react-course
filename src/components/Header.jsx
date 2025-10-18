import React from "react";
import "./header.css";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  return (
    <div class="headers">
      <header id="header">
        <button>Announcement</button>
        <p>How we're responding to COVID-19</p>
      </header>
      <div class="navbar-parent">
        <nav id="navbar" class="width-alignment">
          <div class="logo">
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <div class="links">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Donate</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <div class="icon-parent">
              <FaCartShopping />
              <div class="quantity">0</div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
