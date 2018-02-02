/**
 * Create a function called 'greaterNumber'
 * This function will take in 2 Parameters.
 * You need to check which number is greater and return that number
 * @param  { Number } a
 * @param  { Number } b
 * @return { Number }
 */
 function greaterNumber (a,b){
 	if (a > b) {
 		return a
 	}
 	if (a < b) {
 		return b
 	}
 }
 console.log(greaterNumber(9,7))

/**
 * Create a function called 'stringOfNumbers'.
 * This function will take in 1 parameter
 * Your task is to add all the numbers in between 0 and n
 * For example if the number is 10 than the function should return:
 * "0,1,2,3,4,5,6,7,8,9,10"
 * @param  { Number } n
 * @return { String }
 */
var Slip = ""
function stringofnumbers(J){
	for (i = 0; i <= J; i++) {
	 	Slip += i
	 } 
	 return Slip
	
}
console.log(stringofnumbers(17))

/**
 * Create a function called 'sumOfArray'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return the sum of all the numbers in the array.
 * You must check if the item in the array is a number
 * @param  { array } arr
 * @return { Number }
 */
var Chow = [25,43,50,62,87,96]
function sumOfArray(T){
	if (T == false) {
		return Chow[0] + Chow[1] + Chow[2] + Chow[3] + Chow[4] + Chow[5] 
	}
	else {
		return "How?"
	}
}
console.log(sumOfArray(Chow.some(isNaN)))

/**
 * Create a function called 'getEvens'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the even numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */
var Mein = []
function getEvens(E){
	for ( i = 0; i < Chow.length; i++) {
		if ((Chow[i]%2)===0) {
			Mein.push(Chow[i])

		}
	}
	return Mein
}
console.log(getEvens(Chow))

/**
 * Create a function called 'getOdds'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the odd numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */
var Fun = []
function getOdds(O){
	for ( i = 0; i < Chow.length; i++) {
		if ((Chow[i]%2)>0) {
			Fun.push(Chow[i])

		}
	}
	return Fun
}
console.log(getOdds(Chow))

/**
 * Create a function called 'calculate'.
 * This function will take in 3 parameters:
 * The first parameter is a number.
 * The second parameter is a number.
 * The third param is a string that will be 'add', 'subtract', 'multiply', 'divide'.
 * Your task is to do a mathematical operation on the 2 numbers based on the third parameter.
 * The function should return the string "Invalid operator" if the operator is
 * not 'add', 'subtract', 'multiply', 'divide'.
 * @param  { Number } int1
 * @param  { Number } int2
 * @param  { String } operator ('add', subtract, 'multiply', 'divide')
 * @return { Number/String }
 */
function calculate (a,b,c){
	if (c=="add") {
		return a + b
	}
	if (c=="subtract") {
		return a - b
	}
	if (c=="multiply") {
		return a * b
	}
	if (c=="divide") {
		return a / b
	}
	else {
		return "Invalid Operator"
	}
}
console.log(calculate(8,9,"divide"))