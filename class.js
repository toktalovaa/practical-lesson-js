// -------------------------21 урок логические операторы

const hamberger = 2;
const fries = 1;

if(hamberger > 3 && fries){
    console.log('Заказ оформлен, все в наличии')
}else{
    console.log('Мы уходим в другое место');
}
console.log((hamberger <= 3 && fries));

// ----------------------------23 урок цикл в цикле и метки

let result = '';
const length = 7;

for(i=1 ; i < length; i++){
    for(j=0; j<i ; j++){
        result+='*';
    }
    result +='\n';
}
console.log(result);

//*
//** 
//*** 
// ****
// *****
// ******

// 1 При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. 
//Цикл можно использовать любой
// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for(i=5; i<=10; i++){
        console.log(i);
    }
    
}
firstTask();

// 2 При помощи цикла for вывести числа от 20 до 10 в консоль. 
//В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// Место для второй задачи

function secondTask() {
    // Пишем решение вот тут
    for(let i=20; i <= 20;i--){
        if(i==13)break;
        console.log(i);
}
    
}
secondTask();


// 3 При помощи цикла for выведите чётные числа от 2 до 10 включительно

function thirdTask() {
    // Пишем решение вот тут
    for(let i=2; i<=10; i++){
       if(i%2==0){
        console.log(i)
       }
    }
    
}
thirdTask();


// 4 task переписать for на while

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    // Пишем решение вот тут
    let result = 2;
    while(result <= 16){
        if(result % 2 === 1){
        console.log(result);

        }
        result++;
    }
    
}
 fourthTask();

 //Заполните массив цифрами от 5 до 10 включительно.
 // Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
 
 // Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for(let i=5; i<=10;i++){
        arrayOfNumbers.push(i);
    }
    
    // Не трогаем
    return arrayOfNumbers;
}

// 26 урок аргументы функции
// const udsCurr = 28;
// const eurCurr = 32;

// const convert = (amount, curr) => {
//     console.log(amount * curr);
// }

// convert(500, udsCurr);
// convert(500, eurCurr);

//27 lesson (return) улучшаем код выше

const udsCurr = 28;
const discount = 0.9
const convert = (amount, curr) => {
    console.log(amount * curr);
}
function promotion (result){
    console.log(result * discount);
}
const res = convert(500, udsCurr)
promotion(res) // promotion берет вычисление ф-й res где записано вычисление ф-й конверт,
// и подставляет значение этой функции в аргумент ф-й promotion(result) и дальше выполняюсся действия в теле этой ф-й





/*Задачи:

1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

P.S. возвращать - это использовать ключевое слово return.

P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: 
одно на 1 меньше, сам аргумент, и число на 1 больше.

Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. 
Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. 
(Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), 
где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. 
(Проверяем через оператор typeof)

Примеры:

Вызов функции getMathResult(5, 3) даст ответ 5---10---15

Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

Вызов функции getMathResult(10, '5') даст ответ 10

Вызов функции getMathResult(10, 0) даст ответ 10

Вызов функции getMathResult(20, -5) даст ответ 20

Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.

Да, задача сложнее, но она просто объединяет все то, что мы уже учили.

*/

// 1 решение задачи

const sayHello = (name) =>{
   return ('Привет,' + name);
}
sayHello('Антон');


// Место для второй задачи
function returnNeighboringNumbers(num) {
   return [num-1, num, num+1]
}
returnNeighboringNumbers(2);

// Место для третей задачи

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            console.log(i);
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            console.log(str);
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

console.log(getMathResult(5,3));



//--------------28 lesson Методы и свойства числел и стpок

//строки
const str ='TeSt';
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = 'Some fruit';
console.log(fruit.indexOf('f'));  // возвращает индекс f

const logg = 'Hello world';
console.log(logg.slice(6,11)) //вырезание 1-с какого символа, 2- сколько символов 
console.log(logg.substring(6,11))

//числа Math

const num = 12.3;
console.log(Math.round(num)); //округление чисел

const test = '12.2px';
console.log(parseInt(test)); //переводит строку в число +округление??  вовращает 12
console.log(parseFloat(test)); // возвращает 12.2


