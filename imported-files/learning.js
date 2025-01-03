'use strict';

// const now = 2037;

// const ageJonas = now - 1991;
// const ageIsaac = now - 2018;
// const ageHoward = now - 2019;
// console.log(ageJonas, ageIsaac);

// console.log(ageJonas * 2, ageIsaac / 2, 2**3);
// //2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Isaac';
// const lastName = 'Saenz';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5; //15
// x += 10; //x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// console.log(x);

// //Comparison operators
// console.log(ageJonas > ageIsaac);
// console.log(ageIsaac >= 18);

// const isFullAge = ageIsaac >= 18;

// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

// let t, y;
// t = y = 25 - 10  - 5;
// console.log(x, y); 

// const averageAge = (ageIsaac + ageJonas) / 2;
// console.log(ageIsaac, ageJonas, averageAge)

// const firstName = 'Isaac';
// const job =  'student';
// const birthYear = 2000;
// const year = 2024;

// const isaac = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(isaac);

// const isaacNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(isaacNew);

// console.log(`Just a regular string...`);


// /*this is another example of how using back ticks can be a lot more effecient than using regular quotes*/

// //these are the regular quotes
// console.log('string with\n\ multiple\n\ lines');

// //these are the back ticks
// console.log(`String 
// multiple 
// lines`);



// const age = 14;
// // const isOldEnough = age > 15;

// if(age >= 15) {
//     console.log('Ivaan can start driving license');   
// } else {
//     const yearsLeft = 15 - age;
//     console.log(`Ivaan has ${yearsLeft} year left.`)
// }

// const birthYear = 200;

// let century;
// if (birthYear <= 2000) {
//     century = 20 + 'th';
// } else {
//     century = 21 + "st";
// }

// console.log(`${century} century`);

// const massMark = 78;
// const heightMark = 1.95;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// const roundBMIMark = Math.round(BMIMark * 100) / 100;
// const roundBMIJohn = Math.round(BMIJohn * 100) / 100;

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${roundBMIMark}) is higher than John's BMI (${roundBMIJohn}).`);
// } else {
//     console.log(`John's BMI (${roundBMIJohn}) is higher than Mark's BMI (${roundBMIMark}).`)
// }


// // type conversion
// const inputYear = '1991';
// console.log(Number(inputYear) + 18);

// console.log(Number('Isaac'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old.');
// console.log('23' - '10' - 3);
// console.log('23' / '2');


// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Isaac'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 649090;
// if (money >= (400000)) {
//     console.log("You are strapped for cash!")
// } else {
//     console.log("Go get a job!")
// }

// const age = 18;
// if (age === 18) console.log(`You just became an adult :D`);

// if (age == 18) console.log(`You just became an adult :D`);

// const favorite = Number(prompt(`What's your favorite number?`));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 30) {
//     console.log(`Cool! 30 is an amazing number :)`)
// } else if (favorite === 24){
//     console.log(`Hey! That's my age :D`)
// } else {
//     console.log(`That's a nice number ;)`)
// }

// const temp = 1;

// if (temp <= 0 || temp > 30) {
//     console.log(`The weather is BAD`);    
// } else{
//     console.log(`The weather is GOOD`);
// }

// const isSunny = false;

// if (!isSunny) {
//     console.log(`It is CLOUDY`);
// } else {
//     console.log(`It is SUNNY`)
// }

// const hasDriversLicense = false; // A
// const hasGoodVision = false; // B

