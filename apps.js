const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".list-item");
  const listItem = document.querySelectorAll(".list-item li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-open");

    //Animate Links
    listItem.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navFade 0.5s ease forwards ${index / 5 + 0.5}s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("btn");
  });
};

navSlide();
