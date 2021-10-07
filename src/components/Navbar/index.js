import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavButtons,
} from "./NavbarElements";
// import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import Button from "../Button";
import AlrtifyHeader from "./AlrtifyHeader";
import Colors from "../../constants/Colors";

const Navbar = ({ toggleMenu }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/" onClick={toggleHome}>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
            }}
          >
            <AlrtifyHeader />
          </div>
        </NavLogo>
        <MobileIcon onClick={toggleMenu}>
          <FaBars color={Colors.primaryBlue} />
        </MobileIcon>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            color: "white",
          }}
        >
          <NavMenu>
            <NavItem>
              <NavLinks
                to="hero"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="whatIdo"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                What I Do
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="portfolio"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Portfolio
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>

          <NavButtons>
            <Button title="LOG IN" login />
            <Button title="Invest Now" header investNow />
          </NavButtons>
        </div>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
