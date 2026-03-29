# Lesson 2 - Array, Object & Spread Operator

## I. Array

### 1. Create

```js
const arr = [1, 2, 3, 4]
```

### 2. Read (Access elements)

```js
console.log(arr[0]) // 1
console.log(arr[1]) // 2
```

### 3. Destructuring

```js
const fruits = ["apple", "banana", "cherry"]

// Traditional way
let qua1 = fruits[0]
let qua2 = fruits[1]

// Destructuring
let [qua_1, qua_2, qua_3] = fruits
```

### 4. Update

```js
const fruits = ["apple", "banana", "cherry"]
fruits[1] = "orange"  // ["apple", "orange", "cherry"]
fruits[3] = "mango"   // ["apple", "orange", "cherry", "mango"]
```

### 5. Array Methods (Mutating)

| Method      | Description                          | Example                                      |
| ----------- | ------------------------------------ | -------------------------------------------- |
| `push()`    | Add element to the end               | `fruits.push("mango")`                       |
| `pop()`     | Remove last element                  | `fruits.pop()`                                |
| `shift()`   | Remove first element                 | `fruits.shift()`                              |
| `unshift()` | Add element to the beginning         | `fruits.unshift("mango")`                    |
| `splice()`  | Add/remove elements at given index   | `fruits.splice(1, 0, "orange", "pineapple")` |

**`splice(startIndex, deleteCount, ...items)`**

```js
fruits.splice(1, 0, "orange", "pineapple") // insert at index 1, delete 0
fruits.splice(0, 1, "orange", "carrot")    // replace 1 element at index 0
```

### 6. Array Methods (Non-mutating)

#### `map()` — Transform each element, returns a new array

```js
const fruits = ["apple", "banana", "cherry"]
const result = fruits.map((value, index) => {
    return `${value} at index ${index} is a fruit`
})
```

#### `filter()` — Keep elements that pass a condition

```js
const numbers = [1, 2, 3, 4, 5]
const evens = numbers.filter((value) => value % 2 === 0) // [2, 4]
```

#### `find()` — Return the **first** element matching a condition (or `undefined`)

```js
const numbers = [1, 2, 3, 4, 5]
const result = numbers.find((value) => value > 3) // 4
```

#### `findIndex()` — Return the **index** of the first match (or `-1`)

```js
const numbers = [1, 2, 3, 4, 5]
const result = numbers.findIndex((value) => value > 3) // 3
```

#### `reduce()` — Accumulate values into a single result

```js
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((total, currentValue) => {
    return total + currentValue
}, 0) // 15
```

#### `some()` — Returns `true` if **at least one** element passes the condition

```js
const numbers = [1, 2, 3, 4, 5]
numbers.some((value) => value > 3) // true
```

#### `every()` — Returns `true` if **all** elements pass the condition

```js
const numbers = [1, 2, 3, 4, 5]
numbers.every((value) => value > 0) // true
numbers.every((value) => value > 10) // false
```

---

## II. Object

### 1. Create

```js
const student = {
    name: "Bách",
    age: 16,
    address: "Hà Nội"
}
```

### 2. Read (Access properties)

```js
student.name        // dot notation
student["name"]     // bracket notation
```

### 3. Destructuring

```js
const { name, age, address } = student
```

### 4. Delete

```js
delete student.age
```

### 5. Update

```js
student.age = 17
```

### 6. Add new property

```js
student.email = "bach@gmail.com"
```

### 7. Iterate — `for...in`

```js
for (let key in student) {
    console.log(student[key])
}
```

### 8. Object Static Methods

| Method              | Description                        | Returns            |
| ------------------- | ---------------------------------- | ------------------ |
| `Object.keys(obj)`  | Get all property names             | `string[]`         |
| `Object.values(obj)`| Get all property values            | `any[]`            |
| `Object.assign()`   | Merge objects into a target object | merged object      |

```js
const keys = Object.keys(student)     // ["name", "age", "address"]
const values = Object.values(student)  // ["Bách", 16, "Hà Nội"]

const bach = Object.assign(
    { name: "Bách", age: 16 },
    { address: "Hà Nội", email: "bach@gmail.com" }
)
```

---

## III. Spread Operator (`...`)

### With Arrays — Shallow copy

```js
const arr = [1, 2, 3, 4, 5]
const arr2 = [...arr] // independent copy

arr[2] = 10
// arr  → [1, 2, 10, 4, 5]
// arr2 → [1, 2, 3, 4, 5]  (unchanged)
```

### With Objects — Merge objects

```js
const obj = { name: "Bách", age: 16, address: "Hà Nội" }
const obj2 = { email: "bach@gmail.com", hobbies: ["play game", "sleep"] }

const obj3 = { ...obj, ...obj2 }
// { name: "Bách", age: 16, address: "Hà Nội", email: "bach@gmail.com", hobbies: [...] }
```

---

## Quick Reference

```
Array (ordered, index-based)        Object (key-value pairs)
──────────────────────────────      ──────────────────────────
Create:  [1, 2, 3]                  { key: value }
Read:    arr[0]                     obj.key / obj["key"]
Update:  arr[0] = 10                obj.key = newValue
Delete:  splice()                   delete obj.key
Loop:    map/filter/reduce/find     for...in / Object.keys()
Copy:    [...arr]                   { ...obj }
```
