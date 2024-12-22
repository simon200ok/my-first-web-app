//variable is a container for holding data
//declare variable using var, const, let
//naming convention for variable：camelCase
//const testname = "Ayotunde";
//console.log(testname);

//let x;
//console.log(x)

//const firstName = "Stephen Stone"
//const lastName = "Jackson"
//const age = "40"

//const fullName = 'My name is ' + lastName + ' ' + firstName + ' I am' + ' ' + age + ' years old'
//const fullName = `My name is' + ${lastName} ${firstName} + 'I am' + ${age} 'years old`
//console.log(firstName.length)
//console.log(firstName.toLowerCase())

//const age = false
//const number = "10.5"
//const x = parseInt(number)

//Arrays
//const names = ['Chioma', 'Aruna','Steve']
//console.log(names)

//key-value pair
//const person = {
  //  console.log('John Doe')
//}

//***15th Nov Class****
//Arrays can have multiple value
//const fruits=['apple', 56, true, [1,3,7]]
//console.log(fruits)

//console.log(fruits.length)
//console.log(fruits[1])
//some methods we can use for arrays: push, pop, unshift, shift, reverse
//fruits.push('grape') this adds from the back
//fruits.shifts('grape') this adds from the front

//const nos = [20, 30, 10, 3, 78, 9, 8, 1]
//console.log('What is the length of the array',nos.length)
//const x = nos.slice(0,3)
//console.log(x)
//x = nos.slice(-4,2);
//console.log(x)

//name, surname, location, isMarried, age, hobbies are declared as keys, with the keys we can change the value of o
/*const person={
  name: 'Joe',
  surname: 'Doe',
  location: 'Lagos',
  isMarried: false,
  age: 40,
  hobbies: ['Music', 'sport']
}*/

//using dot notation to get values, square bracket notation
//console.log
//person.name = 'ayotunde'
//person.age = 50
//console.log(person)
//const fruits = ['apple, 'mango', 'orange'];
//const[a,b,d,...c] = fruits

/*function greet (day = 'morning'){
  console.log('Good' + day)
}

greet('evening')
greet('afternoon')*/

/*function add(x, y){
  console.log(x + y)
}

add(10, 20)
add(100, 300)*/

//function declaration - function declared like that , not stored in a variable
//in function declaration, the function can be called before the actual declaration
/*function addSum(x,y){
  return x + y
}

const res = addSum(100, 100)
console.log(res + 400) 
console.log(addSum(10, 98))*/



//function expression - That is when function is stored in a variable
//in function expression, the function can't be called before the actual declaration that is assigned to a variable
/*const addSum = function (x, y){
  return x + y
}
console.log(addSum(22,10))*/

//Arrow function
/*const addSum1 = (x, y) => {
  return x * y
}

//Arrow function can also be contracted
const addSum2 = (x, y) => x * y

console.log(addSum1(2209, 10))
console.log(addSum2(2209, 10))

//loop iteration
for(let i = 0; i<= 10; i++){
  console.log('The value of the loop is ' + i)
}*/

/*const fruits1 = ['apple', 'banana', 'mango', 'grape']
for (let i = 0; i < fruits1.length; i++){
  console.log(`Get the value of the loop at ${i}: `, fruits1[i])
}

const fruits2 = ['apple','banana','mango','orange']
for(const n of fruits2){
  console.log(n)
}

//high order of array methods
//forEach, map, filter, reduce
const fruits3 = ['apple','banana','orange','mango','grape', 'pineapple'];
fruits3.forEach(function(fruitsNow){
  console.log(fruitsNow)
})*/

/*fruits.forEach

*/

//Document Object Model

/*const tasks = [
  {name:'Joe',surname:'Doe', location:'Lagos', age:23},
  {name:'Ifeanyi',surname:'Peter', location:'Lagos', age:23},
  {name:'Grace',surname:'Williams', location:'Ogun', age:23},
]
tasks.map((task) => console.log(task.name,task.location, task.age))
 */

//console.log(window.document)
//console.log(document.head)
/*const title = document.getElementById('title')
title.style.color = 'red';
title.style.fontSize = '64px'*/

// const value = document.getElementsByClassName('myclass')
// value.style.color = 'blue'
// const value2 = document.querySelector('id')
// value2.style.color = 'green'

// const values = document.querySelectorAll(h1)
// console.log(values)
// values.forEach(value => value.style.color = 'red')
// //Rewriting the function => below we have
// values.forEach (function(value){
//   value.style.color = 'green'
// }
// )

// const val = document.querySelector('#title')
// console.log(val)
// val.innerHTML = "Fullstack Java program in DEcagon institute"

const div = document.createElement('h1')
div.innerHTML = 'creating an element from Javascript'
div.id = 'title'
div.className = 'active'
console.log(div)

body.appendChild(div)

const btn = document.querySelector('button').addEventListener('click', function())
console.log(btn)






