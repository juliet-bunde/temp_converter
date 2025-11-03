function convertTemperature(){
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const selectUnit = document.get ElementById('selectUnit').value;
    let result = "";

    if(isNaN(inputTemp)){
        result = "please enter a valid number.";
   
    }
