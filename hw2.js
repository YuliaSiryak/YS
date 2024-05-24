var prompt = require('prompt');

  //
  // Start the prompt
  //
  prompt.start();
  
  prompt.get(['age'], function (err, result) {
    let age = Number(result.age);
    if (age > 1 && age < 5 || age > 21 && age < 25 || age > 31 && age < 35 || age > 41 && age < 45 || age > 51 && age < 55 || age > 61 && age < 65) {
      console.log(age + " роки")
    } else if (age > 4 && age < 21 || age > 24 && age < 31 || age > 34 && age < 41 || age > 44 && age < 51 || age > 54 && age < 61 || age > 64 && age < 71) {
      console.log(age + ' років') // ви казали, що "або" не треба використовувати, але я так розумію, не можна для умови типу "2 або 3, або 4..."
    } else if (age % 10 === 1 && age !== 11) {
      console.log(age + " рік")
    }
    else { 
    console.log("Введіть коректне число")
    }
  });
 