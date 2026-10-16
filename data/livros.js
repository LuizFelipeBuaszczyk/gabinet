const livros = [
  
];

/**
 * Retorna os livros cadastrados, ignorando itens sem slug (como o modelo vazio).
 *
 * @returns {typeof livros}
 */
export function getLivros() {
  return livros.filter((livro) => livro.slug);
}
