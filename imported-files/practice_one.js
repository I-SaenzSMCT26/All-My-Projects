const now = 2037;

const ageJonas = now - 1991;
const ageIsaac = now - 2018;
const ageHoward = now - 2019;
console.log(ageJonas, ageIsaac);

console.log(ageJonas * 2, ageIsaac / 2, 2**3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Isaac';
const lastName = 'Saenz';
console.log(firstName + ' ' + lastName);

let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageIsaac);
console.log(ageIsaac >= 18);

const isFullAge = ageIsaac >= 18;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let t, y;
t = y = 25 - 10  - 5;
console.log(x, y); 

const averageAge = (ageIsaac + ageJonas) / 2;
console.log(ageIsaac, ageJonas, averageAge)