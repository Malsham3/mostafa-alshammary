import React from "react";
import NavItem from "./NavItem";
import PDF from "../../utils/MAResume2021.pdf";

const navItems = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "ABOUT",
    link: "/about",
  },
  {
    name: "WORKS",
    link: "/works",
  },
  {
    name: "RESUME",
    link: PDF,
    target: "_blank",
  },
  {
    name: "CONTACT",
    link: "/contact",
  },
];

function NavSection() {
  return (
    <div id="nav-ul">
      {navItems.map(({ name, link, target }) => (
        <NavItem name={name} link={link} target={target} />
      ))}
    </div>
  );
}

export default NavSection;
