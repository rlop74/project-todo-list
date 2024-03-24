function addToDo() {
    const getItem = document.getElementById("new-todo");
    const newItem = getItem.value;
    const list = document.getElementById("list");
    const li = document.createElement("li");
    const addList = document.createTextNode(newItem);
    
    // prompt error if input field is empty
    if (newItem.length <= 0) {
        alert("bat walang laman");
        skip;
    }

    // clear input field
    getItem.value = "";
    
    // add text content to li tag
    li.appendChild(addList);
    list.appendChild(li);

    // remove li when clicked
    li.setAttribute("onclick", "this.remove()");

}