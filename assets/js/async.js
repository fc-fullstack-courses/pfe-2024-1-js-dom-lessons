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

console.log(sum());
