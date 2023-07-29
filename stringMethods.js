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
