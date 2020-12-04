function allowDropThis(i) {

    i.preventDefault();

}

function dragThis(i) {

    i.dataTransfer.setData("obj", i.target.id);

}

function dropThis(i) {

    i.preventDefault();

    var data = i.dataTransfer.getData("obj");

    i.target.appendChild(document.getElementById(data));

}