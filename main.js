
var btnOrden_menor = document.getElementById("uptodown").addEventListener("change", order_uptodown);
var btnOrden_mayor = document.getElementById("downtoup").addEventListener("change", order_downtoup);
var btnOrden_nombre = document.getElementById("name").addEventListener("change", order_name);
var btnVerfify = document.getElementById("verify").addEventListener("click", verify);

const planets = []
const planet1 = {
    "id": "1",
    "tamaño": "4880",
    "distancia_sol": "57910000",
    "distancia_tierra": "91690000",
    "nombre": "Mercurio"
}
const planet2 = {
    "id": "2",
    "tamaño": "12104",
    "distancia_sol": "10820893",
    "distancia_tierra": "42000000",
    "nombre": "Venus"
}
const planet3 = {
    "id": "3",
    "tamaño": "12756",
    "distancia_sol": "149597870",
    "distancia_tierra": "0",
    "nombre": "Tierra"
}
const planet4 = {
    "id": "4",
    "tamaño": "6794",
    "distancia_sol": "57910000",
    "distancia_tierra": "75000000",
    "nombre": "Marte"
}
const planet5 = {
    "id": "5",
    "tamaño": "142984",
    "distancia_sol": "57910000",
    "distancia_tierra": "75000000",
    "nombre": "Jupiter"
}
const planet6 = {
    "id": "6",
    "tamaño": "108728",
    "distancia_sol": "57910000",
    "distancia_tierra": "75000000",
    "nombre": "Saturno"
}
const planet7 = {
    "id": "7",
    "tamaño": "51118",
    "distancia_sol": "57910000",
    "distancia_tierra": "75000000",
    "nombre": "Urano"
}
const planet8 = {
    "id": "8",
    "tamaño": "49532",
    "distancia_sol": "57910000",
    "distancia_tierra": "75000000",
    "nombre": "Neptuno"
}
const planet9 = {
    "id": "9",
    "tamaño": "49532",
    "distancia_sol": "57910000",
    "distancia_tierra": "75000000",
    "nombre": "Pluton"
}
const planet10 = {
    "id": "10",
    "tamaño": "1632",
    "distancia_sol": "57910000",
    "distancia_tierra": "75000000",
    "nombre": "Haumea"
}
const planet11 = {
    "id": "11",
    "tamaño": "1430",
    "distancia_sol": "57910000",
    "distancia_tierra": "75000000",
    "nombre": "Makemake"
}
const planet12 = {
    "id": "12",
    "tamaño": "2326",
    "distancia_sol": "57910000",
    "distancia_tierra": "75000000",
    "nombre": "Eris"
}
const planet13 = {
    "id": "13",
    "tamaño": "946",
    "distancia_sol": "57910000",
    "distancia_tierra": "75000000",
    "nombre": "ceres"
}
planets.push(planet1, planet2, planet3, planet4, planet5, planet6, planet7, planet8, planet9, planet10, planet11, planet12, planet13)
console.log(planets)

function order_uptodown() {
    for (let i = 0; i < planets.length; i++) {
        let table = "<tr>" + "<td>" + planets[i].id + "</td>" +
        "<td>" + planets[i].nombre + "</td>" + 
        "<td>" + planets[i].tamaño + "</td>" +
        "<td>" + planets[i].distancia_sol + "</td>" +
        "<td>" + planets[i].distancia_tierra + "</td>" + "</tr>";
        
        document.getElementById("push").innerHTML = table;
        console.log(planets[i].nombre)
    }
    //console.log("Esta Check de mayor a menor");
}

function order_downtoup() {
    let j = planets.length;
    for (let i = 0; i < planets.length; i++) {
        j--
        console.log(planets[j].nombre)
        
    }
    //console.log("Esta Check de menor a mayor");

}
function order_name() {
    console.log("Esta Check por nombre");
}
function verify() {
    console.log("El plane Existe");
}