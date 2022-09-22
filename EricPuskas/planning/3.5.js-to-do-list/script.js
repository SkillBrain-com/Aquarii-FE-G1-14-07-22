console.log("TEST");

const input = document.getElementById("task-input");
const button = document.getElementById("task-button");

const onButtonClick = () => {
  const list = document.querySelector(".tasks");
  const task = document.createTextNode(input.value);
  const listItem = document.createElement("li");
  const paragraph = document.createElement("p");
  const delButton = document.createElement("button");
  const icon = document.createElement("span");

  delButton.addEventListener("click", () => {
    console.log(listItem);
    listItem.remove();
  });

  icon.classList.add("glyphicon", "glyphicon-trash");
  delButton.classList.add("btn", "btn-default", "btn-xs");

  paragraph.append(task);
  listItem.append(paragraph);

  delButton.append(icon);
  listItem.append(delButton);

  list.append(listItem);

  input.value = "";
  console.log("Button clicked:", input.value);
};

button.addEventListener("click", onButtonClick);
