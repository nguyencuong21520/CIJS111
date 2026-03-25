// let price = 40000
// let formatPrice = price.toLocaleString() 
// let name1 = "Bach"

// console.log("Giá phải trả: " + price + " VNĐ")
// console.log(`Giá phải trả cua ${name1} la: ${formatPrice} VNĐ`)



// function sayHello(name, age, adress) {
//     //logic here
//     return `Hello, ${name}! I'm ${age}, I live in ${adress}.`;
// }


// const sayHello2 = (name, age, adress) => {
//     //logic here
//     return `Hello, ${name}! I'm ${age}, I live in ${adress}.`;
// }

// const hello1 = (name) =>{
//     // No Logic
//     return `Hello, ${name}!`;
// }

// const sum = (a,b) => a + b;

// const sum2 = (a,b) =>{
//     return a + b;
// }


// Viết 1 function tính tổng tất cả các số đầu vào
// - số đầu tiên thì nhân 2
// - số thứ 2 thì nhân 3

// const sumAll = (a, b, c , ...agrs) =>{
//     console.log("🚀 ~ sumAll ~ agrs:", agrs)
//     console.log("🚀 ~ sumAll ~ b:", b)
//     console.log("🚀 ~ sumAll ~ a:", a)


//     let sum = 0;
//     for(let i = 0; i<agrs.length; i++){
//         sum += agrs[i];
//     }
//     return sum;
// }


// console.log(sumAll(1,2, 3,4, 5, 6));
import { sum } from "./math.js"

import { successMsg as byebye, errorMsg } from "./logMsg.js"



const sumResult = sum(4,6)


byebye(sumResult)
errorMsg("Hello")

hello("aaaaa")