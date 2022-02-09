
// Задание 1

let removeUser = () => {

}
let createPost = () => {

}
let addItem  = () => {

}
let readFile = () => {

}
let getElements = () => {

}
let createParentElement = () => {

}
let startGame = () => {

}
let sendMessage = () => {

}

removeUser ()
createPost()
addItem()
readFile()
getElements()
createParentElement()
startGame()
sendMessage()


// Задание 2

let text = (str) => {

}
let num = (num) => {

}
let greet = (text) => {

}
let showNumber = (number) => {

}
let log = (nubmer) => {

}
let reg = (name) => {

}
let add = (string) => {

}
let createFile = (num) => {

}
let logUser = (num) => {

}
let logOut = (num) => {

}
// Задание 3

let text = (str) => {
    return str
}
let num = (num) => {
    return num
}
let greet = (text) => {
    return text
}
let showNumber = (number) => {
    return number
}
let log = (nubmer) => {
    return number
}
let reg = (name) => {
    return name
}
let add = (string) => {
    return string
}
let createFile = (num) => {
    return num
}
let logUser = (num) => {
    return num
}
let logOut = (num) => {
    return num
}
// Задание 4
let addElement = (number) => {
    return number * 2
}
addElement(2)
let degree = (x) => {
    return x * 2
}
degree(3, 4)
let showMessage = (num) => {
    return num * 2
}
showMessage (10)
let math = (y) => {
    return y * 2
} 
math(80)
let greeting = (number) => {
    return number * 2
}
greeting(120)

// Задание 5
let arr = [1, 2, 'text', 'toje-text', 5]

let getArr = (arr) => {
    return arr[0]
}
console.log(getArr(arr))

// Задание 6

let lastElem = (arr) => {
    return arr[arr.length - 1]
}
console.log(lastElem(arr))

// Задание 7 

let printMyFullName = (firstname, secondname) => {
    const fullname = `${firstname} ${secondname}`;
 // возращаем значение константы fullname   
    return fullname;
  }
  
  console.log(printMyFullName('into', 'code'));
  // вывод в консоль элемента printMyFullName
  

  //Объявляем стрелочную функцию с заданным массивом в параметр
let getSumOfFirstAndLastElement = (arr) => {
    //Задаем условие, при котором будет выполняться код в теле функции
    if(arr.length < 2) {
        // возращаем текст
      return 'леее, минимум два элемента нужно жи есть';
      // Задаем другое условие, на тот случай, если первое не выполнится
    } else {
      const lastIndex = arr.length - 1;
        // создали функцию с условием выполнения кода внутри тела функции
      return arr[0] + arr[lastIndex];
    }
  }
  
  console.log(getSumOfFirstAndLastElement([])); 
  // вывод результата функции в консоль
  console.log(getSumOfFirstAndLastElement([3, 7, 12, 8]));
  // последний вывод элемента в консоль

  // Задание 8

  let text = "css";

 let testVariableScope = () => {
    let text = "html";
    // создали переменную text внутри тела функци
    return text;
    // возвращаем значение переменной text
  }
  
  console.log(testVariableScope());
  // в консоль выведится 'html', так как функция в первую очередь взаимодействует с локальными переменными

