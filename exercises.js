//    მე 2 კვირა,1 პრაქტიკული

// let num=11
// if (num%2==0){
//     console.log("luwia")
// }else{console.log("kentia")

// }

//  let num= 0
//  if(num<0){
//      console.log("uaryofitia")
//  }else if(num>0){
//      console.log("dadebiTia")
//  }else{
//      console.log("nolis tolia")
//  }

//  let num1 = 18
//  let num2 = 5

//  if (num2!==0){
//      if (num1%num2===0){
//          console.log("iyofa")
//      }else
//       {console.log("ar iyofa") }

//  }
// else{
//  console.log("gayofa daushvebelia")

//  }

// let str="gfkfgk"
// if(str.length == 0){
//     console.log("carielia")
// }else{console.log("ar aris carieli")}

// let sentence="my name is john fucking cena"
// console.log(sentence.includes("my"))

// let sentence="my name is john fucking cena"
// if (sentence.includes("my")){
//     console.log("sheicavs")
// }else{
//     console.log("ar sheicavs")
// }

// let num1=19
// let num2=34
// if(num1>num2){
//     console.log("minimaluri aris" + num2)
// }else if(num2>num1){
//     console.log("minimlaluri aris" +num1)
// }else{
//     console.log("ertmanetis tolia")
// }

// console.log(Math.min(7,34,5,12,4,))
// console.log(Math.max(23,45,2,895,87336))

// let num=123
// let str=num.toString()
// if (str.length<3){
//     console.log("ricxvi naklebia 100ze")
// }else{
//     console.log("ricxvi 100 an 100 ze meti")
// }

//   მე 2 კვირა მე 2 პრაქტიკული

// let age=Number(prompt("what is your age?"))
// if(age<0){
//     console.log("invalid age")
// }else if(age>0&&age<12){
//     console.log("child")
// }else if(age>=13&&age<19){
//     console.log("teenager")
// }else if(age>=20&&age<64){
//     console.log("adult")
// }else if(age>=65){
//     console.log("senior")
// }else{
//     console.log("wrong input")
// }

// console.log((10 / 3).toFixed(5))

// console.log((10/3).toFixed(3))

// let monthNumber=Number(prompt("enter your month number?"))
// if (monthNumber == 1){
//     console.log(31)
// }else if(monthNumber == 2){
//     console.log("28 or 29")
// }else if(monthNumber ==3){
//     console.log(31)
// }else if(monthNumber ==4){
//     console.log(30)
// }else if(monthNumber ==5){
//     console.log(31)
// }else if(monthNumber ==6){
//     console.log(30)
// }else if (monthNumber ==7){
//     console.log(31)
// }else if(monthNumber == 8){
//     console.log(31)
// }else if(monthNumber == 9){
//     console.log(30)
// }else if(monthNumber ==10){
//     console.log(31)
// }else if(monthNumber ==11){
//     console.log(30)
// }else if (monthNumber ==12){
//     console.log(31)
// }else {
//     console.log("wrong input")
// }

// let monthNumber=Number(prompt("enter your month number?"))
// if (monthNumber ==1 ||monthNumber ==3 ||monthNumber ==5 || monthNumber ==7 ||monthNumber ==8 ||monthNumber==10 || monthNumber==12 ){
//     console.log(31)
// }else if(monthNumber == 4 || monthNumber == 6 ||monthNumber ==9 ||monthNumber ==11){
//     console.log(30)
// }else if(monthNumber ==2){
//     console.log("28 or 29")
// }else {
//     console.log("wrong input")
// }

// let monthNumber=Number(prompt("enter your month number?"))
// switch(monthNumber){
//     case 1:
//         console.log(31)
//         break
//     case 2:
//         console.log("28 or 29")
//         break
//     case 3:
//         console.log(31)
//         break
//     case 4:
//         console.log(30)
//         break
//     case 5:
//         console.log(31)
//         break
//     case 6:
//         console.log(30)
//         break
//     case 7:
//         console.log(31)
//         break
//     case 8:
//         console.log(31)
//         break
//     case 9:
//         console.log(30)
//         break
//     case 10:
//         console.log(31)
//         break
//     case 11:
//         console.log(30)
//         break
//     case 12:
//         console.log(31)
//         break
// }

// let monthNumber=Number(prompt("enter your month number?"))
// switch(monthNumber){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log(31)
//         break
//     case 2:
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log(30)
//         break
//     case 2:
//         console.log("28 or 29")
//         break
//     default:
//       console.log("wrong input")
//     break
// }

// მე 2 კვირა,მე 3 პრაქტიკული
// function greeting() {
// let word = "hello word"
// console.log(word)
//  }
//  greeting()

// function greeting(){

//   return  "hello word"
// }
// console.log(greeting())

// function sum(a,b){
//     console.log(a+b)
// }
// sum(12,34)

// function count(){
//     let str="real madrid"
//     return str.length
// }
// console.log(count())

// function divide(x,y){
//     return x%y
// }
// console.log(divide(12,5))

// მე 3 კვირა, პირველი პრაქტიკული

// for (let i=0;i<=10;i++){
//     console.log(i)
// }

// for(let i = 1;i<20;i++){
//     if (i % 2 ==0){
//         console.log(i);
//     }
// }

// let count = 0

// for(let i = 1;i<100;i++){
//     count = count +i
// }
// console.log(count)

// let secretNumber = 6
// let userNumber = Number(prompt("what is your number?"))
// if (userNumber <1 || userNumber > 10){
//       console.log("enter right number")
//   }
// while(userNumber!==secretNumber){
//   userNumber = Number(prompt("what is your number?"))
//   if (userNumber <1 || userNumber > 10){
//       console.log("enter right number")
//   }
// }
// console.log("congratulation")

// let secretNumber = 7
// let userNumber
// do{
// userNumber = Number(prompt("what is your number?"));
// }while(userNumber !== secretNumber)
//     console.log("congratulations")

//   მე 3 კვირა,მე 2 პრაქტიკული
// function first(a,b){
// function sumDigits(num){
//     let word=num.toString()
// let count=0
//     for(let i = 0;i < word.length;i++){
//         count+=Number(word[i])

//     }
//   return count
// }
// console.log(sumDigits(345))

// function countsB(word){
//     let count=0
//     for(let i=0;i<word.length;i++){
//         if (word[i]=="B"){
//             count=count+1
//              }
//     }
//     return count
// }
// console.log(countsB("hello Bitcamp find B and another BBBBBBB"));

