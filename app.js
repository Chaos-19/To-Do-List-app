const addItemBtn = document.querySelector('#add-item');
const itemsList = document.querySelector('.item-list');

const items = JSON.parse(localStorage.getItem('items')) || [];


function addItem() {
  const input = document.querySelector('#input');

  if (input.value) {

    const item = {
      taskName: input.value,
      taskStatus: "Ongoing"
    }
    items.push(item)
    localStorage.setItem("todoList", JSON.stringify(items));
    input.value = '';
  }
}

addItemBtn.addEventListener('click', addItem);
document.body.addEventListener('keypress', addItem);