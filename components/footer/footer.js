/**
 * Rodapé do site.
 *
 * @returns {HTMLElement}
 */
export function Footer() {
  const footer = document.createElement("footer");

  const text = document.createElement("p");
  text.textContent = "Gabinet - backlog pessoal de livros, séries, animes e jogos.";

  footer.append(text);
  return footer;
}
