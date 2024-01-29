export function NavLink(content, dir = "#", blank = false) {
  const navLink = document.createElement("a");

  navLink.href = dir;
  navLink.textContent = content;

  if (blank) {
    navLink.setAttribute("target", "_blank");
  }

  navLink.style = `
    color: #646464;
    text-decoration: none;
    font-size: small;
  `;

  return navLink;
}
