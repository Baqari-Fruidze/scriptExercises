// let user={
//     name:"nia"
//     age:26
// }
// const {name,age}=user
// console.log(age)

// let profile = {
//   name: 'nika',
//   age: 25,
//   hobby: 'chess palyer',
//   email: 'nika@gmail.com',
// };
// const { name, age } = profile;
// console.log(age);
// console.log(name);
// console.log(`my name is ${name} and my age is ${age}`);

// let obj={
//   name:"tekla",
//   age:35,
//   surname:"kvaracxelia"
// },
// function sayMyName({name,surname,age}){
//   console.log(name +" " +  surname + " "+ age)
// }
// sayMyName(obj)

// let greeting = {
//   text1: 'hello',
//   text2: 'world',
// };
// const { text1: first, text2: second } = greeting;
// console.log(first);
// console.log(greeting);

// let obj = {
//   name: 'lizi',
//   hobbies: {
//     first: 'football',
//     second: 'chess',
//     third: 'tennis',
//   },
// };
// const { hobbies } = obj;
// console.log(hobbies);
// const { second } = hobbies;
// console.log(second);

// const {
//   hobbies: { second, third },
// } = obj;
// console.log(second, third);

// let obj={
//   name:"tekla",
//   age:35,
//   surname:"kvaracxelia"
// },
// const{name,...details}=obj
// console.log(details)
// const{age,surname}=details
// console.log(age)

// function find() {
//   "use strict";
//   for (let counter = 0; counter < 10; counter++) {
//     console.log("happy");
//   }
// }
// find();
// console.log(counter);
// მრავალ მასივში ვიპოვოთ საერთო ელემენტები
// function foo(arr) {}
// console.log(foo([], [], []));

// let num1 = 5;
// let num2 = 10;
// let temp = num1;
// num1 = num2;

// num2 = temp;
// let array1 = [7, 7, 2, 2, 3, 4, 4, 5, 20, 20];
// let array2 = [7, 23, 45, 56, 20, 20];
// function foo(arr1, arr2) {
//   let newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       newArr.push(arr1[i]);
//     }
//   }
//   return [...new Set(newArr)];
// }
// console.log(foo(array1, array2));

let array = [1, 2, 3, 4, 5];
let array2 = [5, 6, 7, 8, 9, 2];
let array3 = [6, 7, 8, 2];
// [[1,2],3,4,5,[2,3]]

function foo(...arr) {
  let newArr = [];
  let baseArr = arr[0];
  for (let i = 0; i < baseArr.length; i++) {
    let a = true;
    for (let j = 1; j < arr.length; j++) {
      if (!arr[j].includes(baseArr[i])) {
        a = false;
        break;
      }
    }
    if (a) {
      newArr.push(baseArr[i]);
    }
  }
  return newArr;
}

console.log(foo(array, array2, array3));