// function guessNumber(){
//   let correctPassword="12345";
// let password=prompt("please enter the number")
// while(password!==correctPassword){
//     password=prompt("please enter the number")
// }
//   console.log("swori parolia")

// }
// guessNumber()

// function findLargest(sentense){
//  let splited=sentense.split(" ")
//  let max=splited[0]
//  for(let i =1;i<splited.length;i++){
//      if(splited[i].length>max.length){
//          max=splited[i]
//      }
//  }
//  return max.length
// }
// console.log(findLargest("hello bitcamp front end react course"))

//  მე 4 კვირა ,1 პრაქტიკული,
// let a="tansacmeli"
// let b="fexsacmeli"
// let contract="furceli"
// ["tansacmeli","furceli"]

// let person={
//     name:"nika",
//     age:20,
//     education:"bitcamp",
//     gender:"male",
//     numbers:[12,23,123,345,],
//     hobby:function(){
//       console.log("i am playing chess")
//     }

// }
// console.log(person.numbers)

// let person={
//     name:"nika",
//     age:20,
//     education:"bitcamp",
//     gender:"male",
//     numbers:[12,23,123,345,],
//     hobby:function(){
//       console.log("i am playing chess")
//     }

// }

// delete person.numbers;
// person.numbers=[1,2,3]
// console.log(person)

// let arr=[1,2,3,true,"bitcamp",null,false,"person"]
// arr.push("ragaca")
// arr.unshift("ai")
// arr.pop();
// console.log(arr)

//  დაწერეთ პროგრამა რომელიც იპოვის მასივის ყველა ელემენტის ჯამს
// let array=[1,2,3,4,5,6,7,8,9,10]
// let count=0
// function sum(arr){

//     for(let i=0;i<arr.length;i++){
//      count=count+arr[i]
//     }
//   return count
// }
// console.log(sum(array))

// დაწერეთ პროგრამა მასივში რიცხვების ზრდის მიხედვით დასალაგებლად
// let arr=["a","D","b","c"]
// let sorted=arr.sort()
// console.log(sorted)

// let arr=[5,4,8,13,10,19,16]
// function sortArray(arr){
//     return arr.sort((a,b)=>{
//         return a-b
//     })
// }
// console.log(sortArray(arr))  <<<<<<<<<< a-b ალაგებს ზრდადობით და b-a ალაგებს კლებადობით

//    მე 4 კვირა პრაქტიკული 2
//   1 დაწერეთ პროგრამა მასივშ ელემენტის ინდექსისი საპოვნელად
// function findIndex(arr, element){
//     let index=arr.indexOf(element)
//     return index
// }
// console.log(findIndex([1,2,3],2))
//   გაკეთების მეორე გზა

// function findIndex(arr,element){
//     for (let i =0;i<arr.length;i++){
//         if (arr[i]===element){
//             return i
//         }
//     }
//     return -1
// }
// console.log(findIndex([1,2,3],5))

//   2 დაწერეთ პროგრამა რომელიც დაადგენს მდებარეობს თუ არა მასივში კონკრეტული ელემენტი

// function includes(arr,element){
//     return arr.includes(element)
// }
// console.log(includes([1,2,3],7))
//           გაკეთების მეორე გზა

//   function includes(arr,element){
//      for (let i=0;i<arr.length;i++){
//          if(arr[i]===element){
//              return true
//          }
//      }return false
//  }
//   console.log(includes([1,2,3],6))

//   for of ლუპით

//  function includes(arr,elements){
//      for(let numbers of arr){
//          if (numbers===elements){
//              return true
//          }
//      } return false
//  }
//  console.log(includes([1,2,3],2))

// 3 დაწერეთ ფუნქცია რომელიც აბრუნებს ობიექტში ფროფერთის სახელების (key) და მნიშვნელობების (value) მასივს

// function keyValues(obj){
//     return [Object.keys(obj),Object.values(obj)]

// }

// let object={
//     name: "temo",
//     age:19
//   }

//   console.log(keyValues(object))         <<<<<< ეს არის ჩვეულებრივი ფუნქციით

// const keyValues = obj => {
//     return [Object.keys(obj),Object.values(obj)]
// }
// let object={
//     name: "temo",
//     age:19
//   }
//   console.log(keyValues(object))  <<< ეს არის arow ფუნქციით, და obj მიტო წერია კოდში და არა object რომ ქვევით გამოძახების დროს კონსოლ ლოგშ ვანიჭებთ obj ს object ის მნიშვნელობას

//  for in ლუპით

//   const keyValues = obj => {
//       let keys = []
//       let values = []
//   for (let key in obj){
//       values.push(obj[key])
//       keys.push(key);
//   }
//   return [keys,values]
// }
// let object={
//     name: "temo",
//     age:19
//   }
//   console.log(keyValues(object))

// დაწერეთ პროგრამა რომელიც რიცხვების  მასივიდა გააცალკევებსნ ლუწი და ენტი რიცხ

// const evenOdd = function(arr){
//     let obj={
//         even:[],
//         odd:[],
//     }
//     for(number of arr){
//         if (number%2===0){
//             obj.even.push(number)
//         }else {
//             obj.odd.push(number)
//         }
//     }return obj
// }
// console.log(evenOdd([1,2,3,4]))

// მე 4 კვირა,მე 3 პრაქტიკული

// დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის დასადგენად
// let arr=[1,2,3,8,9,13,19,16]
// function findSecond(arr){
// let sorted=arr.sort((a,b)=>(b-a))
// return sorted[1]
// }
// console.log(findSecond(arr))

//                2 დაწერეთ პროგრამა მასივში ლუწი რიცხვების ჯამის საპოვნელად
// let array=[1,2,3,8,9,13,19,16]
// function sum(arr){
//     let count=0
//     for(i=0;i<arr.length;i++){
//       if(arr[i]%2===0){
//             count+=arr[i]
//       }
//     }
//     return count
// }
// console.log(sum(arr))

//              დაწერეთ პროგრამა რათა გავიგოთ არის თუ არა 2 მასივი ტოლი
// let array1=[1,2,3]
// let array2=[1,2,3]
// function arrays(arr1,arr2){
//     if (arr1.length===arr2.length){
//         for(let i=0;i<arr2.length;i++){
//             if(!arr1.includes(arr2[i])){
//               return "ar aris ori masivi ertmanetis toli"
//             }
//         }
//         return"ori masivi ertmanetis tolia"
//     }else{
//         return"ar aris toli"
//     }
// }
// console.log(arrays(array1,array2))  <<<< ვიკითხო 24 ხაზის შესახებ

