// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("properNoun", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }]
      // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
      expect(properNoun(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// ● properNoun › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
// ReferenceError: properNoun is not defined

// b) Create the function that makes the test pass.
// Pseudo Code
// input: an array of objects
// output: an array with a sentence about each person with their name capitalized
// declare a function called properNoun
// map over the array
// spilt the key name into a string
// change the first index on the string to upperCase
// join the string back together at the first index
// retinr the mapped String


const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]

// const properNoun = array.map((value) => value.name.charAt(0).toUpperCase())
const properNoun = (arr) => { 
  const mappedString = arr.map(value => {
    const capitalizedName = value.name.split(" ").map(str => str[0].toUpperCase() + str.slice(1)).join(" ")
    return `${capitalizedName} is ${value.occupation}`
  })
  return mappedString
}

console.log(properNoun(people))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe ("remainders" , () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3" , () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(remainders(hodgepodge1)).toEqaul([ 2, 0, -1, 0 ]) 
    expect(remainders(hodgepodge2)).toEqaul([ 2, 1, -1 ]) 
  })
})

// ReferenceError: remainders is not defined


// b) Create the function that makes the test pass.
// input: mixed data array 
// output: array of only the REMAINDERS of the numbers when divided by 3
// declare fucntion called remainders
// interate over the array 
// if the type of data is a number divide it by three and return the remainder 

const remainders = (array) => {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    if (typeof(array[i]) === "number") {
      newArr.push(array[i] % 3)
    }
  }
  return newArr
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

describe ("mathIsFun" , () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(mathIsFun(cubeAndSum1)).toEqual(99) 
    expect(mathIsFun(cubeAndSum2)).toEqual(1125) 
  })
})

// ReferenceError: mathIsFun is not defined

// a) Create a test with an expect statement using the variables provided.


// b) Create the function that makes the test pass.
// declare a function called mathIsFun 
// map over the array returning all the values cubed
// add the new array together 

const mathIsFun = (arr) => {
  return arr.map(value => value**3).reduce((partialSum, a) => partialSum + a, 0)
}