//--------------    homework    task
/*
(*) Продвинутые задания на использование функций
В этих задачах мы уже усложним работу с функциями. Они необязательны и тут можно попробовать свои силы.
Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. Поэтому нужно четко следовать инструкции.
Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.
Каждая задача проверяется отдельно, но по порядку, так что вы будете получать разные уведомления при проверке.
Задачи:
1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций).
 Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. 
Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.
Примеры:
calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
*/

function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);

//2 task
/*
2) Постепенно переходим к более реалистичным задачам :)
 Вы обнаружите, что там используется все тоже самое.
Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:
Функция принимает только целое число от 1 до 36.
Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
"Ошибка. Проверьте правильность введенного номера места"
Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
Пример:

getCoupeNumber(33)  => 9
getCoupeNumber(7)  => 2
getCoupeNumber(300)  => "Таких мест в вагоне не существует"
getCoupeNumber(0)  => "Таких мест в вагоне не существует"
getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"
getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"
getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"
Такая функция вполне реальна и может использоваться для формирования билетов,
в том числе и визуально на сайтах.
 Конечно, там будет куда больше условий, но смысл остается таким же.
*/

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
    // тут очень много вариантов решения :)
}

getCoupeNumber(33);


///--------------------------------------------------------31 урок Объекты. Деструктуризация объектов.

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors:{
        border: "black",
        bg: 'red'
    }, 
    makeTest:function(){
        console.log('test')
    }
};

options.makeTest(); //вывов ф-й, которая внутри обьекта

// delete options.name;  //удление с объектов


console.log(Object.keys(options).length); // кол-во ключей в обьекте достаются таким способом.
//Получается Object.keys() берет наш обьект и на его основании создает массив,
//в котором все элементы это ключи с нашего преданного обьекта, а дальше в этом массиве можем вызвать length чтоб узнать кол-во элементов

//for in прербор обьекта через цикл доставать обьект из обекта, вложенный обьект

for(let key in options){
    if(typeof(options[key]) === 'object'){
       for(let i in options[key]){
        console.log(`Свойство внутреннего объекта: ${i} значение внутреннего объекта: ${options[key] [i]} `)
       }
       }else{
        console.log(`Свойство: ${key} значение: ${options[key]}`)
       }
    }


    /////////----------деструктуризация обьектов 

    let { border, bg} = options.colors;
    console.log(border); //black
    console.log(bg);

    //////------------------------------урок 33 методы массивов и псевдомассивы

    const arr = [1,2,3,44,5,6,7];
//методы массивов
    arr.push(8);               //добавляет в конец
    const arr2 = arr.pop([]); //удаляет с конца и возврвщает
    console.log(arr);
    console.log(arr2);

    //метод сорт sort(fn) , если предать на массив с цифрами, то он отсортирует как "строку"
    //но с помощью предачи fn callback мы может правильно отсортировать числа тоже, например:
arr.sort(complareNum);
function complareNum(a,b){
   return a-b;  //просто запомни этот момент
}
console.log(arr); // получаем отсортированный массив по

