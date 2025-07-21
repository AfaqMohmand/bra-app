import React from "react";
import NavbarClient from "./NavbarClient";
import BlackLogo from "../assets/bra-logo-black.svg";

const Navbar = () => {
  return (
    <NavbarClient
      // logoSrc="/assets/bra-logo.svg"
      logoSrc={BlackLogo}
    />
  );
};

export default Navbar;
