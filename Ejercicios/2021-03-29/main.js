/*
 * Filename: e:\Curso\Fullstack Developer Junior (mar-21  AVINC-130)\Repo\PlussRolf\Ejercicios\2021-03-29\main.js
 * Path: e:\Curso\Fullstack Developer Junior (mar-21  AVINC-130)\Repo\PlussRolf\Ejercicios\2021-03-29
 * Created Date: Wednesday, March 31st 2021, 9:22:55 am
 * Author: Román Schiavón
 * 
 * Copyright (c) 2021 Your Company
 */
class Person {

    name = [
        'first',
        'last'
    ];
    age;
    gender;
    interests;

    constructor(first, last, age, gender, interests) {
        this.name = {
            first: first,
            last: last
        }
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    greeting() {
        console.log(`Hi! I'm ${this.name.first}`);
    };
    
    farewell() {
        console.log(`${this.name.first} has left the building. Bye for now!`);
    };

    get eat(){
        return this._eat;
    }

    set eat(food){
        this._eat = food;
    }

    get sleep(){
        return this._sleep;
    }

    set sleep(hours){
        this._sleep = hours;
    }

    eating() {
        console.log(`${this.name.first} had been eating ${this.eat}`);
    }

    sleeping(){
        console.log(`${this.name.first} slept for ${this.sleep} hours`);
    }
}

class Teacher extends Person {

    constructor(first, last, age, gender, interests, subject, grade) {
      super(first, last, age, gender, interests);
      this._subject = subject;
      this.grade = grade;
    }

    get subject() {
        return this._subject;
    }
    
    set subject(newSubject) {
        this._subject = newSubject;
    }

}

class Student extends Person {

    constructor(first, last, age, gender, interests, subject, grade, homework, exams) {
      super(first, last, age, gender, interests);
      this._subject = subject;
      this.grade = grade;
      this._homework = homework;
      this._exams = exams;
    }

    get subject() {
        return this._subject;
    }
    
    set subject(newSubject) {
        this._subject = newSubject;
    }

    get homework() {
        return this._homework;
    }
    
    set homework(newHomework) {
        this._homework = newHomework;
    }

    get exams() {
        return this._exams;
    }
    
    set exams(newExam) {
        this._exams = newExam;
    }

}

let aPerson = new Person('Michael', 'Reyes', 38, 'Male', ['Arts']);
aPerson.greeting();
aPerson.farewell();

let aTecher = new Teacher('Jean', 'Reyes', 25, 'Female', ['Beekeeping'], 'History', 5);
aTecher.greeting();
console.log(aTecher.subject);
aTecher.subject = 'Gardening';
console.log(aTecher.subject);
aTecher.farewell();

let aStudent = new Student('Emma', 'Reyes', 19, 'Female', ['Streaming'], ['Singing'], 4, 'a bit','');
aStudent.greeting();
console.log(aStudent.name.last);
console.log(aStudent.homework);
aStudent.homework = 'Lots';
console.log(aStudent.homework);

//Part 3 ¿?
Person.prototype.food = function food(food){
    this._food = food;
};
Person.prototype.food = function food(){
    return this._food;
};

Person.prototype.ate = function(_food){
    console.log(`${this.name.first} ate ${this.food}`);
}

aPerson.food = 'Orange';
aPerson.ate();
aPerson.food = 'Dirt';
console.log(aPerson.food);
aStudent.eat = 'Apple';
aStudent.eating();
aTecher.sleep = 8;
aTecher.sleeping();

/*
Mostrar total de items
Mostrar precio sumado de todos los ítems
Mostrar sólo los ítems que contengan la property quantity igual a 2
Mostrar un ítem con quantity igual a 3
*/
const items = [

    { description: 'Tomates', quantity: 1, price: 3, total: 55 },
  
    { description: 'Cebolla', quantity: 3, price: 5, total: 5.5 },
  
    { description: 'Zanahoria', quantity: 2, price: 6, total: 17 },
  
    { description: 'Zapallo', quantity: 2, price: 9, total: 17 }
  
  ];

function totalItems(objectArray){
    return objectArray.length;
}

function totalQuantity(objectArray){
    return objectArray.reduce((accumulator, currentValue) => accumulator + currentValue.quantity,0);
}

function totalPrice(objectArray){
    return objectArray.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity,0);
}

function filterQuantity(objectArray, cuantityFilter){
    objectArray.forEach(element => {
        if (element.quantity == cuantityFilter) {
            console.log(element);
        }
    });
}

function getFirstItem(objectArray, quantity){
    return objectArray.find(item => item.quantity === quantity);
}

console.log(totalItems(items));
console.log(totalQuantity(items));
console.log(totalPrice(items));
filterQuantity(items, 2);
console.log(getFirstItem(items, 3));

/*
Agrupar personas por edad, de manera que el resultado muestre { 29: 3, 59: 2 }
Mostrar la primer persona de 29 años
Mostrar solo las personas con edad 59
*/
const persons = [

    { name: 'Maria', age: 59 },
  
    { name: 'Juan', age: 29 },
  
    { name: 'Pedro', age: 29 },
  
    { name: 'Pedro', age: 59 },
  
    { name: 'Pedro', age: 29 }
  
];

function groupByAge(objectArray){
    return objectArray.reduce(function (acc, obj) {
            if (obj.age in acc) {
                acc[obj.age]++;
            } else {
                acc[obj.age] = 1;
            }
            return acc
    }, {})
}

function getAge(objectArray, age){
    return objectArray.find(item => item.age === age);
}

function showOfAge(objectArray, ageFilter){
    objectArray.forEach(element => {
        if (element.age == ageFilter) {
            console.log(element);
        }
    });
}

console.log(getAge(persons, 29));
showOfAge(persons, 59);
console.log(groupByAge(persons));