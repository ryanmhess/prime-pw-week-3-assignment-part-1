console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('\n--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods

let favFoods = ['Curry', 'Ribs', 'Chicken Wings', 'French Fries', 'Burgers'];

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above

console.log('My favorite foods include:', favFoods);

// 2. Array.length - tells you how many items are in the array
console.log('\n--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array

console.log('The number of foods:', favFoods.length);

// 3. Accessing array items
console.log('\n--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 

console.log('The second food is', favFoods[1]);

// 3.b. TODO: Log the last animal in the array using it's array index 

console.log('The last food is', favFoods[4]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item

console.log('The last food is', favFoods[favFoods.length-1]);

// 4. Adding & Removing Array Items
console.log('\n--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array

favFoods.push('Tacos');
console.log('My favorite foods increased, the new list includes:', favFoods);

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array

let oldFavFood = favFoods.pop();
console.log('I ate too many', oldFavFood, 'and removed them from my list of favorties');
console.log('My updated favorite foods include:', favFoods);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array

favFoods.unshift('French Omelette');
console.log('After watching the show called Julia, I added', favFoods[0], 'to my list of foods which now consists of:', favFoods);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array

oldFavFood = favFoods.shift();
console.log('I ended up using way to much butter making my', oldFavFood);
console.log('So, my wife says I need to cut back. My new fav food list includes:', favFoods); 

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.

favFoods[1] = 'Gyros';
console.log('Ribs are getting expensive so I replaced them on my list with', favFoods[1]);
console.log('My new favorite food list include:', favFoods);

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.

favFoods.sort();
favFoods.reverse();
console.log('My favorite foods in reverse alphabetical order are:', favFoods);

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.

let newList = favFoods.join(' and ');
console.log(newList);

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']

let bestList = favFoods.concat(animalArray);
console.log('The best list includes:', bestList);