// let word="hello word"
// let updated=word.slice(2)  <<<<<<<<<<<<<< slice მეთოდი
// console.log(updated)

// let arr=[1,2,3,4,5]
// let updated = arr.slice(0,3) <<<<<< slice მეთოდი
// console.log(updated)

//   let arr=[1,2,3,4,5]
//   let updated = arr.splice(0,2,"baqari")
//   console.log(arr)
//  console.log(updated) <<< რაც წავშალეთ

// პირველი პარამეტრია საიდან დაიწყოს მოჭრა,მეორე პარამე
// //                                                 ტრია თუ რამდენი რამე გააქროს და მესამე პარამეტრია თ რა დაემატოს,ნებისმიერი რამის დამატება შეიძლე  //

// კვირა 6,დავალება

//         დაწერეთ ფუნქცია generateRandomNumber, რომელიც იღებს მინიმალურ და მაქსიმალურ რიცხვს არგუმენტებად
// და აბრუნებს შემთხვევით რიცხვს მინიმალურ და მაქსიმალურ მნიშვნელობებს შორის.
// function generateRandomNumber(num1) {
//   let generated = Math.random();
// }
// console.log(generateRandomNumber(47));

// 2დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად და აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.

// function capitalizeWords(str){
//     let splited = str.split(" ")
//     let organized = splited.filter((word)=>word!=="")

//     let capitalized = organized.map((word)=>word[0].toUpperCase() + word.slice(1))

//     return capitalized.join(" ")

// }

// console.log(capitalizeWords("i have very  badass cat"))

// 3)დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს და თვისების სახელს და აბრუნებს ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.
// let array = [
//   { name: "baqari", age: 30, hobby: "chess" },
//   { name: "temo", age: 20, hobby: "swimming" },
//   { name: "lasha", age: 23, hobby: "chess" },
// ];
// function find(arr, hobi) {
//   let mapped = arr.map((word) => word[hobi]);
//   console.log(mapped);
//   let filtered = mapped.filter(
//     (word, index, mapped) => mapped.indexOf(word) === index
//   );
//   return filtered;
// }
// console.log(find(array, "hobby"));

//  მე 6 კვირის დავალებები
// დავალება 2 დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად და აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.
// function capitalizeWords(str) {
//   let splited = str.split(" ");
//   let filtered = splited.filter((word) => word !== "");
//   let mapped = filtered.map((word) => word[0].toUpperCase() + word.slice(1));

//   return mapped.join(" ");
// }
// console.log(capitalizeWords("i have badass cat"));
// დავალება1.დაწერეთ ფუნქცია generateRandomNumber, რომელიც იღებს მინიმალურ და მაქსიმალურ რიცხვს არგუმენტებად და აბრუნებს შემთხვევით რიცხვს მინიმალურ და მაქსიმალურ მნიშვნელობებს შორის.
// function generateRandomNumber(num1, num2) {
//   let random = Math.random();
//   let reduced = random.reduce((num1, num2));
// }
// console.log(generateRandomNumber(20, 50));
// დავალება 3.დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს და თვისების სახელს და აბრუნებს ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.
// let array = [
//   { name: "baqari", age: 30, hobby: "chess", edu: "bit" },
//   { name: "temo", age: 20, hobby: "swimming", edu: "bitc" },
//   { name: "lasha", age: 23, hobby: "chess", edu: "bit" },
// ];
// function find(arr, hobi) {
//   let mapped = arr.map((word) => word[hobi]);
//   let filtered = mapped.filter(
//     (element, index, mapped) => mapped.indexOf(element) === index
//   );
//   return filtered;
// }
// console.log(find(array, "edu"));
// დავალება 4,დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს შეყვანად და აბრუნებს ჭეშმარიტს, თუ ის არის პანგრამა (შეიცავს ანბანის ყველა ასოს ერთხელ მაინც), ცრუ სხვა შემთხვევაში.
// function findPangram(str) {
//   if (
//     str.includes(
//       "q",
//       "w",
//       "e",
//       "r",
//       "t",
//       "y",
//       "u",
//       "i",
//       "o",
//       "p",
//       "l",
//       "k",
//       "j",
//       "h",
//       "g",
//       "f",
//       "d",
//       "s",
//       "a",
//       "z",
//       "x",
//       "c",
//       "v",
//       "b",
//       "n",
//       "m"
//     )
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(findPangram("uritogkfkmcxxslsd"));

// let array = ["q",
//       "w",
//       "e",
//       "r",
//       "t",
//       "y",
//       "u",
//       "i",
//       "o",
//       "p",
//       "l",
//       "k",
//       "j",
//       "h",
//       "g",
//       "f",
//       "d",
//       "s",
//       "a",
//       "z",
//       "x",
//       "c",
//       "v",
//       "b",
//       "n",
//       "m"]
// function findPangram(arr,str){
//   let answer = arr.every((element)=>str.includes(element))
//   return answer
// }
// console.log(findPangram(array,"hfjmxnbvhdue"))   <<<<<<<<<<<<<<<<< გაკეთების მეორე გზა
// დავალება 5,დაწერეთ ფუნქცია, რომელიც მიიღებს წინადადებას შესაყვანად და აბრუნებს უნიკალური სიტყვების მასივს ანბანური თანმიმდევრობით, გამოკლებით გავრცელებული ინგლისური სიტყვების, როგორიცაა "the", "a" და "is".
// function findUnique(str) {
//   let splited = str.split(" ");
//   let filtered = splited.filter(
//     (element, index, arr) => arr.indexOf(element) === index
//   );
//   let sorted = filtered.sort((a, b) => a.localeCompare(b));
//   let filtered2 = sorted.filter(
//     (element) => element !== "the" && element !== "a" && element !== "is"
//   );
//   return filtered2;
// }
// console.log(
//   findUnique("my beautiful cat is a most beautiful cat in the house")
// );
//  ეს მეორე გზა ქვემოთ
// let arr = ["the", "a", "is"];
// function findUnique(str) {
//   let splited = str.split(" ");
//   let filtered = splited.filter((element) => !arr.includes(element));
//   let filtered2 = filtered.filter(
//     (element, index, arr) => arr.indexOf(element) === index
//   );
//   let sorted = filtered2.sort((a, b) => a.localeCompare(b));
//   return sorted;
// }
// console.log(
//   findUnique("my beautiful cat is a most beautiful cat in the house")
// );
// დავალება 6,დაწერეთ პროგრამა, რომ ამოიღოთ ყველა ცრუ მნიშვნელობა მასივიდან.
// let arr = [NaN, false, undefined, "", 23, "DOG", "kkxkxk"];
// let filtered = arr.filter(Boolean);
// console.log(filtered);
// დავალება 7,დაწერეთ პროგრამა წინადადებაში სიტყვების თანმიმდევრობის შესაბრუნებლად.

