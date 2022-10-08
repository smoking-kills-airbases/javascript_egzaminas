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
            
            }

    })
