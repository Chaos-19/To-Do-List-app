const addItemBtn = document.querySelector('#add-item');
const itemsList = document.querySelector('.item-list');

const items = JSON.parse(localStorage.getItem('todoList')) || [];


function addItem(e) {
  const input = document.querySelector('#input');

  if (input.value) {

    const item = {
      taskName: input.value,
      taskStatus: "Ongoing"
    }
    items.push(item)
    populateTasks();
    localStorage.setItem("todoList", JSON.stringify(items));
    input.value = '';
  }
}

function populateTasks() {
  itemsList.innerHTML = '';

  items.forEach((taskObj, index) => {
    const liElement = ` 
    <li class="list-item d-flex gap-5 my-3 justify-content-between align-items-center p-2 py-3 border rounded shadow">
     <div class="content fs-3">${taskObj.taskName}</div>
     <div class="input d-flex gap-3">
      <input type="checkbox" name="status" id="status" class="form-check" />
      <button class="btn" type="button">
        <img src="/trash.svg" alt="trash icon">
      </button>
    </div>
  </li>
  `

    const parser = new DOMParser();
    const listItemNode = parser.parseFromString(liElement, "text/html").body;

    listItemNode.querySelector('.btn').addEventListener('click', function(e) {
      listItemNode.remove();
      items.splice(index, 1);
      localStorage.setItem("todoList", JSON.stringify(items));
    });

    const status = listItemNode.querySelector('#status');

    status.addEventListener('CheckboxStateChange', function(e) {

      if (e.target.checked == true ) {
        listItemNode.querySelector('.content').style.textDecoration = "light-throught"
      } else {

      }
    console.log("checked .....");

    });


    return itemsList.appendChild(listItemNode);
  });

}


addItemBtn.addEventListener('click', addItem);
document.body.addEventListener('keypress', addItem);

document.addEventListener('DOMContentLoaded', () => { return populateTasks(items); });