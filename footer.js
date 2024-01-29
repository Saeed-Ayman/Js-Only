export function Footer() {
  const footer = document.createElement("div");

  footer.textContent = "Copyright 2024";

  footer.style = `
    color: white;
    background-color: #23a96e;
    padding: 1rem;
    text-align: center;
  `;

  return footer;
}
