// iterate over the array of movie names
const movies = ["Gladiator", "Kingdom of Heaven", "Sister Act", "The Lion King", "Doctor Strange"];
movies.forEach(movie => console.log(movie));

// convert the array of car manufacturers 
const manufacturers = ["BMW", "Ford", "Opel", "Mercedes"];
const stringOfManufacturers = manufacturers.join(' ');
console.log(stringOfManufacturers);
arrayOfManufacturers = stringOfManufacturers.split(' ');
console.log(arrayOfManufacturers);

// add word to each element of the array
const friends = ["Adri","Judit", "Marti", "Agi"];
friends.forEach((name, index, arr) => arr[index] = "Hello, " + arr[index] );
console.log(friends);

// convert array to Boolean
const numbers1 = [0, 1, 2, 3, 4];
const booleans = numbers1.map(number => Boolean(number));
console.log(booleans);

// sort array in descending order
const numbers2 = [1, 6, 7, 8, 3, 4, 5, 6];
numbers2.sort((a, b) => b - a);
console.log(numbers2);

// filter array by value greater than 3
const numbers3 = [1, 6, 7, 8, 3, 4, 5, 6];
const filtered = numbers3.filter(number => number > 3);
console.log(filtered);
    
// print index of an array element equal to a number
function findIndexOfElement(array, number) {
    return array.findIndex(element => element === number);
}

const array = [0, 2, 4, 9, 7, 3];
console.log(findIndexOfElement(array, 2));
