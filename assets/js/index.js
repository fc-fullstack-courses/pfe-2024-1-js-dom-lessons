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
// console.log(document);

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
// clickMeBtn.addEventListener('click', handleButtonClick);

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

// h1
// const [,,h1] = document.getElementsByTagName('h1');
// const h1 = document.querySelector('section > h1');

// img
// const [, img] = document.getElementsByTagName('img');
// const img = document.querySelector('section+img');
const img = document.querySelector(`img[alt="Find ME"]`);

// p
const p = document.querySelector('.section>p');

/*
  на кнопку ресет повісити функцію-слухач яка має виводити повідомлення
    повідомлення має показатися тільки при першому натисканні на кнопку
*/
const resetBtn = document.getElementById('resetBtn');

// рішення 1 - через зовнішню змінну
// let isMessageShown = false;

// function handleResetClick() {
//   // console.log('click');
//   if(!isMessageShown) {
//     alert('ви клікнули на кнопку ресет');
//     isMessageShown = true;
//   }
// }

// resetBtn.addEventListener('click', handleResetClick);

// рішення 2 - зробити одноразовим через об'єкт налаштувань addEventListener
// function handleResetClick() {
//   console.log('click');
//   alert('ви клікнули на кнопку ресет');
// }

// resetBtn.addEventListener('click', handleResetClick, { once: true });

// рішення 3 - removeEventListener
function handleResetClick(event) {
  // об'єкт події, що трапилася
  // console.log(event);

  // посилання на об'єкт, з яким сталася подія
  // console.log(event.target);

  // посилання на об'єкт, чий оборбник було запущено
  console.log(event.currentTarget);

  // прибираємо слухач після того як він відпрацював
  // передаємо тип події та посилання на ту саму функцію
  // resetBtn.removeEventListener('click', handleResetClick);
}
const container = document.querySelector('.container');

function stopEvent(event) {
  console.log(event);
  // припиняеть подільший запуск обробників подій
  event.stopPropagation();
}

// resetBtn.addEventListener('click', handleResetClick);
// container.addEventListener('click', handleResetClick);
// container.addEventListener('click', stopEvent, true);
// document.body.addEventListener('click', handleResetClick);
// document.addEventListener('click', handleResetClick);

/*
  true - запуск на етапі занурнення 
  false - на етапі всплиття
*/
// resetBtn.addEventListener('click', handleResetClick, false);
// container.addEventListener('click', handleResetClick, true);
// document.body.addEventListener('click', handleResetClick, { capture: true });
// document.addEventListener('click', handleResetClick, false);
/*
  resetBtn.addEventListener('click', handleResetClick, false);
  container.addEventListener('click', handleResetClick, true);
  document.body.addEventListener('click', handleResetClick, false);
  document.addEventListener('click', handleResetClick, true);
1. document
2. контейнер
3. resetBtn
4. body

*/
/*
  Фази обробки подій:
    1. дивиться з ким сталася наша подія (занурення)
    2. найглибший елемент у дереві з яким подія трапилась (target)
    3. браузер запуская обробнки подій починаючи з найглибшого до найпершого (всплиття)
*/

// resetBtn.addEventListener('click', function testFunc() {
//   console.log('testing');
// });

// dispatchEvent - симулює подію на якомусь елементі

const fakeClickEvent = new MouseEvent('click');

// resetBtn.dispatchEvent(fakeClickEvent);

/*
  Node (вузол) - основний будівельний блок ДОМу. 
  Всі елементи, атрибутита текст у ДОМі робляться через вузли

  Основні властивості вузлів:

  node.baseURI - URL адреса сайту

  node.childNodes - список всіх дитячіх вузлів поточного вузла.
  node.firstChild - перший дитячий вузол
  node.lastChild - останній дитячий вузол
  node.nextSibling - посилання на наступний вузол після цього
  node.previousSibling - посилання на поперденій вузол 
  
  node.parentNode - повертає батьківський вузол
  node.parentElement - повертає батьківський елемент

  node.textContent - містить текстовий вміст цього вузла. Дозволяє міняти текст вузла / елемента

*/

/*
  в HTML зробити кнопку та параграф з текстом

  При натисканні на кнопку промптом спитати у користувача число
  після цього відобразити у параграфі квадрат цього числа
*/

const displayParagraph = document.getElementById('displayParagraph');
const squareBtn = document.querySelector('#squareBtn');

function handleSquareBtnClick() {
  const number = +prompt('Введіть число');

  // if(!isNaN(number)) {
  displayParagraph.textContent = `Результат: ${number * number}`;
  // } else {
  //   displayParagraph.textContent = `Введіть корректне число`;
  // }
}

squareBtn.addEventListener('click', handleSquareBtnClick);

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btnContainer = document.getElementById('btnContainer');

// function logText1 () {
//   console.log(btn1.textContent);
// }
// function logText2 () {
//   console.log(btn2.textContent);
// }
// function logText3 () {
//   console.log(btn3.textContent);
// }
// function logText4 () {
//   console.log(btn4.textContent);
// }

