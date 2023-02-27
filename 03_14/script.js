/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Book from "./Backpack.js";

const newBook1 = new Book(
    
    "The Alchemist",
    "Paulo Coelho",
    197,
    
)

const newBook2 = new Book(

    "The Power",
    "Rhonda Byrne",
    224,
)

console.log(newBook1)
console.log(newBook2)