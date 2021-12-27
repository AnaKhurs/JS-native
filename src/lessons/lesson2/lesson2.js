console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

const sum = (a) => {
    let result = a
    const f = (b) => {
        result += b
        return result
    }
    return f
}
sum(3)(6)

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

const makeCounter = () => {
    let result = 0
    const f = () => {
        result += 1
        return result
    }
    return f
}
const counter = makeCounter();
counter(); // 1
counter(); // 2
const counter2 = makeCounter();
counter2(); // 1
counter(); // 3


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

const counter = (a) => {
    let result = a
    const obj = {
        increase: function () {
            return result += 1
        },
        decrease: function () {
            return result -= 1
        },
        reset: function () {
            return result = 0
        },
        set: function (b) {
            return result = b
        }
    }
    return obj
}

counter(5).increase()

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10
// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

const superSum = (num) => {
    if (num <= 0) return 0

    if (num === 1) return (a) => a

    let _arguments = []

    const f = (...args) => {

        _arguments = [..._arguments, ...args]

        if (_arguments.length >= num) {
            _arguments.length = num
            return _arguments.reduce((acc, el) => acc + el)
        } else {
            return f
        }
    }
    return f
}

superSum(3)(2, 5)(3, 9)


// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
//sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10

const sumTo = (n) => {
    if (n === 1) return n
    if (n > 1) {
        return n + sumTo(n - 1)
    }
}

//Вычислить факториал
const factorial = (n) => {
    if (n === 0 || 1) return 1
    return n * factorial(n - 1)
}

//Числа Фибоначчи
const fib = (n) => {
    return n <= 1 ? 1 : fib(n - 1) + fib(n - 2)
}

const fibonacci = () => {
    let a = 1
    let b = 1
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b
}

//Вывод односвязного списка
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

const printListRec = (l) => {
    console.log(l.value)
    if (l.next) {
        printListRec(l.next)
    }
}

printListRec(list)

const printLisWhile = (l) => {
    while (l) {
        console.log(l.value)
        l = l.next
    }
}
printLisWhile(list)

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};