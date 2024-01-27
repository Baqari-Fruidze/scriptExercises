// ბაქარი ფრუიძე
// კვირა 5,დავალება 1
// let object={
//     age:2269,
//     name:"ჰანიბალ ბარკა",
//     gender:"მამრობითი"
// }

// კვირა 5,დავალება 2

// function sayHello () {
//     return "ჰანიბალ ბარკა"
// }
// let object={
//     age:2269,
//     name:"ჰანიბალ ბარკა",
//     gender:"მამრობითი"
// }
// object.function=sayHello
// console.log(object)

// კვირა 5,დავალება 3

// function sayHello () {
//     return "ჰანიბალ ბარკა"
// }
// let object={
//     age:2269,
//     name:"ჰანიბალ ბარკა",
//     gender:"მამრობითი"
// }
// object.function=sayHello
//  delete object.age
//  console.log(object)

// კვირა 5,დავალება 4

// function sayHello () {
//     return "ჰანიბალ ბარკა"
// }
// let object={
//     age:2269,
//     name:"ჰანიბალ ბარკა",
//     gender:"მამრობითი"
// }
// object.function=sayHello
// object.job="დამპყრობელი"
// console.log(object)

// კვირა 5,დავალება 5

// function sayHello () {
//     return "ჰანიბალ ბარკა"
// }
// let object={
//     age:2269,
//     name:"ჰანიბალ ბარკა",
//     gender:"მამრობითი"
// }
// object.function=sayHello
// object.job="დამპყრობელი"
// object.jobLength = function (){
//     return this.job.length
// }
// console.log(object.jobLength())

// კვირა 5,დავალება 6
// function sayHello () {
//     return "ჰანიბალ ბარკა"
// }
// let object={
//     age:2269,
//     name:"ჰანიბალ ბარკა",
//     gender:"მამრობითი"
// }
// object.function=sayHello
// object.job="დამპყრობელი"
// object.jobLength = () =>object.job.length
// function findMethods () {
// let count = 0
//  for (let key in object){
//      if (typeof object[key] === "function") {
//          count=count+1
//      }
//  }return count
// }
// console.log(findMethods())

// კვირა 5,დავალება 7

// function sayHello () {
//     return "ჰანიბალ ბარკა"
// }
// let object={
//     age:2269,
//     name:"ჰანიბალ ბარკა",
//     gender:"მამრობითი"
// }
// object.function=sayHello
// object.job="დამპყრობელი"
// object.jobLength = function (){
//     return this.job.length
// }
// if (!object.hasOwnProperty("ბავშვი")){
//   object.children= "ნამეტანი ბევრი"
// }
// console.log(object)

// კვირა 5,დავალება 8
// function sayHello () {
//     return "ჰანიბალ ბარკა"
// }
let object = {
  age: 2269,
  name: "ჰანიბალ ბარკა",
  gender: "მამრობითი",
};
// object.function = sayHello;
object.job = "დამპყრობელი";
object.jobLength = function () {
  return this.job.length;
};
if (!object.hasOwnProperty("children")) {
  object.children = "ნამეტანი ბევრი";
}

for (let key in object) {
  console.log(key);
}

// კვირა 5,დავალება9
// function sayHello () {
//     return "ჰანიბალ ბარკა"
// }
// let object={
//     age:2269,
//     name:"ჰანიბალ ბარკა",
//     gender:"მამრობითი"
// }
// object.function=sayHello
// object.job="დამპყრობელი"
// object.jobLength = function (){
//     return this.job.length
// }
// if (!object.hasOwnProperty("children")){
//     object.children="ნამეტანი ბევრი"
// }

// for (let key in object){
//     console.log(object[key])
// }

// count = 0;
// function findLength(string) {
//   if (string === "") {
//   } else {
//     count++;
//     return findLength(string.slice(1));
//   }
// }
// console.log(findLength("beautiful"));
