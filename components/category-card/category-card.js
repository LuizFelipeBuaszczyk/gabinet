const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = new URL("./category-card.css", import.meta.url);
document.head.append(stylesheet);

/**
 * Card com link para a página de uma categoria.
 * O link é relativo à pasta pages/, onde ficam todas as páginas.
 *
 * @param {object} props
 * @param {string} props.slug Identificador da categoria (ex.: "livros").
 * @param {string} props.name Nome da categoria (ex.: "Livros").
 * @returns {HTMLElement}
 */
export function CategoryCard({ slug, name }) {
  const link = document.createElement("a");
  link.className = "category-card";
  link.href = `${slug}.html`;
  link.dataset.category = slug;

  const title = document.createElement("h3");
  title.className = "category-card__title";
  title.textContent = name;

  const cta = document.createElement("span");
  cta.className = "category-card__cta";
  cta.textContent = `Ver ${name.toLowerCase()} →`;

  link.append(title, cta);
  return link;
}
