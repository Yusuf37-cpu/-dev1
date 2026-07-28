const taskInput = document.getElementById("task");
const addBtn = document.getElementById("liveToastBtn");
const listUl = document.getElementById("list");

const existingItems = listUl.getElementsByTagName("LI");
for (let i = 0; i < existingItems.length; i++) {
  addCloseButton(existingItems[i]);
}

listUl.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

addBtn.addEventListener("click", newElement);

function newElement() {
  const inputValue = taskInput.value.trim();

  if (inputValue === "") {
    alert("Listeye boş ekleme yapamazsınız!");
    return;
  }
  const li = document.createElement("li");
  li.textContent = inputValue;


  addCloseButton(li);
  listUl.appendChild(li);
  taskInput.value = "";
}

function addCloseButton(liElement) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7"); 
  span.className = "close";
  span.appendChild(txt);
  liElement.appendChild(span);


  span.onclick = function (e) {
    e.stopPropagation();
    const div = this.parentElement;
    div.remove();
  };
}