// function reverse(str) {
//   let splited = str.split(" ");
//   let reversed = splited.reverse();
//   return reversed.join(" ");
// }
// console.log(reverse("what a wonderful day"));

// დავალება 8,დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა სტრიქონი პალინდრომი.
// function findPalindrome(str) {
//   let shewebebuli = str.replaceAll(" ", "");
//   let splited = shewebebuli.split("");
//   let shebrunebuli = splited.reverse();
//   let sabolooShebrunebuli = shebrunebuli.join("");
//   return shewebebuli === sabolooShebrunebuli;
//   if (shewebebuli !== sabolooShebrunebuli) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(findPalindrome("aia aia"));
// დავალება 9,დაწერეთ პროგრამა,რომელიც იპოვის მასივში ყველაზე დიდ რიცხვს(არ გამოვიყენოთ სორტი).
// let arr = [1, 2, 3, 4, 5, 45, 234, 26];
// let sorted = arr.sort((a, b) => b - a);
// console.log(sorted[0]);
// let array = [1, 2, 3, 4, 5, 45, 234, 26];
// function findLargestNumber(arr) {
//   let max = arr[0];
//   for (let num of arr) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// }
// console.log(findLargestNumber(array));
// დავალება 10,დაწერეთ პროგრამა,რომელიც შეკრიბავს მასივის ყველა რიცხვს(არ გამოვიყენოთ reduce).
// let array = [12, 2, 3, 4, 5, 6, 7, 8, 9];
// let reduced = array.reduce((acc, number) => acc + number, 10);
// console.log(reduced);

// let array = [12, 2, 3, 4, 5, 6, 7, 8, 9];
// function sum(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     count = count + arr[i];
//   }
//   return count;
// }
// console.log(sum(array));

//    მე 8 კვირა,პრაქტიკული 1
//  1.დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს  callback ფუნქციებს და გამოიძახებს მათ იმის მიხედვით თუ რამდენად სწორად შესრულდა რაიმე პირობა.
//   დაწერეთ იგივე პირობა promise ის გამოყენებით

//                       ქოლბექებით

// function equalsCheck(successCallback, errorCallback) {
//   if (1 + 1 === 5) {
//     successCallback("Equals");
//   } else {
//     errorCallback("doesn't equal");
//   }
// }

// equalsCheck(
//   (message) => {
//     console.log("succes:", message);
//   },
//   (error) => {
//     console.log("failed:", error);
//   }
// );
//
//                                          პრომისებით

// function equals() {
//   return new Promise((resolve, reject) => {
//     if (1 + 1 === 2) {
//       resolve("equals");
//     } else {
//       reject("doesn't equal");
//     }
//   });
// }
// equals()
//   .then((message) => {
//     console.log("succes:", message);
//   })
//   .catch((error) => {
//     console.log("failed:", error);
//   });

//    2.create two promises.the first one resolves with the number,and second one multiplies resolved number by 2.
//  promise chaining
// function promiseOne() {
//   return new Promise((resolve) => {
//     resolve(5);
//   });
// }
// function promiseTwo(number) {
//   return new Promise((resolve,reject) => {
//     reject("failed");
//     // resolve(number * 2);
//   });
// }
// promiseOne()
//   .then((result) => promiseTwo(result))
//   .then((finalResult) => {
//     console.log(finalResult);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//    3.write a function that runs after two seconds when  executed,counts 1 to 10 and then fetches the github user data
// async function getGithubUser(user) {
//   const response = await fetch(`https://api.github.com/users/${user}`);
//   const data = await response.json();
//   console.log(data);
// }
// function mainFunction() {
//   let counter = 0;
//   let interval = setInterval(() => {
//     counter++;
//     console.log(counter);
//     if (counter >= 10) {
//       clearInterval(interval);
//       getGithubUser("marikuna246");
//     }
//   }, 100);
// }
// setTimeout(() => mainFunction(), 10);
//                                                             8 კვირა,დავალება 1
// 1,Callback Basics: Write a function that takes a callback as an argument and calls it after a delay of 1 second.

// function callCallback() {
//   console.log("HELLO");
// }
// function call(callBackFunc) {
//   setTimeout(callBackFunc, 1000);
// }
// call(callCallback);
//                                                       8 კვირა,დავალება2
// 2,Promise Basics: Create a promise that resolves after 2 seconds and logs a success message.

// function promise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("congratulations");
//     }, 2000);
//   });
// }
// promise().then((message) => {
//   console.log(message + " to you");
// });
//                                                           8 კვირა,დავალება3
// 3,Promise Chain: Create a chain of promises where each resolves after 1 second and logs a message.
// function promiseGenerator() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("congratulations");
//     }, 1000);
//   });
// }
// promiseGenerator()
//   .then((message) => {
//     console.log(message);
//     return promiseGenerator();
//   })
//   .then((message) => {
//     console.log(message);
//   });
//                                                             8 კვირა,დავალება 4
// 4, Async/Await: Write an asynchronous function using async/await that simulates fetching data from an API after 2 seconds.
// async function userData() {
//   let response = await fetch("https://api.github.com/users/marikuna246");
//   let data = await response.json();
//   console.log(data);
// }
// setTimeout(userData, 2000);

//                                                         8 კვირა,პრაქტიკული 2
//   1.write a function that runs after two seconds when  executed,counts 1 to 10 and then fetches the github user data
// async function getGithubUser(user) {
//   const response = await fetch(`https://api.github.com/users/${user}`);
//   const data = await response.json();
//   return data;
// }
// function mainFunction() {
//   let counter = 0;
//   const userPromise = getGithubUser("marikuna246");
//   let interval = setInterval(async () => {
//     counter++;
//     console.log(counter);
//     if (counter >= 10) {
//       clearInterval(interval);
//       console.log(await userPromise);
//     }
//   }, 100);
// }

// setTimeout(() => mainFunction(), 2000);

// 2. write a program that fetches two different data and prints them after both of them are fetched
// const fetchData1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
// const fetchData2 = fetch("https://jsonplaceholder.typicode.com/todos/2");
// Promise.all([fetchData1, fetchData2])
//   .then((responses) => {
//     return Promise.all(responses.map((responses) => responses.json()));
//   })
//   .then((data) => {
//     console.log(data);
//   });           <<<<<<<<<<<< ვიკითხო პრომის ალლზე ცვლადებზე

