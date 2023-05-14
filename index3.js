function addTaskFunction(){

    var taskTexted = document.getElementById("txttask").value;
    var table = document.getElementById("todo-table");
    var row1 = document.createElement("tr");
    const col1 =document.createElement("td")
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    document.getElementById("txttask").value ="";
    col1.classList.add('strikeThroughClass');
    col1.innerHTML =taskTexted;
    col2.innerHTML ='<input type="submit" value="Done Task">'
    var removeButton = document.createElement("input");
    removeButton.seAttribute('type','button');
    removeButton.seAttribute('value','Remobe Task');
    removeButton.seAttribute('onclick','removeRow(this)');
    col3.appendChild(removeButton);

    row1.appendChild(col1);
    row1.appendChild(col2);
    row1.appendChild(col3);
    table.appendChild(row1);



col2.addEventListner('click',()=> {
    col1.classList.toggle('strikeThroughDone');
})
function removeRow(oButton){
    var empTab = todo.getElementById('todo-table');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);
}

    
    
}