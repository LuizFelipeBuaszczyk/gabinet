import { Header } from "../components/header/header.js";
import { Footer } from "../components/footer/footer.js";

/**
 * Monta a estrutura compartilhada por todas as páginas: header e footer.
 * Substitui os elementos #header e #footer do HTML da página.
 *
 * @param {object} [props]
 * @param {string} [props.current] Slug da categoria da página atual.
 */
export function renderLayout({ current } = {}) {
  document.getElementById("header").replaceWith(Header({ current }));
  document.getElementById("footer").replaceWith(Footer());
}
