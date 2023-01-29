"use strict";

// Переписать консольное приложение из предыдущего юнита на классы.

// Общие требования:

// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.

/*====================================================================================*/
let start;
class Texniks {
  constructor(name) {
    this.name = name;
  }
  on(arg) {
    let count = 0;
    let start = setInterval(function (kwh) {
      kwh = arg;
      console.log(count);
      count += kwh;

      if (count <= 10) {
        clearInterval(start);
      }
    }, 1000)
  };
  callFunck() {
    let number = ["+", 3, 7, 5, 2, 5];
    for (let i = 0; i <= 6; i++) {
      number.push(Math.floor(Math.random() * 6));
    }
    console.log(number.join('') + ' - Hey!');
  };
}

class SmartTechniks extends Texniks {
  constructor(camera, strong, name) {
    super(name);
    this.camera = camera;
    this.strong = strong;
  }
}

const mobile = new SmartTechniks('mobile', '10px', 4);
const tablet = new SmartTechniks('tablet', '15px', 5);

mobile.on(2);


