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

const food = prompt(`My favorite food is: `).toLowerCase().trim();
const drink = prompt(`My favorite drink is: `).toLowerCase().trim();
const wifesFood = prompt(`My Wife's favorite food is: `).toLowerCase().trim();
const wifesDrink = prompt(`My Wife's favorite drink is: `).toLowerCase().trim();



if(food === wifesFood && drink === wifesDrink){ 
    function sameFavorite(){
        const mineAndWifesFdDrk = `Mine and my Wife's favorite food and drink are ${food}, and ${drink}.`;
        return mineAndWifesFdDrk;
    }

    console.log(sameFavorite());
} else if(food == wifesFood){
    function sameFavoriteTwo(){
        const mineAndWifesFdDrkTwo = `Mine and my Wife's favorite food is ${food}, our favorite drinks are ${drink} and ${wifesDrink}.`;
        return mineAndWifesFdDrkTwo;
    }

    console.log(sameFavoriteTwo());
} else if(drink == wifesDrink){
    function sameFavoriteThree(){
        const mineAndWifesFdDrkThree = `Mine and my Wife's favorite drink is ${drink}, our favorite foods are ${food} and ${wifesFood}.`;
        return mineAndWifesFdDrkThree;
    }

    console.log(sameFavoriteThree());
} else{
    

    function myFavorite(){
        const fdDrk = `My favorite food and drink are ${food} and a ${drink}.`; 
        return fdDrk;
    }
    function wifesFavorite(){
        const wFdDrk = `My Wife's favorite food and drink are ${wifesFood} and a ${wifesDrink}.`;  
        return wFdDrk
    }


console.log(`${myFavorite()}
${wifesFavorite()}`);
}