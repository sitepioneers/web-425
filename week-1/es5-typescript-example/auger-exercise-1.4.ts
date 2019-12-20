/*
 *  Title:  auger-exercise-1.4.js
 *  Author: April Auger
 *  Date:   9 August 2019
 *  Description: A program on how to create and
 *               transpile a TypeScript file.
 */

// Variables
let firstName: string = "April";
let lastName: string = "Auger";

// Function to concatenate strings
function fullName(firstName: string, lastName: string): string {
	return 'Hello ' + firstName + ' ' + lastName;
}

// Output message to the console
console.log(fullName(firstName, lastName));