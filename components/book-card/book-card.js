import { loadStylesheet } from "../load-stylesheet.js";
import { ReviewText } from "../review-text/review-text.js";

loadStylesheet(new URL("./book-card.css", import.meta.url));

/**
 * Card com os dados de um livro: capa, autor, páginas lidas, nota e resenha.
 *
 * @param {object} props
 * @param {string} props.slug Identificador do livro.
 * @param {string} props.title Título do livro.
 * @param {string} props.image Caminho da capa, relativo à raiz do projeto.
 * @param {string} props.author Autor do livro.
 * @param {{ total: number, read: number }} props.pages Páginas totais e lidas.
 * @param {string} props.review Resenha / avaliação.
 * @param {number | null} props.rating Nota de 0 a 10, ou null se ainda não avaliado.
 * @returns {HTMLElement}
 */
export function BookCard({ slug, title, image, author, pages, review, rating }) {
  const card = document.createElement("article");
  card.className = "book-card";
  card.dataset.book = slug;

  const cover = document.createElement("img");
  cover.className = "book-card__cover";
  cover.src = new URL(`../../${image}`, import.meta.url);
  cover.alt = title;
  cover.loading = "lazy";

  const body = document.createElement("div");
  body.className = "book-card__body";

  const heading = document.createElement("h3");
  heading.className = "book-card__title";
  heading.textContent = title;

  const authorLabel = document.createElement("p");
  authorLabel.className = "book-card__author";
  authorLabel.textContent = author;

  const progressLabel = document.createElement("p");
  progressLabel.className = "book-card__pages";
  progressLabel.textContent = `${pages.read} / ${pages.total} páginas`;

  const progress = document.createElement("progress");
  progress.className = "book-card__progress";
  progress.max = pages.total || 1;
  progress.value = pages.read;

  const score = document.createElement("p");
  score.className = "book-card__rating";
  score.textContent = rating === null ? "Sem nota" : `Nota: ${rating}/10`;

  body.append(heading, authorLabel, progressLabel, progress, score);

  if (review) {
    body.append(ReviewText({ text: review, className: "book-card__review" }));
  }

  card.append(cover, body);
  return card;
}
