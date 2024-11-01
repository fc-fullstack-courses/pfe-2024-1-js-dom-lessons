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
const buttons = document.getElementsByTagName('button');
const [clickMeBtn] = buttons;

// 2. сказати що робити 
function showMessage () {
  alert('You clicked on button');
}

// 3. при кліку на 1 заупустити 2
/*
  target.addEventListener(type, listener);

  target - той, з ким відбудеться подія
  type - рядок, який каже яка саме подія має трапитися
  listener - функція, яка запуститься браузером коли подія відбудеться з target
*/
clickMeBtn.addEventListener('click', showMessage);
