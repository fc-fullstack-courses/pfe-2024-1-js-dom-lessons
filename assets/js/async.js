// синхронний код

console.log('first');

console.log('second');

// for(let i = 0; i < 1_500_000_000; i++) {}

console.log('third');

// асинхроний код
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  // while(true) {}
});


function sum() {
  // debugger;
  return 1 + 1;
}

// console.log(sum());

// setTimeout - функція встановлення зворотнього відліку
// setTimeout(function callback() {
//   console.log('delayed');
// }, 1000);


console.log(1);

console.log(2);

const id = setTimeout(() => {
  console.log(3);
}, 0);

console.log(4);
// 1 2 4 3

// відміна таймаута по його id
clearTimeout(id);

const id2 = setTimeout(() => {
  console.log(5000);
}, 5000);

setTimeout(() => {
  // clearTimeout(id2);
  console.log(1000);
}, 1000);

// setInterval - встановлює інтервал, який буде працювати до зупинки запускаючи коллбек
const intervalId = setInterval(() => {
  console.log('interval');
}, 1500);

// зупинка інтервалу
clearInterval(intervalId);

/*
  Створити функцію, яка буде послідовно відображати числа у консолі від 1 до 10
  Числа мають показуватися з інтервалом 100мс

  1 ...
  2 ...
  3 ...
  4

  можна виршіти двома шляхами:
    setInterval - треба якось вчасно зупинити інтервал по якійсь умові
    setTimeout - рішення буде засновано на рекурсії яка буде запускати таймаути поки певна умова істинна
*/