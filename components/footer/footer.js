import { loadStylesheet } from "../load-stylesheet.js";

loadStylesheet(new URL("./footer.css", import.meta.url));

/**
 * Rodapé do site.
 *
 * @returns {HTMLElement}
 */
export function Footer() {
  const footer = document.createElement("footer");
  footer.className = "footer";

  const text = document.createElement("p");
  text.className = "footer__text";
  text.textContent = "Gabinet - backlog pessoal de livros, séries, animes e jogos.";

  footer.append(text);
  return footer;
}
