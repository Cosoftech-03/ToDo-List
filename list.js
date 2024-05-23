const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

function addTask() {

  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML ="\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);


function saveData(){
    localStorage.setItem("Data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("Data");
}
showTask();




function moveSelectedItemsToEnd() {
    // Get the list container
    const listContainer = document.getElementById('todoList');

    // Get all list items
    const listItems = Array.from(listContainer.getElementsByTagName('LI'));

    // Loop through the list items in reverse to safely remove items while iterating
    for (let i = listItems.length - 1; i >= 0; i--) {
        const item = listItems[i];
        // Check if the item is selected (has the 'checked' class)
        if (item.classList.contains('checked')) {
            // Remove the item from its current position
            listContainer.removeChild(item);
            // Append the item to the end of the list
            listContainer.appendChild(item);
        }
    }
}

// Example usage: Add a button click event to move selected items to end
document.getElementById('moveButton').addEventListener('click', moveSelectedItemsToEnd);
