/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
let inputField = document.getElementById("search")
let submitInputButton = document.getElementById("submit-btn")

let kilos = inputField.value
let poundConvertion = kilos * 2.2046
let gramConvertion = kilos * 0.0010000
let ounceConvertion = kilos * 35.274

console.log(inputField);
console.log(submitInputButton);

