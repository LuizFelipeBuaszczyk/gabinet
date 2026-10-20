const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = new URL("./review-text.css", import.meta.url);
document.head.append(stylesheet);

/**
 * Texto de resenha que é recolhido quando passa do limite de caracteres,
 * com um botão para mostrar o texto completo.
 *
 * @param {object} props
 * @param {string} props.text Texto da resenha.
 * @param {string} [props.className] Classe extra aplicada ao container.
 * @param {number} [props.limit] Quantidade máxima de caracteres exibidos antes de recolher.
 * @returns {HTMLElement}
 */
export function ReviewText({ text, className = "", limit = 280 }) {
  const container = document.createElement("div");
  container.className = `review-text ${className}`.trim();

  const content = document.createElement("p");
  content.className = "review-text__content";
  content.textContent = text;
  container.append(content);

  if (text.length <= limit) return container;

  const cut = text.slice(0, limit);
  const lastSpace = cut.lastIndexOf(" ");
  const preview = `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "review-text__toggle";

  let expanded = false;
  const render = () => {
    content.textContent = expanded ? text : preview;
    toggle.textContent = expanded ? "Ler menos" : "Ler mais";
    toggle.setAttribute("aria-expanded", String(expanded));
  };

  toggle.addEventListener("click", () => {
    expanded = !expanded;
    render();
  });

  render();
  container.append(toggle);
  return container;
}
