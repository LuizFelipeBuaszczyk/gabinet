import { loadStylesheet } from "../load-stylesheet.js";
import categories from "../../data/categories.json" with { type: "json" };

loadStylesheet(new URL("./header.css", import.meta.url));

/**
 * Cabeçalho do site com o link para o início e a navegação principal.
 * Os links são relativos à pasta de uma página dentro de pages/.
 *
 * @param {object} [props]
 * @param {string} [props.current] Slug da categoria da página atual.
 * @returns {HTMLElement}
 */
export function Header({ current } = {}) {
  const header = document.createElement("header");
  header.className = "header";

  const inner = document.createElement("div");
  inner.className = "header__inner";

  const homeLink = document.createElement("a");
  homeLink.className = "header__home";
  homeLink.href = "../home/home.html";
  homeLink.textContent = "Gabinet";

  const nav = document.createElement("nav");
  nav.className = "header__nav";
  nav.setAttribute("aria-label", "Principal");

  const list = document.createElement("ul");
  list.className = "header__list";

  for (const { slug, name } of categories) {
    const item = document.createElement("li");

    const link = document.createElement("a");
    link.className = "header__link";
    link.href = `../${slug}/${slug}.html`;
    link.textContent = name;

    if (slug === current) {
      link.setAttribute("aria-current", "page");
    }

    item.append(link);
    list.append(item);
  }

  nav.append(list);
  inner.append(homeLink, nav);
  header.append(inner);
  return header;
}
