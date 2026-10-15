/**
 * Card com link para a página de uma categoria.
 *
 * @param {object} props
 * @param {string} props.name Nome da categoria (ex.: "Livros").
 * @param {string} props.href Link para a página da categoria.
 * @returns {HTMLElement}
 */
export function CategoryCard({ name, href }) {
  const link = document.createElement("a");
  link.href = href;

  const title = document.createElement("h3");
  title.textContent = name;

  const cta = document.createElement("span");
  cta.textContent = `Ver ${name.toLowerCase()} →`;

  link.append(title, cta);
  return link;
}
