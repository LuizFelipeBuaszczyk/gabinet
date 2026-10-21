import { renderLayout } from "../layout.js";
import { CategoryCard } from "../../components/category-card/category-card.js";
import categories from "../../data/categories.json" with { type: "json" };

renderLayout();

const categoryList = document.getElementById("category-list");

for (const { slug, name } of categories) {
  const item = document.createElement("li");
  item.append(CategoryCard({ slug, name }));
  categoryList.append(item);
}
