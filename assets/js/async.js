// синхронний код

// console.log('first');

// console.log('second');

// // for(let i = 0; i < 1_500_000_000; i++) {}

// console.log('third');

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

// console.log(1);

// console.log(2);

const id = setTimeout(() => {
  // console.log(3);
}, 0);

// console.log(4);
// 1 2 4 3

// відміна таймаута по його id
clearTimeout(id);

const id2 = setTimeout(() => {
  // console.log(5000);
}, 5000);

setTimeout(() => {
  // clearTimeout(id2);
  // console.log(1000);
}, 1000);

// setInterval - встановлює інтервал, який буде працювати до зупинки запускаючи коллбек
const intervalId = setInterval(() => {
  // console.log('interval');
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

function countInterval() {
  let i = 0;

  const intervalId = setInterval(() => {
    // console.log(++i);
    if (i >= 10) {
      console.timeEnd('Interval');
      clearInterval(intervalId);
    }
  }, 100);
}

// console.time('Interval');
countInterval();

function countTimeout(i = 0) {
  if (i < 10) {
    setTimeout(() => {
      // console.log(++i);
      countTimeout(i);
    }, 100);
  } else {
    console.timeEnd('Timeout');
  }
}

// console.time('Timeout');
countTimeout();

const userData = {
  email: 'test@test.test',
  password: '12345admin',
  id: 5,
  address: {
    city: 'Zaporizhzhia',
    country: 'Ukraine',
  },
  friends: [],
  isMale: true,
  someImportantData: null,
  // someSymbol: Symbol('test me plz'),
  // age: undefined,
  // isAdult : function (){
  //   return this.age >= 18;
  // }
};

// серіалізація - процеc перетворення даних у вигляд зручний для передачі
const jsonString = JSON.stringify(userData);
/*
    відмінності JSON та JS
  1. рядки в JSON можуть бути тільки подвійними лапками
  2. ключі в об'єктах мають бути рядками
  3. відсутнівсть висячих ком у кінці об'єктів та масивів
*/

// десереалізація - процес відновлення даних із зручного для передачі формату
const userData2 = JSON.parse(jsonString);

// console.log(userData);
// console.log(userData2);

// console.log(userData === userData2); // false

// види копій об'єктів у JS

const posts = [
  { id: 1, title: 'bla', likes: 50 },
  { id: 2, title: 'bla bla', likes: 15 },
  { id: 3, title: 'bla bla bla', likes: 800 },
];

// поверхнева копія об'єкта - копія робиться тільки для самої змінної об'єкта
// властивості переносятся без змін
const postsCopy1 = posts.slice();
const postsCopy2 = [...posts];

posts === postsCopy1; // false
// console.log(posts[1] === postsCopy1[1]); // true

// глибока копія - копія робиться для всіх речей в об'єкті

const temp = JSON.stringify(posts);
const postsCopy3 = JSON.parse(temp);

postsCopy3[2] === posts[2]; // false

const postsCopy4 = JSON.parse(JSON.stringify(posts));

const postsCopy5 = structuredClone(posts);
postsCopy5[0] === posts[0]; //false

function test() {
  // console.log(1);

  function test2() {
    // console.log(2);
  }

  test2();

  // console.log(3);
}

setTimeout(test, 5000);

// типовий асинхроний код в JS у 2014 році

function readFile() {}

function writeFile() {}

// error first callback
readFile('../test.json', function callback(err, fileData) {
  if (err) {
    throw err;
  }

  // console.log(fileData);

  readFile('../test.json', function callback(err, fileData2) {
    if (err) {
      throw err;
    }

    readFile('../test.json', function callback(err, fileData3) {
      if (err) {
        throw err;
      }
      const newData = fileData + fileData2 + fileData3;

      writeFile('../new-test.json', 'utf-8', newData, function callback(err) {
        if (err) {
          throw err;
        }

        // console.log('ми записали файл!');
      });
    });
  });
});

// Promise - обіцянка, сучасний спосіб написання асинхронного коду у JS
// вирішує проблему коллбек хела
/*
  проміс - спеціальний об'єкт містить результат проботи асинхронної операції

  у об'єкта проміса є 3 можливих стани
    - pending (очікується) - очікуємо виконання асинхроної операцїї
    - fullfiled (виконаний) - асинхрона операці була успішно завершена
    - rejected (відхилений) - у промісі сталася помилка
  
  промім може знаходитися у 2 з цих трьох станів
    pending -> fullfiled
    pending -> rejected
*/

// створення проміса
// console.log('before executor');
const promise = new Promise(executor);

function executor(resolve, reject) {
  // console.log(resolve);
  // console.log(reject);

  // console.log('executor');

  // функціія яка сигналізує що дія виконана успішно
  // і аргумент цієї функції буде результучим даними у промісі
  setTimeout(() => {
    // resolve('test string');
  }, 450);

  // функціія яка сигналізує що дія виконана з помилкою
  // і аргумент цієї функції буде результучим даними у промісі
  setTimeout(() => {
    reject('bad stuff');
  }, 500);
}

// console.log('after executor');

// then - метод який дозволить зреагувати на завершення асинхронної операції
promise.then(
  // fullfilledCallback запускається при успішному виконання проміса
  function fullfilledCallback(promiseResult) {
    // console.log('promise fullfilled');
    // console.log(promiseResult); // promiseResult це результат роботи проміса
  },
  // rejectedCallback запускається при провальному виконанні проміса
  function rejectedCallback(error) {
    // console.log('promise rejected');
    // console.log(error); // error це дані про помилку
  }
);

// catch - метод для обробки помилок в промісах
promise.catch(function rejectedCallback(error) {
  // console.log('promise rejected and catched');
  // console.log(error); // error це дані про помилку
});

/*
  Створити через конструктор проміс.
  Проміс має у 50% випадків виконуватися успішно
  а в інший випадках - провалюватися
  через методи then i catch обробіть
  обидва випадки
*/

// const mousePromise = new Promise((res, rej) => {
//   if (Math.random() > 0.5) {
//     res('миша жива');
//   } else {
//     rej('миша майже жива');
//   }
// });

// mousePromise.then(
//   (message) => console.log(message)
//   // (errorMessage) => console.error(errorMessage)
// );

// mousePromise.catch((errorMessage) => console.error(errorMessage));

// const fetchResult = fetch('../../test.json');

// const promise1 = fetchResult.then((response) => {
//   // console.log(response);

//   // асинхроний метод десереалізації даних
//   const resJsonResult = response.json();

//   // resJsonResult.then((data) => {
//   //   console.log(data);
//   // });

//   // це опиниться у виконаному promise1
//   // return 42;
//   return resJsonResult;
// });

// const promise2 = promise1.then((data) => {
//   console.log(data); // user object

//   return {
//     ...data,
//     isOnline: true
//   }
// });
const loader = document.getElementById('loader');

fetch('../../test.json')
  .then(
    (response) => {
      const resJsonResult = response.json();
      return resJsonResult;
    }
  )
  .then(
    (data) => {
      console.log(data); // user object

      return {
        ...data,
        isOnline: true,
      };
    },
    // (error) => {
    //   // console.log(error);

    //   return { id: -1 };
    // }
  )
  .then((user) => {
    console.log(`user id: ${user.id}`);
    // loader.remove();
  })
  .catch((error) => {
    console.log(error);
    document.body.append('No user detected')
    // loader.remove();
  }).finally(() => {
    loader.remove();
  });
