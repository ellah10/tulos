import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import CartIcon from "./CartIcon";
import "../Styles/Navbar.scss";

const MenuLinks = [
  {
    id: 1,
    name: "home",
    link: "/",
  },
  {
    id: 2,
    name: "featured",
    link: "/featured",
  },
  {
    id: 3,
    name: "new",
    link: "/new",
  },
  {
    id: 4,
    name: "accessories",
    link: "/accessories",
  },
  {
    id: 5,
    name: "shop",
    link: "/shop",
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
                <Link to={data.link}>{data.name} </Link>
              </li>
            ))}
          </ul>
          <div className="logo">
            <Link to="#">tulos</Link>
          </div>
          <div className="right-nav">
            <Link to="#" >
              <Search className="search-icon" />
            </Link>
            <Link to="#" className="cartIcon">
              <CartIcon itemCount={itemCount} className="icon" />
            </Link>
            <div className="login">
              <Link to="#">Login</Link>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Navbar;
