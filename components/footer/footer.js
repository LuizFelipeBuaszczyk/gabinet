const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = new URL("./footer.css", import.meta.url);
document.head.append(stylesheet);

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
