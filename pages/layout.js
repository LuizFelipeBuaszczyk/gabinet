import { Header } from "../components/header/header.js";
import { Footer } from "../components/footer/footer.js";
import { stylesReady } from "../components/load-stylesheet.js";

// Tempo máximo que a página fica oculta esperando os estilos.
const REVEAL_TIMEOUT = 3000;

/**
 * Monta a estrutura compartilhada por todas as páginas: header e footer.
 * Substitui os elementos #header e #footer do HTML da página e só exibe
 * a página depois que os estilos de todos os componentes carregarem.
 *
 * @param {object} [props]
 * @param {string} [props.current] Slug da categoria da página atual.
 */
export function renderLayout({ current } = {}) {
  document.getElementById("header").replaceWith(Header({ current }));
  document.getElementById("footer").replaceWith(Footer());

  const reveal = () => document.documentElement.classList.remove("is-loading");
  stylesReady().then(reveal);
  setTimeout(reveal, REVEAL_TIMEOUT);
}
