// ---------------------------------------------------- მრავალ მასივში ვიპოვოთ საერთო ელემენტები
// let array = [1, 2, 3, 4, 5];
// let array2 = [5, 6, 7, 8, 9, 2];
// let array3 = [6, 7, 8, 2];
// function foo(...arr) {
//   let newArr = [];
//   let baseArr = arr[0];
//   for (let i = 0; i < baseArr.length; i++) {
//     let a = true;
//     for (let j = 1; j < arr.length; j++) {
//       if (!arr[j].includes(baseArr[i])) {
//         a = false;
//         break;
//       }
//     }
//     if (a) {
//       newArr.push(baseArr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(foo(array, array2, array3));

// ---------------------------------------// დავთვალო მასივში თითოეული ელემენტი რამდენჯერ გვხვდება
// function foo() {
//     let item;
//     let arr = [];
//     for (; true; ) {
//       item = prompt("what i have to bye ?");
//       if (item === "") {
//         break;
//       }
//       arr.push(item);
//     }
//     //   let arr=[ana,gio,ana,ana,lasha,beqa,temo,lasha]
//     let obj = {};
//     for(let i=0;i<arr.length;i++){
//         if(!obj.hasOwnProperty(arr[i])){
//             obj[arr[i]] =1
//         }else{
//             obj[arr[i]]+=1
//         }
//     }
//     return obj
//   }
//   console.log(foo())

// -----------------------------მეორე გზა

// function foo() {
//   let item;
//   let arr = [];
//   for (; true; ) {
//     item = prompt("what i have to bye ?");
//     if (item === "") {
//       break;
//     }
//     arr.push(item);
//   }
//   //   let arr=[ana,gio,ana,ana,lasha,beqa,temo,lasha]
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     let count = 1;

//     if (obj.hasOwnProperty(arr[i])) {
//       continue;
//     } else {
//       obj[arr[i]] = count;
//     }

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//         obj[arr[i]] = count;
//       }
//     }
//   }
//   return obj;
// }
// console.log(foo());
