const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = new URL("./game-card.css", import.meta.url);
document.head.append(stylesheet);

/**
 * Card com os dados de um jogo: capa, plataforma, horas jogadas, nota e resenha.
 *
 * @param {object} props
 * @param {string} props.slug Identificador do jogo.
 * @param {string} props.title Título do jogo.
 * @param {string} props.image Caminho da capa, relativo à raiz do projeto.
 * @param {string} props.platform Plataforma em que foi jogado.
 * @param {number} props.hours Quantidade de horas jogadas.
 * @param {string} props.review Resenha / avaliação.
 * @param {number | null} props.rating Nota de 0 a 10, ou null se ainda não avaliado.
 * @returns {HTMLElement}
 */
export function GameCard({ slug, title, image, platform, hours, review, rating }) {
  const card = document.createElement("article");
  card.className = "game-card";
  card.dataset.game = slug;

  const cover = document.createElement("img");
  cover.className = "game-card__cover";
  cover.src = new URL(`../../${image}`, import.meta.url);
  cover.alt = title;
  cover.loading = "lazy";

  const body = document.createElement("div");
  body.className = "game-card__body";

  const heading = document.createElement("h3");
  heading.className = "game-card__title";
  heading.textContent = title;

  const platformLabel = document.createElement("p");
  platformLabel.className = "game-card__platform";
  platformLabel.textContent = platform;

  const hoursLabel = document.createElement("p");
  hoursLabel.className = "game-card__hours";
  hoursLabel.textContent = `${hours} ${hours === 1 ? "hora" : "horas"} jogadas`;

  const score = document.createElement("p");
  score.className = "game-card__rating";
  score.textContent = rating === null ? "Sem nota" : `Nota: ${rating}/10`;

  body.append(heading, platformLabel, hoursLabel, score);

  if (review) {
    const reviewText = document.createElement("p");
    reviewText.className = "game-card__review";
    reviewText.textContent = review;
    body.append(reviewText);
  }

  card.append(cover, body);
  return card;
}
