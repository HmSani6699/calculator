
function calaulat(num) {
    const input = document.getElementById('inputText');
    input.value += num;
}

function deleteMe() {
    document.getElementById('inputText').value = '';
}

function result() {
    var a = document.getElementById('inputText').value;
    var b = eval(a);
    document.getElementById('inputText').value = b;
}