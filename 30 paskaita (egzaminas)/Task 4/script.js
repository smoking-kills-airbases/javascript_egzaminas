/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

// fetch(ENDPOINT)
//     .then(res => res.json())
//     .then(
//         data => {

//             for (let i=0; i=data.length; i++){
//                 console.log(data.brand)
//             }

//             // console.log(data)

//         }
//     )

for (let i=0; i<ENDPOINT.length; i++){
    console.log(ENDPOINT[1])
}    