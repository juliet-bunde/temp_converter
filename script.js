function convertTemperature(){
    const inputTemp = parseFloat(document.getElementById('tempInput').value);
    const selectUnit = document.getElementById('unitSelect').value;
    const resultElement = document.getElementById('result');
    let result = "";

    if(isNaN(inputTemp)){
        result = "Please enter a valid number.";
        resultElement.innerText = result;
        return;
    } 

    
    let Celsius,Fahrenheit, Kelvin;

    /*convert input to all selected units based on user selection*/

    if(selectUnit === "Celsius") {
     Celsius = inputTemp;
    Fahrenheit = (Celsius * 9/5)+32;
    Kelvin = Celsius + 273.15;
 }else if(selectUnit === "Fahrenheit"){
    Fahrenheit = inputTemp;
    Celsius = (Fahrenheit - 32)*5/9;
    Kelvin = Celsius + 273.15;
 }else if(selectUnit ==="Kelvin"){
    Kelvin = inputTemp;
    Celsius = Kelvin - 273.15;
    Fahrenheit = (Celsius * 9/5)+32;
 }
 //display results
 result = `${Celsius.toFixed(2)} °C = ${Fahrenheit.toFixed(2)}°F = ${Kelvin.toFixed(2)}°K`;
  resultElement.innerText = result;
}


