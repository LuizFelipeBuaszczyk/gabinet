import { renderLayout } from "../layout.js";
import { GameCard } from "../../components/game-card/game-card.js";
import { getJogos } from "../../data/jogos.js";

renderLayout({ current: "jogos" });

const jogosList = document.getElementById("jogos-list");
const jogos = getJogos();

if (jogos.length === 0) {
  const empty = document.createElement("p");
  empty.className = "jogos-list__empty";
  empty.textContent = "Nenhum jogo cadastrado ainda.";
  jogosList.replaceWith(empty);
}

for (const jogo of jogos) {
  const item = document.createElement("li");
  item.append(GameCard(jogo));
  jogosList.append(item);
}