// 3, write a program that fetches 3 different data and prints the one,which will get faster to us
// const apiUrls = [
//   "https://jsonplaceholder.typicode.com/todos/1",
//   "https://jsonplaceholder.typicode.com/todos/2",
//   "https://jsonplaceholder.typicode.com/todos/3",
// ];
// function fetchFastestData() {
//   const promises = apiUrls.map((url) =>
//     fetch(url).then((response) => response.json())
//   );
//   return new Promise((resolve, reject) => {
//     Promise.race(promises)
//       .then((fastestData) => {
//         resolve(fastestData);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }
// fetchFastestData()
//   .then((data) => {
//     console.log("fastest api data", data);
//   })
//   .catch((error) => {
//     console.log("error while fetching data", error);
//   });

// function getData() {
//   const fetchData = fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = fetchData.then((x) => x.json());
//   const finalData = data.then((result) => console.log(result));
// }
// getData();

//    მე 8 კვირა,პრაქტიკული 1
//  1.დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს  callback ფუნქციებს და გამოიძახებს მათ იმის მიხედვით თუ რამდენად
// სწორად შესრულდა რაიმე პირობა.
//   დაწერეთ იგივე პირობა promise ის გამოყენებით
// function equalsCheck(successCallback, errorCallback) {
//   if (1 + 1 === 2) {
//     successCallback("equals");
//   } else {
//     errorCallback("dosn't equal");
//   }
// }
// equalsCheck(
//   (message) => {
//     console.log("succes", message);
//   },
//   (message) => {
//     console.log("failed", message);
//   }
// );

// function mainFunction() {
//   let counter = 0;
//   let interval = setInterval(() => {
//     counter++;
//     console.log(counter);
//     if (counter >= 10) {
//       clearInterval(interval);
//     }
//   }, 10);
// }

// mainFunction();
// async function getGithubUser(user) {
//   const response = await fetch(`https://api.github.com/users/${user}`);
//   const data = await response.json();
//   console.log(data);
// }

// function mainFunction() {
//   let counter = 0;
//   let interval = setInterval(() => {
//     counter++;
//     console.log(counter);
//     if (counter >= 10) {
//       clearInterval(interval);
//       getGithubUser("marikuna246");
//     }
//   }, 100);
// }
// setTimeout(mainFunction, 2000);

// async function getGithubUser(user) {
//   const response = await fetch(`https://api.github.com/todos/${user}`);
//   const data = await response.json();
//   return data;
// }

// function mainFunction() {
//   let counter = 0;
//   const userpromise = getGithubUser(1);
//   userpromise.then(() => {
//     console.log("fetching data is finished");
//   });
//   let interval = setInterval(async () => {
//     counter++;
//     console.log(counter);
//     if (counter >= 10) {
//       clearInterval(interval);
//       console.log(await userpromise);
//     }
//   }, 100);
// }
// setTimeout(mainFunction, 2000);

// const fetchdata1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
// const fetchdata2 = fetch("https://jsonplaceholder.typicode.com/todos/2");
// Promise.all([fetchdata1, fetchdata2])
//   .then((responses) => {
//     return Promise.all(responses.map((response) => response.json()));
//   })
//   .then((data) => {
//     console.log(data);
//   });

//                                                    მე 9 კვირა,სემინარი 1

// 1.  write a program wich will divide SVGAnimatedNumberList,be aware that both of values should be numbers and second number
// shouldn't be a zero

// function divide(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     throw new Error("values must be numbers");
//   }
//   if (b === 0) {
//     throw new Error("cann't divide by zero");
//   }
//   return a / b;
// }
// try {
//   console.log(divide(5, 0));
// } catch (error) {
//   console.log("failed:" + error);
// }

// 2.                             fetch github user api,handle errors
// async function getGithubUser(user) {
//   const response = await fetch(`https://api.github.com/users/${user}`);
//   if (!response.ok) {
//     throw new Error("failed while fetching");
//   }
//   const data = await response.json();
//   return data;
// }
// async function handleUser(username) {
//   try {
//     console.log(await getGithubUser(username));
//   } catch (error) {
//     console.log(error);
//   }
// }
// handleUser("marikuna246");

// 3,                               eloqount javascript exercise
// class MultiplicatorUnitFailure extends Error {}

// function primitiveMultiply(a, b) {
//   let random = Math.random();
//   if (random < 0.2) {
//     return a * b;
//   } else {
//     throw new MultiplicatorUnitFailure("Klunk");
//   }
// }

// function reliableMultiply(a, b) {
//   for (;;) {
//     try {
//       return primitiveMultiply(a, b);
//     } catch (error) {
//       if (!(error instanceof MultiplicatorUnitFailure)) {
//         console.log("something else");
//       }
//     }
//   }
// }

// console.log(reliableMultiply(8, 8));

// 4. write a program that parses string in to object.note that JSON string may be malformed
// function jsonParse(JSONstring) {
//   try {
//     const obj = JSON.parse(JSONstring);
//     return obj;
//   } catch (error) {
//     console.log("failed");
//   }
// }
// let JSONstring = '{name:john,"age":30}';
// console.log(jsonParse(JSONstring));

//                  მე 9 კვირა,დავალება 1
// class MultiplicatorUnitFailure extends Error {}

// function primitiveMultiply(a, b) {
//   if (Math.random() < 0.2) {
//     return a * b;
//   } else {
//     throw new MultiplicatorUnitFailure("Klunk");
//   }
// }

// function reliableMultiply(a, b) {
//   for (;;) {
//     try {
//       return primitiveMultiply(a, b);
//     } catch (error) {
//       if (!(error instanceof MultiplicatorUnitFailure)) {
//         console.log(error);
//       }
//     }
//   }
// }

// console.log(reliableMultiply(8, 8));

//                                        დავალება 2

// It is a box with a lock. There is an array in the box, but you can get at it only when the box is
// unlocked. Directly accessing the private _content property is forbidden.
// Write a function called withBoxUnlocked that takes a function value as argument, unlocks the
// box, runs the function, and then ensures that the box is locked again before returning,
// regardless of whether the argument function returned normally or threw an exception.

// const box = {
//   locked: true,
//   unlock() {
//     this.locked = false;
//   },
//   lock() {
//     this.locked = true;
//   },
//   _content: [],
//   get content() {
//     if (this.locked) throw new Error("Locked!");
//     return this._content;
//   },
// };

// function withBoxUnlocked(body) {
//   box.this.locked
// }

// withBoxUnlocked(function () {
//   box.content.push("gold piece");
// });

