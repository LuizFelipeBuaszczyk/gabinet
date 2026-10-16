import { renderLayout } from "../layout.js";
import { AnimeCard } from "../../components/anime-card/anime-card.js";
import { getAnimes } from "../../data/animes.js";

renderLayout({ current: "animes" });

const animeList = document.getElementById("anime-list");
const animes = getAnimes();

if (animes.length === 0) {
  const empty = document.createElement("p");
  empty.className = "anime-list__empty";
  empty.textContent = "Nenhum anime cadastrado ainda.";
  animeList.replaceWith(empty);
}

for (const anime of animes) {
  const item = document.createElement("li");
  item.append(AnimeCard(anime));
  animeList.append(item);
}
