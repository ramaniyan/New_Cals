function displayvalue(val) {
    document.getElementById("calc").value += val;
}
function clearDisplay() {
    document.getElementById("calc").value = "";
}

function calculateResult() {
        {
        document.getElementById("calc").value = eval(document.getElementById("calc").value)
      } 
     

}