function logText(e) {
  // console.log(e.target);
  // console.dir(e.target);
  if (e.target.tagName === 'BUTTON') {
    console.log(e.target.textContent);
  }
}

// btn1.addEventListener('click', logText);
// btn2.addEventListener('click', logText);
// btn3.addEventListener('click', logText);
// btn4.addEventListener('click', logText);
btnContainer.addEventListener('click', logText);

/*
  Створити дів, всередині якого будуть знаходитися кнопки
  текстом яких будуть назви тем
  ('світла', 'темна', ...)
  також зробити параграф в якому буде написано назву поточної теми

  написати функцію-слухач яка буде міняти текст параграфа в залежності від
  того, на яку кнопку перемикання теми ви натиснули
  обробник має висіти тільки на одному елементі
*/

const themeDisplay = document.querySelector('#themeDisplay');
const themeContainer = document.querySelector('#themeContainer');

themeContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    themeDisplay.textContent = `Поточна тема: ${event.target.textContent}`;
  }
});

/*
  Форми
*/

const formSumbitBtn = document.getElementById('formSumbitBtn');
const form = document.getElementById('form');

// formSumbitBtn.addEventListener('click', (e) => {
//   console.log('test');
//   e.preventDefault();
// });

// submit - подія відправки форми
form.addEventListener('submit', (e) => {
  // зупинка стандартної поведінки браузера при виконанні події
  e.preventDefault();
  // console.log('form submit event');
  // console.log(e);

  const { target: formElement } = e;

  // всі інтерактивні елементи форми
  console.log(formElement.elements);

  // console.log(formElement.elements.inputName);
  const formInput = formElement.elements.inputName;
  console.log(formInput);

  /*
    отримати значення, яке було введено в інпут
  */
  console.log(formInput.value);

  // тут тексту не буде
  // console.log(formInput.textContent);

  // очистка даних у формі
  // formInput.value = '';
  formElement.reset();
});

/*
  створити формочку з інпутом та кнопкою відправки
  також поруч із формою має бути параграф з текстом

  користувач буде ввдоити в інпут числа

  при відправці форми у параграфі має відобразитися число у квадраті

  після відправки форми підчистити її

  * якщо користувач вводить некорректне число то у парагрфі написати що він
    має ввести нормане число
*/

const squareDisplay = document.getElementById('squareDisplay');
const squareForm = document.getElementById('squareForm');

squareForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const {
    target: {
      elements: { num },
    },
    target
  } = e;

  // value інпута завжди рядок
  // console.log(typeof num.value);

  const number = +num.value;

  if(isNaN(number)) {
    squareDisplay.textContent = `Введіть корректне число`;
  } else {
    squareDisplay.textContent = `Результат: ${Math.pow(num.value, 2)}`;
  }

  target.reset();
});

const imgSwitchBtn = document.getElementById('imgSwitchBtn');
const picture = document.getElementById('picture');

// const srcNode = document.createAttribute('src');

// picture.setAttributeNode(srcNode);

// srcNode.value = 'https://static.vecteezy.com/system/resources/thumbnails/024/646/930/small_2x/ai-generated-stray-cat-in-danger-background-animal-background-photo.jpg';

imgSwitchBtn.addEventListener('click', (e) => {

  // зміна атрибутів

  // 1. сеттери для унікальних атрибутів елемента / деяких глобальних атрибутів
  // picture.src = 'https://static.vecteezy.com/system/resources/thumbnails/024/646/930/small_2x/ai-generated-stray-cat-in-danger-background-animal-background-photo.jpg';
  // picture.alt = 'рудий кіт';

  // picture.id = 'cat';

  // picture.className = 'newClass1 newClass2';

  // picture.style = 'border: 5px solid red';

  // 2. через setAttribute
  // picture.setAttribute('src', 'https://static.vecteezy.com/system/resources/thumbnails/024/646/930/small_2x/ai-generated-stray-cat-in-danger-background-animal-background-photo.jpg');
  // picture.setAttribute('alt', 'рудий кіт');

  picture.setAttribute('id', 'cat');

  picture.setAttribute('style', 'border: 5px solid red');

  picture.setAttribute('my-attribute', 'test');

  // 3. через вузол-атрибут

  const srcNode = document.createAttribute('src');

  console.dir(srcNode);
  srcNode.value = 'https://static.vecteezy.com/system/resources/thumbnails/024/646/930/small_2x/ai-generated-stray-cat-in-danger-background-animal-background-photo.jpg';

  picture.setAttributeNode(srcNode);
});

/*
  ще деякі цікаві методи роботи з атрибутами:

  picture.hasAttribute('src') - перевірка наявності атрибута
  picture.getAttribute('src') - отримання значення атрибута
  picture.getAttributeNode('src') - отримати об'єкт вузла атрибута

  picture.removeAttribute('src') - прибирає атрибут з елемента
*/

/*
  створити картинку та кнопку
  також зробити масив в якому розмістити 2 посилання на якісь картинки (значення src)

  по натисканню на кнопку ваша картинка має перемикатися між цими двома src
*/