// try {
//   withBoxUnlocked(function () {
//     throw new Error("Pirates on the horizon! Abort!");
//   });
// } catch (e) {
//   console.log("Error raised: " + e);
// }
// console.log(box.locked);
// //
//                                                       მე 9 კვირა 2 სემინარი
//   ამოცანა1
// function one() {
//   console.log("start of one");
//   two();
//   console.log("end of one");
// }
// function two() {
//   console.log("start of two");
//   three();
//   console.log("end of two");
// }
// function three() {
//   console.log("start of three");
//   console.log("end of three");
// }
// one();

// recursion
// let counter = 0;
// function recursionFunc() {
//   console.log("hello");
//   counter++;
//   if (counter > 3) {
//     return;
//   }
//   recursionFunc();
// }
// recursionFunc();
//                                                       ამოცანა 2

// write a recursive function that finds factorial of the number.

// function factorialRecursion(number) {
//   if (number < 0) {
//     return "enter the positive integer";
//   }
//   if (number === 0 || number === 1) {
//     return 1;
//   } else {
//     return number * factorialRecursion(number - 1);
//   }
// }
// console.log(factorialRecursion(5));

// function factorial(number) {
//   if (number < 0) {
//     return "enter the positive integer";
//   }
//   let result = 1;
//   for (let i = 1; i <= number; i++) {
//     result = result * i;
//   }
//   return result;
// }
// console.log(factorial(5));

//                                                       მე 9 კვირა სემინარი 3

// 1,Write a recursive function that prints numbers from a given positive integer down to 1.
// function recursionToOne(number) {
//   if (number < 1) {
//     return;
//   }
//   console.log(number);
//   recursionToOne(number - 1);
// }
// recursionToOne(5);

// 2,                     Create a recursive function to find the length of a given string.
// let count = 0;
// function findLength(string) {
//   if (string === "") {      <<<<<<<<<< string.length ==== 0  ასე რატომ არ კეთდება ვიკითხო
//     return count;
//   } else {
//     count++;
//     return findLength(string.slice(1));
//   }
// }

// console.log(findLength("beautiful"));

// 3,Write a recursive function to determine if a given integer is even or odd.
// function evenOrOdd(num) {
//   if (num === 0) {
//     return "luwia";
//   }
//   if (num === 1) {
//     return "kentia";
//   }
//   return evenOrOdd(num - 2);
// }
// console.log(evenOrOdd(9));

// 4,Write a recursive function to find the sum of the first n natural numbers.
// function Sum(number) {
//   if (number <= 1) {
//     return number;
//   } else {
//     return number + Sum(number - 1);
//   }
// }
// console.log(Sum(6));
//                                                მე 9 თავი,დავალება 1

// 1,Write a recursive function that prints numbers from a given positive integer down to 1.

// function print(num) {
//   if (num < 1) {
//     return;
//   } else {
//     console.log(num);
//     return print(num - 1);
//   }
// }
// console.log(print(9));
//                                                       დავალება 2
// 2,Factorial:
// Implement a recursive function to calculate the factorial of a non-negative integer.
// function countFactorial(num) {
//   if (num === 1) {
//     return num;
//   } else {
//     return num * countFactorial(num - 1);
//   }
// }
// console.log(countFactorial(5));
//                                                      დავალება 3

// Sum of Natural Numbers:
// Write a recursive function to find the sum of the first n natural numbers.
// function sum(num) {
//   if (num === 0) {
//     return num;
//   } else {
//     return num + sum(num - 1);
//   }
// }
// console.log(sum(9));
//                                                           დავალება 4
// String Length:
// Create a recursive function to find the length of a given string.
// count = 0;
// function findLength(string) {
//   if (string === "") {                     <<<< string.length === 0  ამით რატომ არ კეთდება?
//     return count;
//   } else {
//     count++;
//     return findLength(string.slice(1));
//   }
// }
// console.log(findLength("beautiful"));

//                                                         დავალება 5
// Print Array Elements:
// Write a recursive function to print all elements of an array.
// let array = ["sky", "dog", "elephant", "name"];

// function printArayElements(arr) {
//   if (arr.length === 0) {
//     return;                <<<<<<<< პრინტავს მაგრამ უნდეფაინდს აგდებს კიდე და რატო?
//   } else {
//     console.log(arr[0]);
//     return printArayElements(arr.slice(1));
//   }
// }

// console.log(printArayElements(array));

//                                                          დავალება 6
// Power of 2:
// Implement a recursive function to check if a given number is a power of 2.
// function powerOfTwo(num) {
//   if (num === 1) {
//     return "არ არის 2 ის ჯერადი";
//   }
//   if (num === 0) {
//     return "არის 2 ის ჯერადი";
//   }
//   return powerOfTwo(num - 2);
// }
// console.log(powerOfTwo(24));
//                                                             დავალება 7
// Even or Odd:
// Write a recursive function to determine if a given integer is even or odd.
// function EvenOrOdd(num) {
//   if (num === 1) {
//     return "კენტია";
//   }
//   if (num === 0) {
//     return "ლუწია";
//   }
//   return EvenOrOdd(num - 2);
// }
// console.log(EvenOrOdd(7));
// async function check() {
//   try {
//     const response = await fetch("https://jsonacder.typicode.com/todos/1");
//     const data = await response.json();
//     console.log(data);
//     console.log("nini");
//     if (!response.ok) {
//       throw new Error("something went wrong");
//     }
//   } catch (error) {}
// }
// check();
// console.log("nini");

// if (num1 > 3) {
//   console.log("metia");
// }

// try {
//   if (num1 > 3) {
//     console.log("metia");
//   }
// } catch (error) {
//   console.log("test");
// }

// if (num1 > 3) {
//   console.log("metia");
// }

// function sum(num, num1) {
//   consle.log(num + num1);
// }
// console.log(sum(3, 6));
// try {
//   console.log(sum(3, 6));
// } catch (error) {
//   console.log("testtt");
// }

//---------------------------------------------------------- თავი 11,პრაქტიკული 1

// 1,შექმენით მანქანის პროტოტიპი,რომელსაც ექნება ძირითადი მახასიათებლები(მა.ბორბლების რაოდენობა,start მეთოდი,)ამ პროტოტიპის გამოყენებით
// შექმენით რამდენიმე ბრენდის მანქანის ობიექტი სიჩქარის პროფერთით
// გააკეთეთ იგივე კლასების გამოყენებით

// const Car = {
//   wheels: 4,
//   start() {
//     return "car is starting";
//   },
// };

