function add(n1: number, n2: number, showResult: Boolean, phrase: string){
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result)
  } else {
    return result
  }
}

const number1 = 5
const number2 = 2.8
const printResult = true
const resultPhrase = 'Result is: '

add(number1, number2, printResult, resultPhrase);

// Object

const person = {
  name: 'Erol',
  age: 31,
  hobbies: ['lezen', 'koken'] // string []
}
console.log(person)

for (const hobby of person.hobbies) {
  console.log(hobby)
}

// array
let favoriteActivities: string[]
favoriteActivities = ['hardlopen', 'zwemmen', 'fietsen']

// tuple, fixed length array

const erol: {
  age: number;
  height: number;
  weight: number;
  ocupation: [number, string];
  hobbies: string[];
} = {
  age: 31,
  height: 182,
  weight: 78,
  ocupation: [1, 'software developer'],
  hobbies: ['sport', 'koken']
}

console.log(erol)

// enum
enum Role { ADMIN, READ_ONLY, AUTHOR};

const erol1 = {
  age: 31,
  height: 182,
  weight: 78,
  ocupation: Role.ADMIN,
  hobbies: ['sport', 'koken']
}
if(erol1.ocupation === Role.ADMIN){
  console.log('erol is admin')
}