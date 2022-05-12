const wrapperMenu = document.querySelector('.wrapperMenu');
const menuItems = document.querySelector('.menu_items');

wrapperMenu.addEventListener("click", () => {
    wrapperMenu.classList.toggle('active');
    menuItems.classList.toggle('active');
})

document.querySelectorAll(".item").forEach(n => n. addEventListener("click", () => {
    wrapperMenu.classList.remove("active");
    menuItems.classList.remove("active");
} ))
