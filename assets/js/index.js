/*
  DOM:
    Document
    Object
    Model
  об'єктна модель документа.

  Отримання досутпу до DOM:
    window - об'єктне уявлення браузера

    window.document - вхідна точка в API DOM
    document
*/
console.log(document);

/*
  концепції взаємодії з DOM:
    1. Все у DOM зроблено у вигляді об'єктів
    2. Маємо можливість казати ДОМу, що ми хочемо зробити за допомогою подій
*/

/*
  При натисканні на кнопку вивести алертом повідомлення

  1. нам треба знайти нашу кнопку
  2. ми маєно написати що саме ми хочемо щоб сталося при натисканні на кнопу
  3. ми маємо кнопці з пункту 1 сказати що коли на наї клікають вона має запустити код з пунту 2
*/

// 1. знайти кнопку
// const buttons = document.getElementsByTagName('button');
// const [clickMeBtn] = buttons;

// 2. сказати що робити
// function showMessage () {
//   alert('You clicked on button');
// }

// 3. при кліку на 1 заупустити 2
/*
  target.addEventListener(type, listener);

  target - той, з ким відбудеться подія
  type - рядок, який каже яка саме подія має трапитися
  listener - функція, яка запуститься браузером коли подія відбудеться з target
*/
// clickMeBtn.addEventListener('click', showMessage);

/*
  зробити в html файлі кнопку
  при натисканні на кнопку ви маєта алертом виводити кількість кліків на цю кнопку

  * приховати від зовншього коду кількість кліків
*/
// 1. знайти кнопку
const [clickMeBtn] = document.getElementsByTagName('button');

// 2. сказати що робити
// let clicks = 0;
let clocks = 'wristwatch';

function createHandleButtonClick() {
  let clicks = 0;

  function handleButtonClick() {
    alert(++clicks);
  }

  return handleButtonClick;
}

const handleButtonClick = createHandleButtonClick();

// 3. при кліку на 1 заупустити 2
// clickMeBtn.addEventListener('click', createHandleButtonClick());
clickMeBtn.addEventListener('click', handleButtonClick);

/*
  методи пошуку елементів у ДОМ-дереві
  
  document.getElementsByTagName('button') 
    повертає масивоподібну колекцію всіх елементів на сторінці з вказаним тегом
  
  document.getElementsByClassName('class')
    повертає масивоподібну колекцію всіх елементів на сторінці з вказаним класом
  
  document.getElementsByName('someName')
    повертає масивоподібну колекцію всіх елементів на сторінці з вказаним

  + document.getElementById('someId')
    повертає перший елемент на сторінці з вказаним айдішніком

  + document.querySelector() - повертає перший елемент на сторінці з вказаним css селектором 
  + document.querySelectorAll() - повертає масив елементів на сторінці з вказаним css селектором 
*/

// повертає масивоподібну колекцію всіх елементів на сторінці з вказаним класом
const [firstErrorBtn] = document.getElementsByClassName('error');

// повертає масивоподібну колекцію всіх елементів на сторінці з вказаним
const inputs = document.getElementsByName('someInputName');

// повертає перший елемент на сторінці з вказаним айдішніком
const select1 = document.getElementById('select-1');

// повертає перший елемент на сторінці з вказаним css селектором
const input = document.querySelector('body>input');

// повертає масив елементів на сторінці з вказаним css селектором
const btns = document.querySelectorAll('button');
