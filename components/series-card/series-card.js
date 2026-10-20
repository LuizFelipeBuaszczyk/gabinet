import { ReviewText } from "../review-text/review-text.js";

const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = new URL("./series-card.css", import.meta.url);
document.head.append(stylesheet);

/**
 * Card com os dados de uma série: capa, temporadas, episódios, nota e resenha.
 *
 * @param {object} props
 * @param {string} props.slug Identificador da série.
 * @param {string} props.title Título da série.
 * @param {string} props.image Caminho da capa, relativo à raiz do projeto.
 * @param {number} props.seasons Quantidade de temporadas.
 * @param {{ total: number, watched: number }} props.episodes Episódios totais e assistidos.
 * @param {string} props.review Resenha / avaliação.
 * @param {number | null} props.rating Nota de 0 a 10, ou null se ainda não avaliada.
 * @returns {HTMLElement}
 */
export function SeriesCard({ slug, title, image, seasons, episodes, review, rating }) {
  const card = document.createElement("article");
  card.className = "series-card";
  card.dataset.series = slug;

  const cover = document.createElement("img");
  cover.className = "series-card__cover";
  cover.src = new URL(`../../${image}`, import.meta.url);
  cover.alt = title;
  cover.loading = "lazy";

  const body = document.createElement("div");
  body.className = "series-card__body";

  const heading = document.createElement("h3");
  heading.className = "series-card__title";
  heading.textContent = title;

  const seasonsLabel = document.createElement("p");
  seasonsLabel.className = "series-card__seasons";
  seasonsLabel.textContent = `${seasons} ${seasons === 1 ? "temporada" : "temporadas"}`;

  const progressLabel = document.createElement("p");
  progressLabel.className = "series-card__episodes";
  progressLabel.textContent = `${episodes.watched} / ${episodes.total} episódios`;

  const progress = document.createElement("progress");
  progress.className = "series-card__progress";
  progress.max = episodes.total || 1;
  progress.value = episodes.watched;

  const score = document.createElement("p");
  score.className = "series-card__rating";
  score.textContent = rating === null ? "Sem nota" : `Nota: ${rating}/10`;

  body.append(heading, seasonsLabel, progressLabel, progress, score);

  if (review) {
    body.append(ReviewText({ text: review, className: "series-card__review" }));
  }

  card.append(cover, body);
  return card;
}
