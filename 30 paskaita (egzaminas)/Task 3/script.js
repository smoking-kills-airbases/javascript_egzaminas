/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

let userShowBtn = document.getElementById("btn")
let userField = document.getElementById("message")

let putCardHere = document.getElementById("output")

// console.log(ENDPOINT)

// for (let i=0; i<ENDPOINT.length; i++){
//     console.log(ENDPOINT[i])
// }

fetch(ENDPOINT)
    .then(res => res.json())
    .then(
        data => {

        // console.log(data)

        for (let i=0; i<data.length; i++){

            console.log(data[i])

            let userBox = document.createElement("div")
            let userLogin = document.createElement("p")

            userLogin.innerText = data[i].login

            userBox.appendChild(userLogin)
            putCardHere.appendChild(userBox)
            
            let userAvatar = document.createElement('img');
            userAvatar.src = data[i].avatar_url;
            userBox.appendChild(userAvatar);
           
        }

    })


 userShowBtn.addEventListener("click", (event) => {userField.style.display = "none"})
        

