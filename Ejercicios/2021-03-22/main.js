/*
 * Filename: e:\Curso\Fullstack Developer Junior (mar-21  AVINC-130)\Repo\PlussRolf\Ejercicios\2021-03-22\main.js
 * Path: e:\Curso\Fullstack Developer Junior (mar-21  AVINC-130)\Repo\PlussRolf\Ejercicios\2021-03-22
 * Created Date: Wednesday, March 24th 2021, 7:15:23 am
 * Author: Román Schiavón
 * 
 * Copyright (c) 2021 Your Company
 */

/*
[1.The team]

En este ejercicio, se recibirá el nombre de equipo e integrantes como parámetros de la función, formar el siguiente mensaje en la consola con estos datos de entrada:

Datos de entrada:

teamName: 'formacion'
people: [ 'Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike'],


Resultado:

Hay 6 personas en el equipo de formacion.
Ellos son: Amalia, Karla, Silvana, Manu, Jonh, Mike.*/


let teamName = 'formacion';
let people = [ 'Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike'];

/**
* Describe la cantidad de integrantes y los nombres de estos.
*
* @param {string} _team el nombre del equipo.
* @param {array} _integrants Array con los nombres de los integrantes del equipo.
*
* @return string La descripción de equipo
*/
function describeTheTeam(_teamName, _integrants)
{
    let teamDescription = `Hay ${_integrants.length} personas en el equipo de ${_teamName}.
Ellos son: ${_integrants.map(v => v)}.\n`

    return teamDescription;

}

console.log("Ejercicio P1\n");
console.log("Option 1\n");
console.log(describeTheTeam(teamName, people));

let teamDescription = (function(_teamName, _integrants) {return `Hay ${_integrants.length} personas en el equipo de ${_teamName}.
Ellos son: ${_integrants.map(v => v)}.\n`});
console.log("Option 2\n");
console.log(teamDescription(teamName,people));

data = {
    teamName: 'Los Simpsons',
    people: [ 'Lisa', 'Marge', 'Maggie', 'Homero', 'Bart']
};

let anotherTeamDescription = (data => {return `Hay ${data.people.length} personas en el equipo de ${data.teamName}.
Ellos son: ${data.people.map(v => v)}.\n`});

console.log("Option 3\n");
console.log(anotherTeamDescription(data));

console.log("\n===========\n");


/*
[2.- Square of pairs]

Crear una función que reciba como parámetro un arreglo de números y retornar en la consola los elementos elevados al cuadrado solo si se cumple que el número es positivo.


entrada: [2, 4, 6]
salida: 4, 16, 36

entrada: [-3, 2, -8, 12, 5]
salida: -3, 4, -64, 144, 5

entrada: [1, 2, 3, 4, 5]
salida: 1, 4, 3, 16, 5
*/

/**
 * potencia al cuadrado sólo lo valores positivos
 * 
 * @param {array} _numbers 
 * 
 * @returns {array}
 */
function positivePow2(_numbers){
    return _numbers.map(v => v > 0 ? v * v : v);
}

/**
 * potencia al cuadrado sólo lo valores pares
 * 
 * @param {Array} _numbers 
 * 
 * @returns {Array}
 */
function pairPow2(_numbers){
    //El módulo de 2 siempre da 0 ó 1, que lo mismo que Falso o Verdadero
    return _numbers.map(v => v % 2 ? v : v * v);
}

console.log("Ejercicio P2\nPotencia de números positivos\n");
console.log(`entrada: 2, 4, 6 \nsalida: ${positivePow2([2, 4, 6])}`);
console.log(`entrada: -3, 2, -8, 12, 5 \nsalida: ${positivePow2([-3, 2, -8, 12, 5])}`);
console.log(`entrada: 1, 2, 3, 4, 5 \nsalida: ${positivePow2([1, 2, 3, 4, 5])}`);

console.log("\nPotencia de números pares\n");
console.log(`entrada: 2, 4, 6 \nsalida: ${pairPow2([2, 4, 6])}`);
console.log(`entrada: -3, 2, -8, 12, 5 \nsalida: ${pairPow2([-3, 2, -8, 12, 5])}`);
console.log(`entrada: 1, 2, 3, 4, 5 \nsalida: ${pairPow2([1, 2, 3, 4, 5])}`);

console.log("\n===========\n");

/*
3. Inventario

Dado un arreglo de objetos como parámetro de una función, conteniendo la categoría y precio del producto, retornar el precio total de una categoría indicada.


Hint: Usar los métodos .filter() y .reduce() para lograr el resultado.

totalByCategory(inventory, "beverage");

debe mostrar en cosola: 120

totalByCategory(inventory, "no-existe");

debe mostrar en cosola: 0
*/

let inventory = [
    {
        name: 'Sport Drink',
        category: 'beverage',
        price: 100,
    },
    {
        name: 'Sport Drink',
        category: 'beverage',
        price: 20,
    },
    {
        name: 'Fruit Cake',
        category: 'food',
        price: 200,
    },
]

function totalByCategory(_inventory, _category){

    return _inventory.filter(item => item.category === _category).reduce((accumulator, currentValue, currentIndex, ) => accumulator + currentValue.price,0);
} 

console.log("Ejercicio P3\n");
console.log(`Categoría: beverange -> ${totalByCategory(inventory, "beverage")}`);
console.log(`Categoría: food -> ${totalByCategory(inventory, "food")}`);
console.log(`Categoría: no-existe -> ${totalByCategory(inventory, "no-existe")}`);
console.log("\n===========\n");


/*
[4. Capitalize]

Implementa una función que reciba una oración y devuelva cada letra inicial de una palabra en mayúscula.

Entrada: 'laboratoria mexico'
Salida: 'Laboratoria Mexico'
*/

let textToCapitalize = 'laboratoria mexico';

function capitalizeText(_text)
{
    let textCapitalized = '';
    _text.split(' ').map(t => {textCapitalized+= `${t[0].toUpperCase()}${t.slice(1)} `});
    //Slower -> _text.split(' ').map(t => {textCapitalized+= `${t.charAt(0).toUpperCase()}${t.slice(1)} `});

    return textCapitalized;
}

console.log("Ejercicio P4\n");
console.log(capitalizeText(textToCapitalize));
console.log("\n===========\n");