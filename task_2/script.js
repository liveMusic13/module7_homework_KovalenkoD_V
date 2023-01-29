'use strict';

//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

let compStr = 'name';

let comprObj = {
  name: 'dima',
  age: 26,
  job: "developer",
}

let comparison = (str, obj) => {
  for (let key in obj) {
    if (key === str) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

console.log(comparison(compStr, comprObj));

