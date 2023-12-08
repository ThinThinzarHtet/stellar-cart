import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <header className="header">
      <div className="headerLogo">
        <StorefrontIcon className="headerLogoImage" fontSize="large" />
        <h2 className="headerLogoTitle">StellaCart</h2>
      </div>
      <div className="headerSearch">
        <input type="text" className="headerSearchInput" />
        <SearchIcon className="headerSearchIcon" />
      </div>
      <div className="headerNav">
        <div className="navItem">
          <span className="navItemLineOne">Hello Guest</span>
          <span className="navItemLineTwo">Sign In</span>
        </div>
        <div className="navItem">
          <span className="navItemLineOne">Your</span>
          <span className="navItemLineTwo">Shop</span>
        </div>
        <div className="navItemBasket">
          <ShoppingBasketIcon className="navItemBasketIcon" />
          <span className="navItemLineTwo navBasketCount">0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
