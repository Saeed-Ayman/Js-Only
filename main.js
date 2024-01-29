import { Footer } from "./footer.js";
import { Header } from "./header/header.js";
import { Landing } from "./landing/landing.js";

const body = document.body;

body.appendChild(Header());
body.appendChild(Landing());
body.appendChild(Footer());

body.style = `
  font-family: sans-serif;
  margin: 0;
`;
