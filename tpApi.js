"use strict"

let url = 'https://pokeapi.co/api/v2/pokemon/ditto';

async function mostrarData() {
    //funcion fech
    let respuesta = await fetch(url)
    let data = await respuesta.json();

    console.log(data.abilities);
    //recorro el json con una funcion anonima
    data.abilities.forEach(element => {
    
    //y muestro la tabla con los datos
        document.querySelector("#table").innerHTML +=
            `<tr>
    <td> ${element.ability.name} </td>
     <td> ${element.is_hidden ? "Si": "No" } </td>
    <td> ${data.base_experience} </td> 
    
<tr/>`

    });
}

mostrarData();



