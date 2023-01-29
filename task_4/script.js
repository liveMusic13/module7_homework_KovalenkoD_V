"use strict";

// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создайте экземпляры каждого прибора.
// Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
// Общие требования:

// Имена функций, свойств и методов должны быть информативными
// Соблюдайте best practices:
// использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
// использование синтаксиса es6 (кроме функции-конструкторов) и так далее.

/*====================================================================================*/


function Texniks(name) {
  this.name = name;
}

let start;

Texniks.prototype.on = function (arg) {
  let count = 0;
  let start = setInterval(function (kwh) {
    kwh = arg;
    console.log(count);
    count += kwh;

    if (count === 10) {
      clearInterval(start);
    }
  }, 1000)
};


Texniks.prototype.callFunck = function () {
  let number = ["+", 3, 7, 5, 2, 5];
  for (let i = 0; i <= 6; i++) {
    number.push(Math.floor(Math.random() * 6));
  }
  console.log(number.join('') + ' - Hey!');
};

function SmartTechniks(name, camera, strong) {
  this.name = name;
  this.camera = camera;
  this.strong = strong;
}

SmartTechniks.prototype = new Texniks();

SmartTechniks.prototype.callFunck = function () {
  let number = ["+", 3, 7, 5, 2, 5];
  for (let i = 0; i <= 6; i++) {
    number.push(Math.floor(Math.random() * 6));
  }
  console.log(number.join('') + ' - Hey! How are you?');
};

const mobile = new SmartTechniks('mobile', '10px', 4);
const tablet = new SmartTechniks('tablet', '15px', 5);

mobile.on(2);

