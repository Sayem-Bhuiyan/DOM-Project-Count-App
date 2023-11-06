let countNumber = document.getElementById('number');

const buttno1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');

let value = countNumber.innerText;

// adding event listener
buttno1.addEventListener('click', function(){
    value++;
    countNumber.innerText  = value;
})

button2.addEventListener('click', function(){
    value--;
    countNumber.innerText = value;
})