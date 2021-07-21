
var ufc= [];
function imprimir(){
    console.log(ufc);
    let tbUfc = document.getElementById('tblUfc');
    tbUfc.innerHTML = '';
    ufc.forEach((x)=>{
let tr = document.createElement('tr');
let tdNum = document.createElement('td');
let tdNom = document.createElement('td');
let tdApu =document.createElement('td');
let tdPer = document.createElement('td');
let tdgana = document.createElement('td');
let tdRou = document.createElement('td');
let tdTa = document.createElement('td');
tdNum.innerText = ufc.indexOf(x) + 1;
tdNom.innerText =x.nombre;
tdApu.innerText =x.apuesta;
tdPer.innerText = x.perdidas;
tdgana.innerText = x.ganadas;
tdRou.innerText = x.rounds;
tdTa.innerText = x.tapuesta;
tr.append(tdNum);
tr.append(tdNom);
tr.append(tdApu);
tr.append(tdPer);
tr.append(tdgana);
tr.append(tdRou);
tr.append(tdTa);
tbUfc.append(tr);

    });
    sumarTapuesta();
}

function agregar(){
let per = document.getElementById('txtPerdidas').value ;
let gana = document.getElementById('txtGanadas').value;
let rou = document.getElementById('txtRounds').value ;
let ta = document.getElementById('txtTapuesta').value ;
let nomPro = document.getElementById('slUfc').value;   
let nomApu = document.getElementById('slApuesta').value;    


let nuevaUfc = {
    "nombre" : nomPro,
    "apuesta": nomApu,
    "perdidas" : parseInt(per),
    "ganadas" : parseInt(gana),
    "rounds" : parseInt(rou),
    "tapuesta" : parseFloat(ta)
};
ufc.push(nuevaUfc);

borrar()
imprimir();
}
function borrar(){
    document.getElementById('txtPerdidas').value = 0 ;
    document.getElementById('txtGanadas').value= 0;
    document.getElementById('txtRounds').value = 0;
    document.getElementById('txtTapuesta').value = 0;
    document.getElementById('slUfc').value= 0; 
    document.getElementById('slApuesta').value= 0; 
}
function sumarTapuesta() {
    let totalTapuesta = 0;
    ufc.forEach((x) => {
        totalTapuesta = totalTapuesta + x.tapuesta;  
    });
    let tdTotalTapuesta = document.getElementById('tdTotalTapuesta')
    tdTotalTapuesta.innerText = totalTapuesta;
}