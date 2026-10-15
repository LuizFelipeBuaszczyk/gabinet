import { categories } from "../../data/categories.js";

/**
 * Cabeçalho do site com o link para o início e a navegação principal.
 *
 * @param {object} [props]
 * @param {string} [props.basePath] Caminho até a raiz do site ("" na raiz, "../" em pages/).
 * @param {string} [props.current] Slug da categoria da página atual.
 * @returns {HTMLElement}
 */
export function Header({ basePath = "", current } = {}) {
  const header = document.createElement("header");

  const homeLink = document.createElement("a");
  homeLink.href = `${basePath}index.html`;
  homeLink.textContent = "Gabinet";

  const nav = document.createElement("nav");
  nav.setAttribute("aria-label", "Principal");

  const list = document.createElement("ul");

  for (const { slug, name } of categories) {
    const item = document.createElement("li");

    const link = document.createElement("a");
    link.href = `${basePath}pages/${slug}.html`;
    link.textContent = name;

    if (slug === current) {
      link.setAttribute("aria-current", "page");
    }

    item.append(link);
    list.append(item);
  }

  nav.append(list);
  header.append(homeLink, nav);
  return header;
}
