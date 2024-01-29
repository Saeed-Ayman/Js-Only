import { Product } from "./product.js";

export function Landing() {
  const landing = document.createElement("main");

  for (let i = 0; i < 15; i++) {
    landing.appendChild(Product(i + 1, "Product"));
  }

  landing.style = `
    background-color: #ececec;
    padding: 1rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
  `;

  return landing;
}
