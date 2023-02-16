let numbers = [120, 90, 130, 70, 100];
let sum = 0;
let count = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  if (numbers[i] > 100) {
    count++;
  }
}

document.write(` La suma de los números es ${sum},`);
document.write(` hay ${count} números mayores de 100`);
