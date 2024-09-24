document.querySelector("p").innerHTML = "Good bye";

function changeTitle(){
    document.getElementById('title').innerHTML = 'Google page';
}
function cal(){
    let r = document.getElementById('txt').value;
    let sum = r*3.14;
    document.getElementById('result').innerHTML = sum;
}