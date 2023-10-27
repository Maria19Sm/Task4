const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let array = [];

rl.question('Введіть довжину масиву: ', (length) => {
  const lengthArray = parseInt(length);

  if (isNaN(lengthArray)) {
    console.log('Введіть числове значення для довжини масиву.');
    rl.close();
    return;
  }

  rl.question('З якого числа почнеться масив: ', (initial) => {
    const initialNumber = parseInt(initial);

    if (isNaN(initialNumber)) {
      console.log('Введіть числове значення для початкового числа.');
      rl.close();
      return;
    }

    for (let i = initialNumber; i < initialNumber + lengthArray; i++) {
      array.push(i);
    }

    console.log('Згенерований масив:', array);
    rl.close();
  });
});