///---циклы для масствов
    for( let val of arr){   //for of больше для массивов, выводит каждое значение массива отдельно
        console.log(val);
    }
    for(let i=0; i < arr.length; i++){    //классичческий массив for
        console.log(arr[i])  
    }
 ///-----методы перебора массивов 

 arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`)
 })


 //////-------------------------------------- 35  урок копирование обектов(не глубокое)
 //задача написать ф-ю, которя будет копировать обьект

 // !!! один важный момент ЭТА ф-я не делает глубокое копирование
 // вложенности остаются ссылоччным типом

function copy(mainObj){   //ф-я параметром принимает обьект и делает копию
    let objCopy = {};  //будет записываться копия

    let key;
    for(key in mainObj){
        objCopy[key]= mainObj[key] // копирование ключ,значение
    }
    return objCopy;
}

const numbers = {
    a:10,
    b:1,
    d:5,
    c:{
        x: 7,
        z:12
    }
}

const copyNumbers = copy(numbers); 
copyNumbers.a = 11;
console.log(copyNumbers);


/// след метод Object.assign() обьeдинениe обьектов 
//этот обьект будем соединять с обектом numbers
const add ={
    e:20,
    j:11
};
console.log(Object.assign(numbers, add));

// //////////////////// а также можно скопировать обьект Object.assign()
const clone =Object.assign({}, add);
console.log(clone);


 ///--------------------------------------копирование массива c помощю метода
const oldArray = ['a', 'b', 'c', 'd'];
const newArray = oldArray.slice(); 

newArray[1]='asdf' ;//меняем одно значение в новом массиве , чтоб увидеть разницу
console.log(newArray);
console.log(oldArray);



//--------------------------------...spread  оператор - разворот,распаковка,копия массивов (ES6-ES8)

const video =['youtube','vimeo','rutube'],
      blogs =['wordpress','livejournal', 'blogger'],
      internet = [...video, ...blogs , 'vk', 'facebook']; //копируется все что есть ...video,...blogs
      // +добавляем 'vk', 'facebook'
console.log(internet);

//2 пример с fn

function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const data =['Ссылка на фото','Ccылка на видео', 288]; //data-данные с бэка например
//и нужно их передать в ф-ю log, чтоб он дальше отработал их, все будет проще с ...spread
log(...data) //вот так



//--------------------------------...spread  оператор -копия массива и обьекта не глубокая копия (ES6-ES8)
const array =[1,2,'a'];
const newArr =[...array] //вот и все

const obj={
    a:1,
    d:2
};
const newObj = {...obj};//вот и все копия в новом обьекте







//----------------------    homework    task

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};
/*Задачи:
1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными
 и возвращать строку с опытом.
Пример:
showExperience(personalPlanPeter) => '1 month'
P.S. желательно использовать деструктуризацию, но не обязательно */
function showExperience(plan){
       let {exp}= plan.skills;
       return exp;
};
 showExperience(personalPlanPeter);
/**2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект
 *  со всеми данными и возвращать строку в нужном виде.
Пример:
showProgrammingLangs(personalPlanPeter)  =>
"Язык js изучен на 20% Язык php изучен на 10%"
Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, 
то возвращается пустая строка.
P.S. Для переноса строки используется \n в конце строки. */
function showProgrammingLangs(plan){
     let str = '';
     const {programmingLangs}= plan.skills;
     for(let key in programmingLangs){
        str += `Язык ${key} изучен  на ${programmingLangs[key]}\n`
     }
     return console.log(str);
}


showProgrammingLangs(personalPlanPeter);

/*3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. 
При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
Пример:
personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG'*/

function showAgeAndLangs(plan){
  const {age}= plan;
  const {languages}= plan.skills;
  let str = `Мне ${age} и я владею языками: `;

  languages.forEach(function(lang){
      str += `${lang.toUpperCase() }`;
  });
  return console.log(str)
 
}
showAgeAndLangs(personalPlanPeter);


/**1) Напишите функцию showFamily, которая будет принимать в себя массив строк и 
  возвращать сообщение в нужном формате.
showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda' */
const family = ['Peter', 'Ann', 'Alex', 'Linda'];
function showFamily(arr){
    // let str = '';
    // arr.forEach(function(item){
    //    str += `Семья состоит из: ${item} `
    // })
    // return console.log(str);
    let newArr = `Семья состоит из:`+ [...arr]
    return console.log(newArr);
}
showFamily(family);
/**Продолжаем решение задач на массивы.
3) Задача с собеседований. Напишите функцию reverse, 
которая принимает в себя строку и возвращает эту строку в обратном порядке.
Пример:
const someString = 'This is some strange string';
reverse(someString) => 'gnirts egnarts emos si sihT' */

const someString = 'This is some strange string';

function reverse(str) {
     if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
   return console.log(str.split('').reverse().join(''));

       // Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr
}
reverse(someString);


/**4) Представьте такую реальную ситуацию. У вас есть банкомат,
 *  который выдает деньги из двух разных банков в разных валютах. 
 * Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
Вам нужно создать главную функцию банкомата availableCurr, которая принимает
 два аргумента: первый - это массив со всеми доступными валютами из двух банков
сразу (сейчас представим, что они не могут повторяться),
второй - необязательный аргумент, который указывает ту валюту, 
которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - 
то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде. */

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')