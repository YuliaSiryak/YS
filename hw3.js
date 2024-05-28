    let sum = 0;
let number = Number;
    for (let number = 1; number <= 100; number++) {
        if (number % 3 !== 0) {
            sum += number;
        }
    }
    
    console.log("Відповідь: " + sum);
