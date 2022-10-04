const button = document.querySelector(".my-Button");
const buttons = document.querySelectorAll("#wow .my-div button");

const container = document.querySelector(".my-div");
// console.log(button.textContent);
// console.log(buttons);

for (let button of buttons) {
  // if (button.hasAttribute("class")) {
  //   const className = button.getAttribute("class"); // my-Button(1), big-button(2)
  //   if (className === "big-button") {
  //     button.classList.remove("big-button");
  //     button.removeAttribute("class");
  //   }

  //   console.log(className);
  // }

  if (button.classList.contains("big-button")) {
    // button.classList.remove("big-button");
    button.removeAttribute("class");
  }

  // if (button.matches(".big-button")) {
  //   button.classList.remove("big-button");
  //   button.removeAttribute("class");
  // }
}

// <button> Click me! Javascript</button>
const newButton = document.createElement("button");
newButton.textContent = "Click me! JavaScript";
newButton.setAttribute("id", "please-do-not-delete-me");
newButton.addEventListener("click", () => {
  for (let button of buttons) {
    if (button.id !== "please-do-not-delete-me") {
      button.remove();
    }
  }
});

// container.append(newButton);

const list = document.querySelectorAll(".nav-item");

for (let listItem of list) {
  listItem.addEventListener("click", () => {
    // <li class="active"
    const activeListItem = document.querySelector(".nav-item.active");
    activeListItem.classList.remove("active");

    if (!listItem.classList.contains("active")) {
      listItem.classList.add("active");

      const tab = listItem.getAttribute("tab-name");

      console.log({ tab });

      if (tab === "to-do") {
        const toDopanel = document.querySelector(".to-do-panel");
        const donePanel = document.querySelector(".done-panel");

        toDopanel.style.display = "block";
        donePanel.style.display = "none";
      }

      if (tab === "done") {
        const toDopanel = document.querySelector(".to-do-panel");
        const donePanel = document.querySelector(".done-panel");

        toDopanel.style.display = "none";
        donePanel.style.display = "block";
      }
    }
  });
}

console.log(list);
