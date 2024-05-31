// Header.js
import React, { useState } from "react";
import "./header.css";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import Navbar from "./Navbar"; // Import Navbar component

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <HeaderLeft toggle={toggle} setToggle={setToggle} />
      <Navbar toggle={toggle} setToggle={setToggle} /> {/* Use Navbar component */}
      <HeaderRight />
    </header>
  );
};

export default Header;
