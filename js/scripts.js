// scripts.js

var a = prompt('wpisz wartość a');
var b = prompt('wpisz wartość b');
var result = (a * a) + (2 * a * b) - (b * b);

if (result > 0) {
    alert('wynik dodatni');
    console.log('wynik dodatni');
} else if (result < 0) {
    alert('wynik ujemny');
    console.log('wynik ujemny');
} else {
    alert('wynik jest równy zero');
    console.log('wynik jest równy zero');
}
