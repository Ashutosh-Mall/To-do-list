const input = document.getElementById("inp");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("list");
addBtn.addEventListener("click", () => {
  const task = input.value.trim();
    if (task === "") {
    alert("Please enter a task!");
    return;
  }
  let item = document.createElement("li");
  item.innerText = task;
  list.appendChild(item);
  input.value = "";

  let delbtn = document.createElement("button")
  delbtn.innerText = "delete";
  item.appendChild(delbtn);
});

list.addEventListener("click", function (event) {
    if(event.target.nodeName==="BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
    }    
});

  
 