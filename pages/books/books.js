import { renderLayout } from "../layout.js";
import { BookCard } from "../../components/book-card/book-card.js";
import { getLivros } from "../../data/livros.js";

renderLayout({ current: "livros" });

const livrosList = document.getElementById("livros-list");
const livros = getLivros();

if (livros.length === 0) {
  const empty = document.createElement("p");
  empty.className = "livros-list__empty";
  empty.textContent = "Nenhum livro cadastrado ainda.";
  livrosList.replaceWith(empty);
}

for (const livro of livros) {
  const item = document.createElement("li");
  item.append(BookCard(livro));
  livrosList.append(item);
}
