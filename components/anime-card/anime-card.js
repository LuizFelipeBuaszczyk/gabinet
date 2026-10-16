const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = new URL("./anime-card.css", import.meta.url);
document.head.append(stylesheet);

/**
 * Card com os dados de um anime: capa, episódios, nota, resumo e resenha.
 *
 * @param {object} props
 * @param {string} props.slug Identificador do anime.
 * @param {string} props.title Título do anime.
 * @param {string} props.image Caminho da capa, relativo à raiz do projeto.
 * @param {{ total: number, watched: number }} props.episodes Episódios totais e assistidos.
 * @param {string} props.review Resenha / avaliação.
 * @param {number | null} props.rating Nota de 0 a 10, ou null se ainda não avaliado.
 * @returns {HTMLElement}
 */
export function AnimeCard({ slug, title, image, episodes, review, rating }) {
  const card = document.createElement("article");
  card.className = "anime-card";
  card.dataset.anime = slug;

  const cover = document.createElement("img");
  cover.className = "anime-card__cover";
  cover.src = new URL(`../../${image}`, import.meta.url);
  cover.alt = title;
  cover.width = 200;
  cover.height = 400;
  cover.loading = "lazy";

  const body = document.createElement("div");
  body.className = "anime-card__body";

  const heading = document.createElement("h3");
  heading.className = "anime-card__title";
  heading.textContent = title;

  const progressLabel = document.createElement("p");
  progressLabel.className = "anime-card__episodes";
  progressLabel.textContent = `${episodes.watched} / ${episodes.total} episódios`;

  const progress = document.createElement("progress");
  progress.className = "anime-card__progress";
  progress.max = episodes.total || 1;
  progress.value = episodes.watched;

  const score = document.createElement("p");
  score.className = "anime-card__rating";
  score.textContent = rating === null ? "Sem nota" : `Nota: ${rating}/10`;

  body.append(heading, progressLabel, progress, score);

  if (review) {
    const reviewText = document.createElement("p");
    reviewText.className = "anime-card__review";
    reviewText.textContent = review;
    body.append(reviewText);
  }

  card.append(cover, body);
  return card;
}
