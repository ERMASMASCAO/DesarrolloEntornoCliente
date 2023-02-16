var numbers = [120, 90, 130, 70, 100];
var sum = 0;
var count = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (numbers[i] > 100) {
        count++;
    }
}
document.write("La suma de los n\u00FAmeros es ".concat(sum));
document.write("Hay ".concat(count, " n\u00FAmeros mayores de 100"));
