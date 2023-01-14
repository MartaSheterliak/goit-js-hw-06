const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

const navItems = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.classList.add('nav-link');
  listItem.textContent = ingredient;
  return listItem;
});

listEl.append(...navItems);
