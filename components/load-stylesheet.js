const pending = [];

/**
 * Adiciona uma folha de estilo ao <head> e registra o seu carregamento,
 * para que a página só seja exibida depois que todos os estilos chegarem.
 *
 * @param {string | URL} href Endereço do arquivo CSS.
 */
export function loadStylesheet(href) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = href;

  // Um CSS que falha não pode travar a exibição da página.
  pending.push(
    new Promise((resolve) => {
      stylesheet.addEventListener("load", resolve, { once: true });
      stylesheet.addEventListener("error", resolve, { once: true });
    })
  );

  document.head.append(stylesheet);
}

/**
 * Resolve quando todas as folhas de estilo registradas terminaram de carregar.
 *
 * @returns {Promise<void>}
 */
export function stylesReady() {
  return Promise.all(pending).then(() => {});
}
