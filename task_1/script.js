'use strict';

//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.


let userName = {
  name: "Dima",
  age: 26,
};

let getKey = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key);
      console.log(obj[key]);
    }
  }
}

getKey(userName);
