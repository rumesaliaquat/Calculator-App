var displayInInput = document.getElementById('inp');

function display(num){
    displayInInput.value += num; 
}

function cal(){
   displayInInput.value = eval(displayInInput.value);
}

function clearInpValue(){
    displayInInput.value = "";
}