const links = document.querySelectorAll(".nav-link");

for (let link of links) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("click");
    const nav = document.querySelector(".nav");
    const activeLink = nav.querySelector(".nav-link.selected");

    activeLink.classList.remove("selected");
    link.classList.add("selected");
  });
}
