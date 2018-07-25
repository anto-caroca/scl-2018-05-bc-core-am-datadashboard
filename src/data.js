let contenido = document.querySelector('#contenido')
const btn = document.getElementById('obtener') 

function traer(){
    btn.style.display='none'
async function fetchApi(){
    const cohorts = await fetch('https://api.laboratoria.la/cohorts')
    const dataCohorts = await cohorts.json()
    console.log(dataCohorts);
    // dataCohorts.forEach(x => console.log(x.id, x.coursesIndex))
    table(dataCohorts)
    // tabla2(dataCohorts)
    }

  fetchApi();
  
function table(dataCohorts){
    contenido.innerHTML = ''
    for(let data of dataCohorts){
    contenido.innerHTML += `
    <tr>
        <th scope="row">${dataCohorts.indexOf(data)}</th>
        <td>${data.id}</td>
        <td>${data.start}</td>
        <td>${data.end ? data.end : '-'}</td> 
  </tr>
    ` // se usa operador ternario para mostrar - donde faltan datos  así evitar que salga 'undefined'. 
    }
}
/* 
function table2(dataCohorts){ 

    for(let date2 of dataCohorts){
     let a =   Object.entries(data2.coursesIndex)
    console.log(a)
    }
}*/

}


  
  
