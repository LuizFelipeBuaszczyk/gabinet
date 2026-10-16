import { renderLayout } from "../layout.js";
import { SeriesCard } from "../../components/series-card/series-card.js";
import { getSeries } from "../../data/series.js";

renderLayout({ current: "series" });

const seriesList = document.getElementById("series-list");
const series = getSeries();

if (series.length === 0) {
  const empty = document.createElement("p");
  empty.className = "series-list__empty";
  empty.textContent = "Nenhuma série cadastrada ainda.";
  seriesList.replaceWith(empty);
}

for (const serie of series) {
  const item = document.createElement("li");
  item.append(SeriesCard(serie));
  seriesList.append(item);
}
