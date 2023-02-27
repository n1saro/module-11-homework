//Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа. Используйте setInterval.
//Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15(всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
let getNumber = 5
let getNumber2 = 10

function getNumbers(getNumber,getNumber2) {
    let time = setInterval(() => {
        for(let i = 0;getNumber == getNumber2;) {
            console.log(i)
        }
        if(getNumber == getNumber2) {
            clearInterval(time)
        }
    } , 1000);
}

getNumbers()