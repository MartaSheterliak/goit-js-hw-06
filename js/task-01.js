const categoryList = document.querySelectorAll("#categories .item");

console.log(`Namber of categories: ${categoryList.length}`);

categoryList.forEach((element) => {
    console.log(`Category: ${element.querySelector("h2").textContent}`);
    console.log(`Elements: ${element.querySelectorAll("h2 + ul > li").length}`); 
});