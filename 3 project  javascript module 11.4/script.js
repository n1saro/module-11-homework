//Напишите функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

let getNumber1 = 4
let getNumber2 = 8
 
function getSumm(getNumber1) {
    return function getSumm2(getNumber2) {
        return getNumber1 + getNumber2;
    };
};

let result = getSumm()
console.log(result())