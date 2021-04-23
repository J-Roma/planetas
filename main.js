
var btnOrden_menor = document.getElementById("uptodown").addEventListener("change", order_uptodown);
var btnOrden_mayor = document.getElementById("downtoup").addEventListener("change", order_downtoup);
var btnOrden_nombre = document.getElementById("name").addEventListener("change", order_name);
var btnVerfify = document.getElementById("verify").addEventListener("click", verify);

const planets = []
const planet1 = {
    "id": "1",
    "tamano": "4880",
    "distancia_sol": "57910000",
    "distancia_tierra": "91690000",
    "nombre": "Mercurio"
}
const planet2 = {
    "id": "2",
    "tamano": "12104",
    "distancia_sol": "10820893",
    "distancia_tierra": "42000000",
    "nombre": "Venus"
}
const planet3 = {
    "id": "3",
    "tamano": "12756",
    "distancia_sol": "149597870",
    "distancia_tierra": "0",
    "nombre": "Tierra"
}
const planet4 = {
    "id": "4",
    "tamano": "6794",
    "distancia_sol": "57910000",
    "distancia_tierra": "75000000",
    "nombre": "Marte"
}
const planet5 = {
    "id": "5",
    "tamano": "142984",
    "distancia_sol": "57910000",
    "distancia_tierra": "75000000",
    "nombre": "Jupiter"
}
const planet6 = {
    "id": "6",
    "tamano": "108728",
    "distancia_sol": "57910000",
    "distancia_tierra": "75000000",
    "nombre": "Saturno"
}
const planet7 = {
    "id": "7",
    "tamano": "51118",
    "distancia_sol": "57910000",
    "distancia_tierra": "75000000",
    "nombre": "Urano"
}
const planet8 = {
    "id": "8",
    "tamano": "49532",
    "distancia_sol": "57910000",
    "distancia_tierra": "75000000",
    "nombre": "Neptuno"
}
const planet9 = {
    "id": "9",
    "tamano": "49532",
    "distancia_sol": "57910000",
    "distancia_tierra": "75000000",
    "nombre": "Pluton"
}
const planet10 = {
    "id": "10",
    "tamano": "1632",
    "distancia_sol": "57910000",
    "distancia_tierra": "75000000",
    "nombre": "Haumea"
}
const planet11 = {
    "id": "11",
    "tamano": "1430",
    "distancia_sol": "57910000",
    "distancia_tierra": "75000000",
    "nombre": "Makemake"
}
const planet12 = {
    "id": "12",
    "tamano": "2326",
    "distancia_sol": "57910000",
    "distancia_tierra": "75000000",
    "nombre": "Eris"
}
const planet13 = {
    "id": "13",
    "tamano": "946",
    "distancia_sol": "57910000",
    "distancia_tierra": "75000000",
    "nombre": "ceres"
}

planets.push(planet1, planet2, planet3, planet4, planet5, planet6, planet7, planet8, planet9, planet10, planet11, planet12, planet13)
console.log(planets)

function order_uptodown() {

    let table = "";
    for (let i = 0; i < planets.length; i++) {

        table = table + "<tr>" + "<td>" + planets[i].id + "</td>" +
        "<td>" + planets[i].nombre + "</td>" + 
        "<td>" + planets[i].tamano + "</td>" +
        "<td>" + planets[i].distancia_sol + "</td>" +
        "<td>" + planets[i].distancia_tierra + "</td>" + "</tr>";
        console.log(planets[i].nombre)

    }

    document.getElementById("push").innerHTML = table;

}

function order_downtoup() {

    let table = "";
    let j = planets.length;
    for (let i = 0; i < planets.length; i++) {

        j--
        table = table + "<tr>" + "<td>" + planets[i].id + "</td>" +
        "<td>" + planets[j].nombre + "</td>" + 
        "<td>" + planets[j].tamano + "</td>" +
        "<td>" + planets[j].distancia_sol + "</td>" +
        "<td>" + planets[j].distancia_tierra + "</td>" + "</tr>";
        console.log(planets[j].nombre)
    }

    document.getElementById("push").innerHTML = table;

}

function order_name() {
    console.log("Aqui va el orden por nombre")

}

function verify() {
    let planet_name = document.getElementById("txt").value;
    let ok = 0;
    for (let i = 0; i < planets.length; i++) {
        if (planet_name === planets[i].nombre) {
            ok = ok + 1;
            let table = "<tr>" + "<td>" + planets[i].id + "</td>" +
            "<td>" + planets[i].nombre + "</td>" + 
            "<td>" + planets[i].tamano + "</td>" +
            "<td>" + planets[i].distancia_sol + "</td>" +
            "<td>" + planets[i].distancia_tierra + "</td>" + "</tr>";
            document.getElementById("push").innerHTML = table;
            console.log("El planeta " + planet_name + " Si existe")
        }
    }
    if ( ok === 0) {console.log("El planeta " + planet_name + " No existe")}
}