// const BMW = Object.create(Car);
// const Mercedes = Object.create(Car);
// BMW.speed = 250;
// Mercedes.speed = 260;

// console.log(BMW.start());

//

// 2,create a set of javascript to represent different shapes(e.g. triangle,circles circle),each shape class should have a method
// named calculatearea() thar calculates and returns the area of the shape.use polymorphism to ensure that you can call calculatearea()
// on any object shape,regardles of its specific class
// class Shape {
//   calculateArea() {
//     return;
//   }
// }
// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }
//   calculataArea() {
//     return Math.PI * Math.pow(this.radius, 2);
//   }
// }
// class Square extends Shape {
//   constructor(side) {
//     super();
//     this.side = side;
//   }
//   calculateArea() {
//     return this.side ** 2;
//   }
// }
// class Triangle extends Shape {
//   constructor(base, height) {
//     super();
//     this.base = base;
//     this.height = height;
//   }
//   calculateArea() {
//     return 0.5 * this.base * this.height;
//   }
// }

// const shape = new Shape();
// const circle = new Circle(10);
// const square = new Square(10);
// const triangle = new Triangle(10, 5);
// console.log(circle.calculataArea());
// console.log(square.calculateArea());
// console.log(triangle.calculateArea());

// 3 create a javascript class,representing a bank account,with private properties for the account holders name and balance
// implement methods to deposit and withdraw funds.ensuring that the balance is updated securely.use encapsulation to hide
// internal details of the bank account and provide controlled access to its properties.
/*class BankAccount {
  constructor(accountHolder, balance) {
    this._accountHolder = accountHolder;
    this._balance = balance;
    this.getaccountHolder = () => {
      return this._accountHolder;
    };
    this.getBalance = function () {
      return this._balance;
    };
    this.deposit = (amount) => {
      this._balance += amount;
    };
    this.withdraw = (amount) => {
      if (amount > this._balance) {
        throw new Error("not enough money on your account");
      } else {
        this._balance -= amount;
      }
    };
  }
}
const account = new BankAccount("baqari", 100);
console.log(account.getaccountHolder());
console.log(account.getBalance());
account.deposit(50);
console.log(account.getBalance());
try {
  account.withdraw(1300);
} catch (error) {
  console.log(error.message);
}
console.log(account.getBalance());*/

// --------------------------------11 თავი,დავალებები
// 1,Create a Class: Create a class called Person with properties name and age. Instantiate an object and display its details.
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const driver = new Person("beqa", 34);
// console.log(driver);

// 2,Class Inheritance: Create a class Student that inherits from the Person class. Add a new property grade to the Student class.
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age);
//     this.grade = grade;
//   }
// }
// const atosani = new Student("zviadi", 44, 10);
// console.log(atosani);

// 3,Encapsulation: Create a class BankAccount with a private property balance. Implement
// methods to deposit and withdraw funds, ensuring that the balance is updated accordingly.

// class BankAccount {
//   constructor(user, balance) {
//     this.user = user;
//     this._balance = balance;
//   }
//   deposit(money) {
//     return (this._balance = this._balance + money);
//   }
//   getbalance() {
//     return this._balance;
//   }
//   withDraw(money) {
//     if (money > this._balance) {
//       console.log("მაგდენი არ გაქ ჯო");
//     }
//     return (this._balance = this._balance - money);
//   }
// }
// const client = new BankAccount("baqari", 100);
// console.log(client.getbalance());
// console.log(client.deposit(50));
// console.log(client.getbalance());
// client.withDraw(150);
// console.log(client.getbalance());

// -----------------------------------------თავი 11,პრაქტიკული 2
// 1, create a javascript class,representing a bank account,with private properties for the account holders name and balance
// implement methods to deposit and withdraw funds.ensuring that the balance is updated securely.use encapsulation to hide
// internal details of the bank account and provide controlled access to its properties.
// class BankAccount {
//   #accountHolder;
//   #balance;
//   constructor(accountHolder, balance) {
//     this.#accountHolder = accountHolder;
//     this.#balance = balance;
//     this.getaccountHolder = () => {
//       return this.#accountHolder;
//     };
//     this.getBalance = function () {
//       return this.#balance;
//     };
//     this.deposit = (amount) => {
//       this.#balance += amount;
//     };
//     this.withdraw = (amount) => {
//       if (amount > this.#balance) {
//         throw new Error("not enough money on your account");
//       } else {
//         this.#balance -= amount;
//       }
//     };
//   }
// }
// const account = new BankAccount("baqari", 100);
// console.log(account.getaccountHolder());
// console.log(account.getBalance());
// account.deposit(50);
// console.log(account.getBalance());
// try {
//   account.withdraw(1300);
// } catch (error) {
//   console.log(error.message);
// }
// console.log(account.getBalance());

/* 2.
Task: Online Shopping System
Create an Online Shopping System that consists of different classes to represent various entities in the system. 
Implement features such as products, shopping carts, users, and orders.
Product Class:
    Private properties:
        - productId (string): A unique identifier for each product.
        - productName (string): The name of the product.
        - price (number): The price of the product.
    Public methods:
        - getProductId(): Returns the product ID.
        - getProductName(): Returns the product name.
        - getPrice(): Returns the price.
ShoppingCart Class: 
    Private properties:
        - cartId (string): A unique identifier for each shopping cart.
        - items (array): An array to store the products added to the cart.
    Public methods:
        - getCartId(): Returns the cart ID.
        - addItem(product): Adds a product to the cart.
        - removeItem(product): Removes a product from the cart.
        - calculateTotal(): Calculates and returns the total price of items in the cart.  
        
User Class:
    Private properties:
        - userId (string): A unique identifier for each user.
        - username (string): The username of the user.
        - email (string): The email address of the user.
        - products(array): bought products
    Public methods:
        - getUserId(): Returns the user ID.
        - getUsername(): Returns the username.
        - getEmail(): Returns the email address.
        - getProducts(): Returs the products
Create function called order, that will be used to empty shopping cart and give the products to user
*/

