import { NavLink } from "./navLink.js";

export function Navbar(links) {
  const navbar = document.createElement("div");

  links.forEach((link) => {
    if (typeof link === typeof "") navbar.append(NavLink(link));
    else navbar.append(NavLink(link.content, link.dir, link.blank));
  });

  navbar.style = `
    display: flex;
    gap: 1rem;
    text-transform: capitalize;
  `;

  return navbar;
}
