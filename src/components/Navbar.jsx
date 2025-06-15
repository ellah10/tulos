import React from "react";
import { Search } from "lucide-react";
import CartIcon from "./CartIcon";
import "../Styles/Navbar.scss";

const MenuLinks = [
  {
    id: 1,
    name: "home",
    link: "/#",
  },
  {
    id: 2,
    name: "featured",
    link: "/#",
  },
  {
    id: 3,
    name: "new",
    link: "/#",
  },
  {
    id: 4,
    name: "acessories",
    link: "/#",
  },
  {
    id: 5,
    name: "shop",
    link: "/#",
  },
];

function Navbar() {
  const itemCount = 0;
  return (
    <div>
      <div className="container">
        <div className="header">
          <ul className="nav">
            {MenuLinks.map((data) => (
              <li key={data.id}>
                <a href={data.link}>{data.name} </a>
              </li>
            ))}
          </ul>
          <div className="logo">
            <a href="#">tulos</a>
          </div>
          <div className="right-nav">
            <a href="#" >
              <Search className="search-icon" />
            </a>
            <a href="#" className="cartIcon">
              <CartIcon itemCount={itemCount} className="icon" />
            </a>
            <div className="login">
              <a href="#">Login</a>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <h1>Best Clothing Collection</h1>
        <p>Find everything you need to look and feel your best, and shop the latest men's fashion and lifestyle products.</p>
      </div>
    </div>
  );
}

export default Navbar;