/*class Product {
  #productId;
  #productName;
  #price;

  constructor(productId, productName, price) {
    this.#productId = productId;
    this.#productName = productName;
    this.#price = price;
  }

  getProductId() {
    return this.#productId;
  }

  getProductName() {
    return this.#productName;
  }

  getPrice() {
    return this.#price;
  }

  getProductInfo() {
    return {
      productId: this.#productId,
      productName: this.#productName,
      price: this.#price,
    };
  }
}

const product1 = new Product("1", "product1", 100);
const product2 = new Product("2", "product2", 200);
const product3 = new Product("3", "product3", 300);
const product4 = new Product("4", "product4", 400);

class ShoppingCart {
  #cartId;
  #items;

  constructor(cartId) {
    this.#cartId = cartId;
    this.#items = [];
  }

  getCartId() {
    return this.#cartId;
  }

  getItems() {
    return this.#items;
  }

  getShoppingCartInfo() {
    return this.#items.map((product) => product.getProductInfo());
  }

  addItem(product) {
    this.#items.push(product);
  }

  removeItem(product) {
    const index = this.#items.indexOf(product);
    if (index !== -1) {
      this.#items.splice(index, 1);
    }
  }

  calculateTotal() {
    return this.#items.reduce(
      (total, product) => total + product.getPrice(),
      0
    );
  }

  clear() {
    this.#items = [];
  }
}

const shoppingCart1 = new ShoppingCart("1");
// console.log(shoppingCart1.getItems());
shoppingCart1.addItem(product1);
shoppingCart1.addItem(product2);
shoppingCart1.addItem(product3);
shoppingCart1.addItem(product4);
shoppingCart1.removeItem(product1);
// console.log(shoppingCart1.getItems());
let mappedArr = shoppingCart1
  .getItems()
  .map((product) => product.getProductInfo());
// console.log(mappedArr);

class User {
  #userId;
  #username;
  #email;
  #products;

  constructor(userId, username, email) {
    this.#userId = userId;
    this.#username = username;
    this.#email = email;
    this.#products = [];
  }

  getUserId() {
    return this.#userId;
  }

  getUsername() {
    return this.#username;
  }

  getEmail() {
    return this.#email;
  }

  getProducts() {
    return this.#products;
  }

  getUserProductsInfo() {
    return this.#products.map((product) => product.getProductInfo());
  }

  orderProduct(product) {
    this.#products.push(product);
  }
}

const user1 = new User("1", "temo", "temo@gmail.com");

class Order {
  static order(user, shoppingCart) {
    shoppingCart.getItems().forEach((product) => {
      user.orderProduct(product);
    });

    shoppingCart.clear();
  }
}

console.log("shopping cart before", shoppingCart1.getShoppingCartInfo());
console.log("user products before", user1.getUserProductsInfo());

Order.order(user1, shoppingCart1);

console.log("user products after", user1.getUserProductsInfo());
console.log("shopping cart after", shoppingCart1.getShoppingCartInfo());*/

// -----------------------------------------1 კვირა,პრაქტიკული1
/*
1,Create a function that always returns true for every item in a given list. However, if an element is the word "flick", 
switch to always returning the opposite boolean value.
Examples
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
Notes
"flick" will always be given in lowercase.
A list may contain multiple flicks.
Switch the boolean value on the same element as the flick itself.
*/
// function flick(arr) {
//   let flick = true;
//   return arr.map((word) => {
//     if (word === "flick") {
//       flick = !flick;
//     }
//     if (flick) {
//       return true;
//     }
//     return false;
//   });
// }
// console.log(flick(["bicycle", "jarmony", "flick", "sheep", "flick"]));

// function flick(arr) {
//   let flick = true;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "flick") {
//       flick = !flick;
//     }
//     if (flick) {
//       arr[i] = true;
//     } else {
//       arr[i] = false;
//     }
//   }
//   return arr;
// }
// console.log(flick(["bicycle", "jarmony", "flick", "sheep", "flick"]));

// 2,Write a function that determines if string is pangram (includes all the lettes of alphabet)
// ------------------------ პირველი გზა
// function isPangram(string) {
//   let lowstring = string.toLowerCase();
//   const alphabetArray = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   for (let char of alphabetArray) {
//     if (!lowstring.includes(char)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPangram("the quick brown fox JUMPS over the lazy dog"));
// ----------------------------------მეორე გზა
// function isPangram(string) {
//   let lowstring = string.toLowerCase();
//   let newString = "";
//   for (let char of lowstring) {
//     if (char >= "a" && char <= "z") {
//       newString += char;
//     }
//   }
//   let charset = new Set(newString);
//   if (charset.size === 26) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPangram("the quick brown fox JUMPS over the lazy dog"));

// -------------------------------   მე 3 გზა
// function isPangram(string) {
//   let newString = string.replace(/[^a-zA-Z]/g, "");
//   console.log(newString);
//   let charSet = new Set(newString.toLowerCase());
//   return charSet.size === 26;
// }

// console.log(isPangram("the quick brown fox JUMPS OVER the lazy dog"));

//  -------------------------------------------1 თავი,2 პრაქტიკული
// 1, რიცხვების დალაგება სორტით
// let array = [-45, 43, 12, 7, 4, 87, 45, 9];
// function bubbleSort(arr) {
//   return arr.sort((a, b) => a - b);
// }
// console.log(bubbleSort(array));
// ------------------------------- რიცხვების დალაგება bubble სორტ ალგორითმით
// let array = [-45, 43, 12, 7, 4, 87, 45, 9];
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort(array));

// ----------------------- რიცხვების დალაგება selectios sort ით
// let array = [45, 43, 12, 7, 4, -87, 45, 9];
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let biggest = arr[0];
//     let index = 0;
//     for (let j = 1; j < arr.length - 1 - i; j++) {
//       if (arr[j] > biggest) {
//         biggest = arr[j];
//         index = j;
//       }
//     }
//     let temp = arr[arr.length - i - 1];
//     arr[arr.length - i - 1] = biggest;
//     arr[index] = temp;
//   }
//   return arr;
// }
// console.log(selectionSort(array));
// --------------------------- მე 2 კვირა,პრაქტიკული2
// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   const pivotIndex = Math.floor(arr.length / 2);
//   const pivot = arr[pivotIndex];
//   const left = [];
//   const right = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === pivot) {
//       continue;
//     }
//     if (arr[i] > pivot) {
//       right.push(arr[i]);
//     } else {
//       left.push(arr[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }
// console.log(quickSort([9, -3, 5, 2, 6, 8, -6, 1, 3]));

// ------------------------------------------------------------------------  linear search
// function lineaSearch(arr, element) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === element) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(lineaSearch([2, 3, 5, 7, 9], 7));

// ---------------------------------------------------------------------binary search
// function binarySearch(arr, target) {
//   let low = 0;
//   let high = arr.length - 1;
//   while (low <= high) {
//     const mid = Math.floor((high + low) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] > target) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return -1;
// }
// console.log(binarySearch([2, 3, 5, 7, 8, 10, 12, 15, 18, 20], 45));

//----------------------------------------------codewars;
