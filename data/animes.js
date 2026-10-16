const animes = [
  {
    slug: "aot",
    title: "Attack on Titan",
    image: "data/images/animes/aot.webp",
    episodes: { total: 97, watched: 97 },
    review: "Attack on Titan é o melhor anime que já assisti. Antes dele, eu realmente não gostava de animes e achava que nunca gostaria de fato. Porém, AOT provou o contrário! Para ter uma ideia, cheguei a assistir 50 episódios em 1 final de semana.",
    rating: 10,
  },
];

/**
 * Retorna os animes cadastrados, ignorando itens sem slug (como o modelo vazio).
 *
 * @returns {typeof animes}
 */
export function getAnimes() {
  return animes.filter((anime) => anime.slug);
}

