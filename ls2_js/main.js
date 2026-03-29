//Array

//1. Tạo
// const arr = [1,2,3,4]

//2. Đọc
// console.log(arr[0])
// console.log(arr[1])

//Detructuring

// const frust = ["apple", "banana", "cherry"]

// let qua1 = frust[0]
// let qua2 = frust[1]
// let qua3 = frust[2]

// let [qua_1, qua_2, qua_3, qua_4] = frust //Destructuring

// console.log(qua_1)
// console.log(qua_2)
// console.log(qua_3)
// console.log(qua_4)


//3. Chỉnh sửa

// const frust = ["apple", "banana", "cherry"]

// frust[1] = "orange"
// frust[3] = "mango"
// console.log(frust)

//4. Phương thức của Array

// const fruits = ["apple", "banana", "cherry"]
//push: thêm phần tử vào cuối mảng
//fruits.push("mango") // fruits[fruits.length] = "mango"
//pop: xóa phần tử cuối mảng
// fruits.pop()
//shift: xóa phần tử đầu mảng
// fruits.shift()
//unshift: thêm phần tử vào đầu mảng   
// fruits.unshift("mango")
//splice: xóa phần tử từ vị trí index
// fruits.splice(1, 0, "orange", "pineapple" )
// fruits.splice(0, 1, "orange", "carrot");

// console.log(fruits)

// ["apple", "banana", "cherry"] => ["apple", "banana", "orage", "carrot"]

//5. Map
// const numbers = ["apple", "banana", "cherry"]

// const numbers2 = numbers.map((bye, aloalo, array)=>{
//     return `${bye} at index ${aloalo} is a fruit`
// })
// console.log("🚀 ~ numbers2:", numbers2)
// console.log("🚀 ~ numbers:", numbers)

//6. Filter
// const numbers = [1, 2, 3, 4, 5]
// const numbers2 = numbers.filter((currentValue, index, array)=>{
//     return currentValue % 2 === 0
// })
// console.log("🚀 ~ numbers2:", numbers2)

//7. Find
// const numbers = [1, 2, 3, 4, 5]
// const result = numbers.find((currentValue, index, array)=>{
//     return currentValue > 10
// })
// console.log("🚀 ~ result:", result)

//8. FindIndex
// const numbers = [1, 2, 3, 4, 5]
// const result = numbers.findIndex((currentValue, index, array)=>{
//     return currentValue > 10
// })
// console.log("🚀 ~ result:", result)

//9. Reduce
// const numbers = [1, 2, 3, 4, 5]
// const result = numbers.reduce((total, currentValue, index, array)=>{
//     return total + currentValue
// }, 0)
// console.log("🚀 ~ result:", result)

//10. Some
// const numbers = [1, 2, 3, 4, 5]
// const result = numbers.some((currentValue, index, array)=>{
//     return currentValue > 10
// })
// console.log("🚀 ~ result:", result)

//11. Every
// const numbers = [1, 2, 3, 4, 5]
// const result = numbers.every((currentValue, index, array)=>{
//     return currentValue > 10
// })

//II. Object

//1. Tạo
// const student = {
//     name: "Bách",
//     age: 16,
//     address: "Hà Nội"
// }

// const product = {
//     name: "Dây sạc tự ngắt - Dây cáp sạc dữ liệu...",

// }

//2. Đọc
// console.log(student.name)
// console.log(student["name"])

//Destructuring
// const {name, age, address} = student
// console.log(name)
// console.log(age)
// console.log(address)

//3. Xoá

// const student = {
//     name: "Bách",
//     age: 16,
//     address: "Hà Nội"
// }
// console.log("🚀 ~ student:", student)

// delete student.age
// console.log("🚀 ~ student after delete:", student)

//4. Chỉnh sửa
// const student = {
//     name: "Bách",
//     age: 16,
//     address: "Hà Nội"
// }


// student.age = 17
// console.log("🚀 ~ student after update:", student)

//5. Thêm
// const student = {
//     name: "Bách",
//     age: 16,
//     address: "Hà Nội"
// }

// student.email = "bach@gmail.com"
// console.log("🚀 ~ student after add:", student)

//6. For in
// const student = {
//     name: "Bách",
//     age: 16,
//     address: "Hà Nội"
// }
// for(let key in student){
//     console.log(student[key])
// }

//7. Object.keys
// const student = {
//     name: "Bách",
//     age: 16,
//     address: "Hà Nội",
//     email: "bach@gmail.com"
// }
// const keys = Object.keys(student)
// console.log(keys)

//8. Object.values
// const values = Object.values(student)
// console.log("🚀 ~ values:", values)

//9. Object.assign
// const bach1 = {
//     name: "Bách",
//     age: 16,
// }
// const bach2 = {
//     address: "Hà Nội",
//     email: "bach@gmail.com"
// }

// const bach = Object.assign(bach1, bach2)
// console.log("🚀 ~ bach:", bach)

// III Spread operator


// const arr = [1, 2, 3, 4, 5]
// const arr2 = [...arr]
// console.log("🚀 ~ arr2:", arr2)

// arr[2] = 10
// console.log("🚀 ~ arr:", arr) // 1,2,10,4,5
// console.log("🚀 ~ arr2 after update:", arr2) //1,2,3,4,5

// const obj = {
//     name: "Bách",
//     age: 16,
//     address: "Hà Nội"
// }

// const obj2 = {
//     email: "bach@gmail.com",
//     hobbies: ["play game", "sleep"]
//  }
// const obj3 = { ...obj,...obj2 }
// console.log("🚀 ~ obj3:", obj3)
