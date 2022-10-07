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
let outputField = document.getElementById("output")

let kilos = inputField.value


// console.log(inputField);
// console.log(submitInputButton);

let resultBoxDom = document.createElement("div")
resultBoxDom.className = "resboxdom"
let resultBoxPounds = document.createElement("div")
resultBoxPounds.className = "resboxpound"
let resultBoxGrams = document.createElement("div")
resultBoxGrams.className = "resboxgram"
let resultBoxOunces = document.createElement("div")
resultBoxOunces.className = "resboxOunce"

resultBoxDom.appendChild(resultBoxGrams,)
resultBoxDom.appendChild(resultBoxOunces)
resultBoxDom.appendChild(resultBoxPounds)
outputField.appendChild(resultBoxDom)

// console.log(typeof inputField.value);

submitInputButton.addEventListener("click", conversionCalculator)
// document.querySelector("form").addEventListener("submit", conversionCalculator)

function conversionCalculator() {
    // let kilograms = parseInt(kilos)

    let poundConvertion = kilos * 2.2046
    let gramConvertion = kilos * 0.0010000
    let ounceConvertion = kilos * 35.274

    

    resultBoxPounds.innerText = poundConvertion + ' svarai'
    resultBoxGrams.innerText = gramConvertion + ' gramai'
    resultBoxOunces.innerText = ounceConvertion + ' uncijos'
    // console.log(poundConvertion)
}


conversionCalculator()

