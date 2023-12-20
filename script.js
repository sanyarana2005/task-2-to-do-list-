function addTodo() {
    var todoText = document.getElementById("new-todo").value;
    if (todoText.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    var todoTable = document.getElementById("todo-list").getElementsByTagName('tbody')[0];
    var newRow = todoTable.insertRow();
    
    var checkboxCell = newRow.insertCell(0);
    var taskCell = newRow.insertCell(1);
    var actionCell = newRow.insertCell(2);

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkboxCell.appendChild(checkbox);

    taskCell.textContent = todoText;

    var deleteSpan = document.createElement("span");
    deleteSpan.innerHTML = "&#10006;";
    deleteSpan.onclick = function() {
        removeTodoRow(newRow);
    };
    actionCell.appendChild(deleteSpan);

    document.getElementById("new-todo").value = "";
}

function removeTodoRow(row) {
    var todoTable = document.getElementById("todo-list").getElementsByTagName('tbody')[0];
    todoTable.deleteRow(row.rowIndex);
}