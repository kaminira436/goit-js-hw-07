const categories = document.querySelectorAll("#categories .item");

// Кількість категорій
console.log(`Number of categories: ${categories.length}`);

// Для кожної категорії
categories.forEach(category => {
  const title = category.querySelector("h2").textContent;
  const items = category.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${items}`);
});