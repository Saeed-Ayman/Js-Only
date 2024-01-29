import { Logo } from "./logo.js";
import { Navbar } from "./navbar.js";

export function Header() {
  const header = document.createElement("header");

  header.appendChild(Logo("Products"));
  header.appendChild(
    Navbar([
      { content: "home", dir: "/" },
      "about",
      { content: "service", dir: "https://www.google.com", blank: true },
      "contact",
    ])
  );

  header.style = `
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1rem;
  `;

  return header;
}
