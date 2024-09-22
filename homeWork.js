//                                                              ეტაპი 1,მასივები
// 1,Find the Maximum Subarray Sum: Write a function that takes an array of integers as input and finds
// the contiguous subarray within the array that has the largest sum. Return the sum of that subarray.
// For example, given the array [-2, 1, -3, 4, -1, 2, 1, -5, 4], the function should return 6, which
// corresponds to the sum of the subarray [4, -1, 2, 1].
// let array =  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// function sum(arr){
//     let max=-Infinity
//     for(let i = 0;i<arr.length;i++){
//         let sum = arr[i]
//         for(let j=i+1;j<arr.length;j++){
//             sum+=arr[j]
//             if(sum>max){
//             max=sum
//             }
//         }
//     }
//     return max

// }
// console.log(sum(array))

//------------------------------------------------------------------   მეორე გზა
// let array =  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// function sum(arr){
//     let newArr=[]
//     for(let i = 0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             newArr.push(arr.slice(i,j).reduce((acc,current)=> acc+current,0))

//         }
//     }
//    return newArr.sort((a,b)=>b-a)[0]
// }
// console.log(sum(array))
// let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// function foo(arr) {
//   let largest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (
//         arr.slice(i, j).reduce((acc, current) => acc + current, 0) > largest
//       ) {
//         largest = arr.slice(i, j).reduce((acc, current) => acc + current, 0);
//       }
//     }
//   }
//   return largest;
// }
// console.log(foo(array));

// დავთვალო მასივში თითოეული ელემენტი რამდენჯერ გვხვდება
