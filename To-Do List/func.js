// create <li> tag with content
function add_li(todos, classes) {
    let ul = document.getElementById("task-list");
    let li = document.createElement("li");
    // input
    let lbl = document.createElement("label");
    let inp = document.createElement("input");
    inp.type="checkbox";
    inp.addEventListener('click', function (e) {
        e.currentTarget.parentNode.parentNode.querySelector('span').classList.toggle('line_thr');
    }, false);
    lbl.appendChild(inp)
    // span
    let spn = document.createElement("span");
    spn.appendChild(document.createTextNode(todos));
    document.getElementById("input-task").value = "";
    spn.className=classes;
    // button
    let but = document.createElement("button");
    but.type = "submit";
    but.className = "delete-btn";
    but.textContent = "X";
    but.addEventListener('click', function (e) {
        e.currentTarget.parentNode.remove();
    }, false);

    li.appendChild(lbl);
    li.appendChild(spn);
    li.appendChild(but);
    ul.appendChild(li);

}

// read form localStorage and create <li> tags
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
for (let i = 0; i < taskList.length; i++) {
    add_li(taskList[i][0],taskList[i][1]);
    }

// push the button to add todos, and write it to localStorage
let add_button = document.getElementById('add-task-button');
add_button.addEventListener("click",function (e) {
    let add_text = document.getElementById("input-task").value;
    add_li(add_text, "task");
    taskList.push([add_text, "task"]);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    });