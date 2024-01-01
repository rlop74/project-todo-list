function addToDo() {
    const getItem = document.getElementById("new-todo");
    const newItem = getItem.value;
    getItem.value = "";

    if (newItem.length <= 0) {
        alert("bat walang laman");
        skip;
    }

    const list = document.getElementById("list");
    const li = document.createElement("li");
    const addList = document.createTextNode(newItem);
    
    li.setAttribute("onclick", "this.remove()");

    li.appendChild(addList)
    list.appendChild(li);
    
}