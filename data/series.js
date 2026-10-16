const series = [
  {
    slug: "breaking-bad",
    title: "Breaking Bad",
    image: "data/images/series/breaking_bad.webp",
    seasons: 5,
    episodes: { total: 62, watched: 62 },
    review: "Sempre ouvi muita gente falando bem de Breaking bad, porém nunca tinha assistido de fato. Breaking Bad é uma série que é boa desde o começo até o fim (principalmente o fim), ela com toda a certeza merece o seu tempo.",
    rating: 10,
  },
];

/**
 * Retorna as séries cadastradas, ignorando itens sem slug (como o modelo vazio).
 *
 * @returns {typeof series}
 */
export function getSeries() {
  return series.filter((serie) => serie.slug);
}
