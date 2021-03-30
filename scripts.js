/**
 * Unit 4.5 Arrays Period 2 Classwork
 * Use the following arrays to complete the exercises. Each problem builds on the ones before it.
 * Make sure to double check your work after each problem by printing the result to the console.
 **/

let animals = ["cat", "dog", "bird", "turtle", "lizard"];
let sports = ["basketball", "football", "tennis", "soccer", "hockey"];
let numbers = [5, 10, 15, 20, 25, 30, 35];

/**
 * 1
 * Add "lion" to the end of the animals array
 */
    let newAnimals = animals.push("lion");
    console.log(animals);

/**
 * 2
 * Remove "cat" from the beginning of the animals array
 */
    let noCat = animals.shift();
    console.log(animals);

/**
 * 3
 * How many elements are in the elements array now? Print to the console
 */
    console.log(animals.length)
    //5

/**
 * 4
 * Print to the console the element at the 2nd index of the animals array
 */
    console.log(animals[2]);
    //turtle


/**
 * 5
 * Add "volleyball" and "gymnastics" to the beginning of the sports array
 */
    let moreSports = ["volleyball", "gymnastics"];
    let allSports = moreSports.concat(sports);
    console.log(allSports);

/**
 * 6
 * What is the index of "soccer" in the sports array? Print to the console.
 */
    console.log(sports.indexOf("soccer"));


/**
 * 7
 * Combine the numbers array and sports array into a new array called `combinedArray`. 
 * Print the `combinedArray` to the console
 */
    let combinedArray = numbers.concat(sports);
    console.log(combinedArray);

/**
 * 8
 * Reverse the elements in `combinedArray` you created in step 7. Print the reversed array to the console.
 */
    console.log(combinedArray.reverse());


/**
 * 9
 * How many elements are in `combinedArray`? Print to the console
 */
    console.log(combinedArray.length);
    //12

/**
 * 10
 * Remove the last element of element and store the result in a new variable called `lastElement`.
 * Print `lastElement` to the console. What is this value?
 */
    let lastElement = combinedArray.pop();
    console.log(lastElement);
    //5

/**
 * 11
 * Check to see if the animals array contains "lizard" and print the result to the console
 */
console.log(animals.includes("lizard"));
//true

/**
 * 12
 * Check to see if the sports array contains "water polo" and print the result to the console
 */
console.log(sports.includes("water polo"));
//false

/**
 * 13
 * Check to see if the numbers array is empty. Print to the console true if the 
 * array is empty, otherwise print false
 */


if (numbers.length == 0) {
    console.log(true);
} else {
    console.log(false);
}



/**
 * 14
 * Using array literal syntax, create a new array called myFavoriteFoods with 5 of your favorite foods
 * Print to the console your myFavoriteFoods array
 */
 
 let myFavoriteFoods = [
     "sushi",
     "noodles",
     "tacos",
     "burgers",
     "soup",
 ]

 console.log(myFavoriteFoods);
/**
 * 15
 * Loop through the `myFavoriteFoods` array and print each element to the console as a numbered list
 */
for (let i = 0; i < myFavoriteFoods.length; i++) {
    console.log(i+1 + ". " + myFavoriteFoods[i]);
}




/***************************************************BONUS***************************************************/
/**
 * 16
 * Write a function called `addFive` that takes in an array of numbers, and adds 5 to each element of the array.
 * The function should return a new array without altering the original array.
 */

 const addFive = (array) => {
let new
    const numbers5 = numbers += 5;
    return numbers5;
 };

 console.log(numbers5);

 




/**
 * 17
 * Write a function called `transformLastLetter` that takes in an array of strings, changes the LAST 
 * letter of each element in the array to uppercase, and returns the newly transformed array
 */


/**
 * 18
 * Write a function called `reverseArray` that takes in an array as a parameter and reverses the order of 
 * elements in the array WITHOUT using the built in JavaScript method. Return the new array.
 */


/**
 * 19 - CHALLENGE - Question 18 will return a reversed array without modifying the original array. 
 * Can you write a function to reverse an array in place, so that the original array is modified?
 */

