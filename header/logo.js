export function Logo(content, dir = "/") {
  const logo = document.createElement("a");

  logo.href = dir;
  logo.textContent = content;

  logo.style = `
    font-weight: bold;
    font-size: x-large;
    color: #23a96e;
    text-decoration: none;
  `;

  return logo;
}
