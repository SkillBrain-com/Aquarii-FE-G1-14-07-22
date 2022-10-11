class ToDoList {
  getButton() {
    return document.getElementById("task-button");
  }

  getInput() {
    return document.getElementById("task-input");
  }

  getList() {
    return document.querySelector(".tasks");
  }

  createTaskText(task) {
    return document.createTextNode(task);
  }

  createListItem() {
    return document.createElement("li");
  }

  createParagraph() {
    return document.createElement("p");
  }

  createDeleteButton(listItem) {
    const button = document.createElement("button");
    button.addEventListener("click", () => {
      listItem.remove();
    });

    button.classList.add("btn", "btn-default", "btn-xs");

    return button;
  }

  createIcon() {
    const icon = document.createElement("span");
    icon.classList.add("glyphicon", "glyphicon-trash");

    return icon;
  }

  addNewTask(task, list) {
    const taskText = this.createTaskText(task);
    const listItem = this.createListItem();
    const paragraph = this.createParagraph();
    const delButton = this.createDeleteButton(listItem);
    const icon = this.createIcon();

    paragraph.append(taskText);
    listItem.append(paragraph);
    delButton.append(icon);
    listItem.append(delButton);
    list.append(listItem);
  }

  onButtonClick() {
    const list = ToDoList.prototype.getList();
    const input = ToDoList.prototype.getInput();

    ToDoList.prototype.addNewTask(input.value, list);

    input.value = "";
  }

  init() {
    this.getButton().addEventListener("click", this.onButtonClick);
  }
}

const todoList = new ToDoList();

todoList.init();
