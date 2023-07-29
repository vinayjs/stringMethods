// string methods in javascript

// 1. length
let txt = "vinay"
// console.log(txt.length)
//ans-5
// The length property returns the length of a string:

// 2.slice()
let name = "vinaychandran"
// console.log(name.slice(5, 13))
// ans - chandran
// slice() extracts a part of a string and returns the extracted part in a new string.

// 3. replace()
let character = "shankar dayal"
// console.log(character.replace("dayal", "mahadevan"))
// ans- "shankar mahadevan"
// The replace() method replaces a specified value with another value in a string.
// The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// The replace() method replaces only the first match

// 4. toUpperCase()
let names = "vinay"
// console.log(names.toUpperCase(names))
// ans- VINAY

// 5. toLowerCase()
let nameLowerCase = "VINAY"
// console.log(nameLowerCase.toLowerCase())
// ans - vinay

// 6. concat()
let firstName = "Vinay"
let lastName = "Chandran"
let fullName = firstName.concat(" " + lastName)
// console.log(fullName)
// ans- Vinay Chandran
// console.log(firstName + " " + lastName)
// ans- Vinay Chandran

// 7. trim()
let myName = "  Vinay"
// console.log(myName.trim())
// ans- Vinay
// The trim() method removes whitespace from both sides of a string.

// 8. trimStart()
let x = "  Vinay Chandran"
// console.log(x.trimStart())
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

// 9. trimEnd()
let y = "Vinay Chandran   "
// console.log(y.trimEnd())
// The trimStart() method works like trim(), but removes whitespace only from the end of a string.

// 10. charAt()
let id = "vinay"
// console.log(id.charAt(2))
//The charAt() method returns the character at a specified index (position) in a string.

// 11. split()
let cars = "audi bmw ferrari"
// console.log(cars.split(" "))
//ans- [ 'audi', 'bmw', 'ferrari' ]
// A string can be converted to an array with the split() method.

// 12. indexOf()
let quote = "My name is Vinay Chandran"
// console.log(quote.indexOf('Vinay'))
// ans-11
//The indexOf() method returns the position of the first occurrence of a string in a string.
// The method will return -1 if the text is not found.

// 13. lastIndexOf()
let myself = "My name is Vinay Chandran and my friends call me Vinay"
// console.log(myself.lastIndexOf('Vinay'))
// ans-49
//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string.

// 14. includes()
let quoted = "vini vidi vici"
// console.log(quoted.includes('vici'))
// ans- true
// The includes() method returns true if a string contains a specified value.

// 15.startsWith()
let sentence = "India is my country"
// console.log(sentence.startsWith('India'))
// ans- true
// console.log(sentence.startsWith('America'))
// ans- false
//The startsWith() method returns true if a string begins with a specified value.

// 16. endsWith()
let sentenz = 'Messi is the greatest player in the world'
// console.log(sentenz.endsWith('world'))
// ans- true 
// console.log(sentenz.endsWith('worlds')) 
// ans- false
// The endsWith() method returns true if a string ends with a specified value.