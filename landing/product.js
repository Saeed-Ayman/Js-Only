export function Product(title, description) {
  const product = document.createElement("div");

  const productTitle = document.createElement("div");
  const productDescription = document.createElement("div");

  productTitle.textContent = title;
  productDescription.textContent = description;

  productTitle.style = `
    font-size: x-large;
    font-weight: bold;
  `;

  productDescription.style = `
    color: #646464;
    font-size: small;
    margin-top: 0.25rem
  `;

  product.appendChild(productTitle);
  product.appendChild(productDescription);

  product.style = `
    background-color: white;
    text-align: center;
    padding: 1.5rem 1rem;
  `;

  return product;
}