// console.log(hasDriversLicense || hasGoodVision);
// console.log(hasDriversLicense && hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(hasDriversLicense === true && hasGoodVision === true){
//     console.log(`Ivaan is able to drive`);
// } else if(hasDriversLicense === true && hasGoodVision === false || hasDriversLicense === false && hasGoodVision === true){
//     console.log(`Ivaan is not able to drive`);
// } else{
//     console.log(`Ivaan definitely should not be driving 😅`)
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired){
//     console.log(`Ivaan is able to drive.`);
// } else{
//     console.log(`Someone else should drive.`)
// }

// const scoreDolphins = (97 + 112 + 88) / 3;
// const scoreKoalas = (109 + 95 + 69) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){ // 1
//     console.log(`Dolphins win the trophy 🐬`);
// } else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){ // 2
//     console.log(`Koalas win the trophy 🐨`);
// } else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){ // 3
//     console.log(`Both win the trophy 😎`);
// } else{
//     console.log(`Nobody wins the trophy 😭`);
// }

// // 1: scoreDolphins > scoreKoalas && scoreDolphins >= 100

// // 2: scoreKoalas > scoreDolphins && scoreKoalas >= 100

// /* 3: scoreDolphins === scoreKoalas &&(this first '&&' is like the coordinating conjunction word 'but') 
// scoreDolphins >= 100 &&(this second '&&' is like the conjunction word 'and') scoreKoalas >= 100

// so it actually would*/

// const day = 'monday';

// switch(day){
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend 😁👍')
//         break;
//     default:
//         console.log('Not valid, try again')
// }

// const day = 'monday';


// if(day === 'monday'){
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup`);
// } else if(day === 'tuesday'){
//     console.log(`Prepare theory videos`);
// } else if(day === 'wednesday' || day === 'thursday'){
//     console.log(`Write some code examples`);
// } else if(day === 'friday'){
//     console.log(`Record videos`);
// } else if(day === 'saturday' || day === 'sunday'){
//     console.log(`Enjoy the weekend 😁👍`);
// } else{
//     console.log(`Invalid input, please try again`);
// }

// age >= 21 ? console.log(`I like to drink wine 🍷`) :
// console.log('I like to drink water 💧');
/*the "?" is used in that exact spot in the line of code to initiate the
if else lines of code that come right after*/

// const age = 21;

// const drink = age >= 21 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// let drink2;
// if(age >= 21){
//     drink2 = 'wine 🍷';
// } else{
//     drink2 = 'water 💧';
// }

// console.log(drink2);

// console.log(`I like to drink ${age >= 21 ? 'wine 🍷' : 'water 💧'}`);

// /*if you want to use a statement inside of a template literal like "${}"
// , you need to use conditional (ternary - made up of three parts.) operators like this: 

// console.log(`I like to drink ${age >= 21 ? 'wine 🍷' : 'water 💧'}`);*/

// const bill = 600; /* The prompt has to be inside of the number 
// declaration because by default the prompt produces a string. This forces the prompt to produce a number value */

// if(bill <= 9){
//     console.log(`Tip not worth it; don't bother leaving one 😅.`);
// } else{
//     const tip = 
//     bill > 600 && bill <= 1500 ? bill * .28 : 
//     bill > 300 && bill <= 600 ? bill * .2  : 
//     bill >= 50 && bill <= 300 ? bill * .15 : 
//     bill < 50 && bill >= 10 ? bill * .09 : 
//     0;

//     const tpRnd = Math.round(tip * 100) / 100; /* This is to round the tip calculation; "tpRnd" is shortened for tip rounded. */

//     console.log(`Bill: $${bill}`);
//     console.log(`Tip: $${tpRnd}`);
//     console.log(`Total: $${bill + tpRnd}`);
// }

// function logger(firstName, lastName){
//     const name = `My name is ${firstName} ${lastName}.`;
//     return name;
// }

// // calling / running / invoking function

// console.log(logger('Kelsey', 'Saenz'));





// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(`${appleJuice} = apple juice`);

// const orangeJuice = fruitProcessor(0, 4);
// console.log(`${orangeJuice} = orange juice`);

// const appleOrangeJuice = fruitProcessor(1, 4);
// console.log(`${appleOrangeJuice} = apple-orange juice`);


// const food = prompt(`My favorite food is: `).toLowerCase().trim();
// const drink = prompt(`My favorite drink is: `).toLowerCase().trim();
// const wifesFood = prompt(`My Wife's favorite food is: `).toLowerCase().trim();
// const wifesDrink = prompt(`My Wife's favorite drink is: `).toLowerCase().trim();



// if(food === wifesFood && drink === wifesDrink){ 
//     function sameFavorite(){
//         const mineAndWifesFdDrk = `Mine and my Wife's favorite food and drink are ${food}, and ${drink}.`;
//         return mineAndWifesFdDrk;
//     }

//     console.log(sameFavorite());
// } else if(food == wifesFood){
//     function sameFavoriteTwo(){
//         const mineAndWifesFdDrkTwo = `Mine and my Wife's favorite food is ${food}, our favorite drinks are ${drink} and ${wifesDrink}.`;
//         return mineAndWifesFdDrkTwo;
//     }

//     console.log(sameFavoriteTwo());
// } else if(drink == wifesDrink){
//     function sameFavoriteThree(){
//         const mineAndWifesFdDrkThree = `Mine and my Wife's favorite drink is ${drink}, our favorite foods are ${food} and ${wifesFood}.`;
//         return mineAndWifesFdDrkThree;
//     }

//     console.log(sameFavoriteThree());
// } else{
    

//     function myFavorite(numFd, numDrk){

        
    
//         const fdDrk = numFd && numDrk >= 2 ? 
//         `My favorite food and drink are ${numFd} ${food}s and ${numDrk} ${drink}s.` : 
//         `My favorite food and drink are ${food} and a ${drink}.`;
//         return fdDrk;
//     }
//     function wifesFavorite(numFd2, numDrk2){
//         const wFdDrk = numFd2 && numDrk2 >= 2 ? 
//         `My Wife's favorite food and drink are ${numFd2} ${wifesFood}s and ${numDrk2} ${wifesDrink}s.` : 
//         `My Wife's favorite food and drink are ${wifesFood} and a ${wifesDrink} 😁.`
//         return wFdDrk
//     }

//     console.log(`${myFavorite(1, 1)}
// ${wifesFavorite(1, 1)}`);
// }

// const food = prompt(`My favorite food is: `).toLowerCase().trim();
// const drink = prompt(`My favorite drink is: `).toLowerCase().trim();
// const wifesFood = prompt(`My Wife's favorite food is: `).toLowerCase().trim();
// const wifesDrink = prompt(`My Wife's favorite drink is: `).toLowerCase().trim();



// if(food === wifesFood && drink === wifesDrink){ 
//     function sameFavorite(){
//         const mineAndWifesFdDrk = `Mine and my Wife's favorite food and drink are ${food}, and ${drink}.`;
//         return mineAndWifesFdDrk;
//     }

//     console.log(sameFavorite());
// } else if(food == wifesFood){
//     function sameFavoriteTwo(){
//         const mineAndWifesFdDrkTwo = `Mine and my Wife's favorite food is ${food}, our favorite drinks are ${drink} and ${wifesDrink}.`;
//         return mineAndWifesFdDrkTwo;
//     }

//     console.log(sameFavoriteTwo());
// } else if(drink == wifesDrink){
//     function sameFavoriteThree(){
//         const mineAndWifesFdDrkThree = `Mine and my Wife's favorite drink is ${drink}, our favorite foods are ${food} and ${wifesFood}.`;
//         return mineAndWifesFdDrkThree;
//     }

//     console.log(sameFavoriteThree());
// } else{
    

//     function myFavorite(){
//         const fdDrk = `My favorite food and drink are ${food} and a ${drink}.`; 
//         return fdDrk;
//     }
//     function wifesFavorite(){
//         const wFdDrk = `My Wife's favorite food and drink are ${wifesFood} and a ${wifesDrink}.`;  
//         return wFdDrk
//     }


// console.log(`${myFavorite()}


// ${wifesFavorite()}`);
// }



// /*this is calling a funcition inside a function*/
// const cutFruitPieces = function(fruit){
//     return fruit * 4;
// };

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple, and ${orangePieces} pieces of orange.`;
//     return juice;
// };

// console.log(fruitProcessor(2, 5));

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function(birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0){
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         return -1;
//         console.log(`${firstName} has already retired 🎉`);
//     }   
// }

// console.log(yearsUntilRetirement(2000, 'Isaac'));
// console.log(yearsUntilRetirement(1950, 'Jones'))




// function calcAge(birthYear){ // This is a function declaration - Function that can be used before it's declared.
//     return 2037 - birthYear;
// }

// const calcAge = function(birthYear){ // This is a function expression - essentially a fucntion value stored in a variable.
//     return 2037 - birthYear;
// }

// const calcAge = birthYear => 2037 - birthYear; // Arrow function - great for a quick one-line functions. has no this keyword (more later... )

const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(12, 33, 13);
let scoreTexans = calcAverage(66, 57, 46);


const checkWinner = function(avgDolphins, avgTexans){
    if(avgDolphins >= 2 * avgTexans){
        console.log(`Miami Dolphins win!! - ${avgDolphins} to ${avgTexans}`);
    } else if(avgTexans >= 2 * avgDolphins){
        console.log(`Houston Texans win!! - ${avgTexans} to ${avgDolphins}`);
    } else{
        console.log(`No team wins... 😥`)
    }
}

let rndScoreDolphins = Math.round(scoreDolphins * 100) / 100;
let rndScoreTexans = Math.round(scoreTexans * 100) / 100;

console.log(`${rndScoreDolphins} = Dolphins score
${rndScoreTexans} = Texans Score`);

console.log(checkWinner(rndScoreDolphins, rndScoreTexans));