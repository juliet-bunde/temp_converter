function convertTemperature(){
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const selectUnit = document.getElementById('unitSelect').value;
    let result = "";

    if(isNaN(inputTemp)){
        result = "Please enter a valid number.";
   
    }
