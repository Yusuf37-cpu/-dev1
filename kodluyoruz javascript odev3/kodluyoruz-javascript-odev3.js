const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 12.99,
    img:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&q=80",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion, sesame.`,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=500&q=80",
    desc: `Boiled vegetables, served with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500&q=80",
    desc: `Dan dan noodle, serving with green onion`,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80",
    desc: `Yangzhou style fried rice, serving with bean and pickles`,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=500&q=80",
    desc: `Rice Sandwich, servinng with seasoned meat`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&q=80",
    desc: `Black bean sauce noodle, serving with green onion`,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&q=80",
    desc: `Spicy minced pork ramen, served with green onion`,
  },
  {
    id: 9,
    title: "Dorayaki",
    category: "Japan",
    price: 3.99,
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const btnContainer = document.querySelector(".btn-container");
const sectionCenter = document.querySelector(".section-center");

const categories = ["All", ...new Set(menu.map((item) => item.category))];

function createButtons() {
  const categoryBtns = categories
  .map((category) => {
    return `<button class = "btn btn-item" data-id = "${category}"> ${category}</button>`;
  })
  .join("");

  btnContainer.innerHTML = categoryBtns;

  const filterBtns = btnContainer.querySelectorAll(".btn-item");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const categoryName = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => menuItem.category === categoryName);

      if (categoryName === "All") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

function displayMenuItems (menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `
<div class="menu-items col-lg-6 col-sm-12">
        <img src="${item.img}" alt="${item.title}" class="photo" />
        <div class="menu-info">
          <div class="menu-title">
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </div>
          <div class="menu-text">
            ${item.desc}
          </div>
        </div>
      </div>
    `;
  });
  
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

createButtons();
displayMenuItems(menu);
