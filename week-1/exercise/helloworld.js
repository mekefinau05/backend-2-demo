// 
console.log('Hello World')

function calculateScore(studentScore) {
  studentScore += 5
  studentScore *= 2
  return studentScore
  
}

let hermioneScore = calculateScore(44)
let harryScore = calculateScore(41)

console.log(hermioneScore, harryScore)


// CALLING A FUNCTION

function logMyName(name) {
  console.log(name)
}

logMyName('Meke') //OUTPUT Meke



function sumNumbers(num1, num2) {
  console.log(num1 + num2)
}

sumNumbers(9, 9) //OUTPUT 12


const dog = {
  name: 'Freida',
  color: 'brown/black',
  hunger: 40,
  mood: 'feisty',
  age: 9
}

let {age} = dog

// console.log(dog.age)


class Dog {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }
  bark(dog1){
    console.log('Arf! I am', this.name, 'the dog!');
  }
}





