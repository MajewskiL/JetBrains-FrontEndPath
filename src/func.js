function turn(state) {
    let inputs = document.getElementsByTagName('input');
    let a;
    for (a in inputs) {
        if (inputs[a].type === "range" || inputs[a].type === "checkbox" || inputs[a].id === "launch") {
            inputs[a].disabled = state;
            }
        if ((inputs[a].id === "launch" || inputs[a].id === "input-pass" || inputs[a].id === "push_ok") && !state) {
            inputs[a].disabled = !state;
        }
    }
}

function count() {
    let inputs = Array.from(document.getElementsByTagName('input'));
    let a;
    let cnt = 0;
    for (a in inputs) {
        if ((inputs[a].type === "checkbox" && inputs[a].checked) || (inputs[a].type === "range" && inputs[a].value === "100")) {
            cnt = cnt + 1;
        }
        }
    if (cnt === 1) {
        let launch_button = document.getElementById('launch');
        launch_button.disabled = false;
        launch_button.style.background = "red";
        launch_button.style.color = "white";
    }
    return false;
}

function go() {

    let rocket = document.getElementById('rocket');
    console.log(rocket.style.transform)
    console.log(rocket.style.transform)
    console.log(rocket.style.left)
}


turn(true);

let ok_button = document.getElementById('push_ok');
ok_button.addEventListener("click",function (e) {
    let add_text = document.getElementById("input-pass").value;
    if (add_text === "TrustNo1") {
        turn(false);
    }
});
