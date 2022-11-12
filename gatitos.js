/* Programacion orientada a objetos (POO)

Paradigma de programacion = Manera en lo que se puede hacer algo especifico

En programacion es la forma que puedo programar algo.

Condicion con reglas
Algo que cambia o revoluciona
Algo ya establecido
Instrucciones


Otras formas de programar:
Programacion funcional
Programacion imperativa
Programacion declarativa

Pilares fundamentales de la programacion POO

Polimorfismo
Herencia
Encapsulamiento
Abstraccion


Clases(Plantillas para hacer muchos objetos)

Objetos
    Atributos (lo que tengo)
    metodos (lo que puedo hacer con lo que tengo )

*/

//Ejemplo gatito

const color = "Gris";
var Tamaño = "chiquito";
var edad = 5;
var cicatrices = "angora";
const raza = "angora";
var caracter = "agresivo";

//Metodos o funciones

function comer(){}
function treparArboles(){}
function maullar(){}
function grunir(){}
function dormir(){}
function corretearPerros(){}


//Precursor de los objetos array

/*
var gato = [ "cilantro", "agresivo", "5", "angora", "True", "Chiquito"]


console.log(typeof(gato));*/

//Evolucion del arreglo

var gatoObjeto = {
    nombre: "Cilantro",
    edad: 5,

}

var gatoObjeto = {
    nombre: "Perejil",
    edad: 3,
    caracter: "Tranquilo",
    raza: "Capuccino",
}

// Crear una class para automatizar la creacion de objetos en un array o json

class gato {
    nombre = "";
    edad = 0;
    raza = "";
    caracter = "";

//Agregar constructores que ya definimos
constructor(nombre, edad, raza, caracter){
       this.nombre = nombre;
       this.edad = edad;
       this.raza = raza;
       this.caracter = caracter;
    
    }

//Definiremos los metodos que seran definidos como funciones o acciones 

maullar(){
    console.log("miauuuw");
}
dormir(){
    console.log("Zzzz");
}
ronronear(){
    console.log("Rrrrrr");
}
araniar(){
    console.log("saaass");
}
comer(){
    console.log("nam nam nam");
}



}

// Para empezar a crear mas objetos con atributos especificos

var garfield = new gato("Gardfield", 9, "Naranja", "Dormilon",);
var skitty = new gato("Skitty", 8, "Mini", "Salvaje",);
var doraemon = new gato("Doraemon", 100, "Cosmico", "Raro");
var meowth = new gato ("Meowth", 9, "Cat Coin", "Astuto");
var bills = new gato ("Bills", 2000, "Egipcio", "Peleador",)

console.log(skitty);
skitty.comer();
