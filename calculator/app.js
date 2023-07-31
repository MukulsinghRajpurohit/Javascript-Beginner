let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById('display').value = "";
}

function calculateResult() {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
   
}
