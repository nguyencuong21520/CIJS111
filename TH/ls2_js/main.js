// ============================================================
// MAIN.JS - File thực thi chương trình, test tất cả 29 bài tập
// Import các hàm từ 3 file module và chạy thử
// ============================================================

import {
  sumArray, sumArray2, sumArray3,
  countOccurrences, countOccurrences2, countOccurrences3,
  removeDuplicates, removeDuplicates2, removeDuplicates3,
  flattenArray, flattenArray2, flattenArray3,
  isSymmetric, isSymmetric2, isSymmetric3,
  findSecondLargest, findSecondLargest2,
  sortProductsByPrice, sortProductsByPrice2,
  findMostExpensiveProduct, findMostExpensiveProduct2, findMostExpensiveProduct3,
  groupByType, groupByType2,
  isSubset, isSubset2, isSubset3,
} from "./array-basic-utils.js";

import {
  findMaxKey, findMaxKey2,
  mergeObjectsSumValues, mergeObjectsSumValues2,
  countElements, countElements2, countElements3,
  cleanObject, cleanObject2, cleanObject3,
  hasDuplicate, hasDuplicate2, hasDuplicate3,
  sumByGroup, sumByGroup2,
  uniqueValues, uniqueValues2,
  isPermutation, isPermutation2,
} from "./object-and-check-utils.js";

import {
  findLongestString, findLongestString2, findLongestString3,
  intersection, intersection2,
  filterByMinValue, filterByMinValue2,
  findLongestValue, findLongestValue2,
  groupByFirstLetter, groupByFirstLetter2,
  getAdults, getAdults2,
  convertToArray, convertToArray2, convertToArray3,
  sortStringsByLength, sortStringsByLength2,
  sumByKey, sumByKey2, sumByKey3,
  countWords, countWords2,
  findMinKey, findMinKey2,
} from "./string-and-misc-utils.js";

// ---- Dữ liệu dùng chung ----
const products = [
  { name: "Product A", price: 30 },
  { name: "Product B", price: 20 },
  { name: "Product C", price: 50 },
];

const items = [
  { type: "fruit", name: "apple" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "banana" },
];

const priceItems = [
  { type: "fruit", price: 10 },
  { type: "vegetable", price: 20 },
  { type: "fruit", price: 30 },
];

const people = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 16 },
  { name: "David", age: 22 },
];

// ---- Bài 1: sumArray ----
console.log("=== Bài 1: sumArray ===");
console.log("Cách 1 (reduce):", sumArray([1, 2, 3, 4]));
console.log("Cách 2 (for):", sumArray2([1, 2, 3, 4]));
console.log("Cách 3 (for...of):", sumArray3([1, 2, 3, 4]));

// ---- Bài 2: countOccurrences ----
console.log("\n=== Bài 2: countOccurrences ===");
console.log("Cách 1 (filter):", countOccurrences([1, 2, 2, 3, 2], 2));
console.log("Cách 2 (reduce):", countOccurrences2([1, 2, 2, 3, 2], 2));
console.log("Cách 3 (for):", countOccurrences3([1, 2, 2, 3, 2], 2));

// ---- Bài 3: removeDuplicates ----
console.log("\n=== Bài 3: removeDuplicates ===");
console.log("Cách 1 (Set):", removeDuplicates([1, 2, 2, 3, 4, 4, 6, 2, 3, 6]));
console.log("Cách 2 (filter):", removeDuplicates2([1, 2, 2, 3, 4, 4, 6, 2, 3, 6]));
console.log("Cách 3 (loop):", removeDuplicates3([1, 2, 2, 3, 4, 4, 6, 2, 3, 6]));

// ---- Bài 4: flattenArray ----
console.log("\n=== Bài 4: flattenArray ===");
console.log("Cách 1 (flat):", flattenArray([[1, 2], [3, 4]]));
console.log("Cách 2 (reduce):", flattenArray2([[1, 2], [3, 4]]));
console.log("Cách 3 (loop):", flattenArray3([[1, 2], [3, 4]]));

// ---- Bài 5: isSymmetric ----
console.log("\n=== Bài 5: isSymmetric ===");
console.log("Cách 1 (reverse):", isSymmetric([1, 2, 3, 2, 1]));
console.log("Cách 2 (loop):", isSymmetric2([1, 2, 3, 2, 1]));
console.log("Cách 3 (every):", isSymmetric3([1, 2, 3, 2, 1]));

// ---- Bài 6: findSecondLargest ----
console.log("\n=== Bài 6: findSecondLargest ===");
console.log("Cách 1 (sort):", findSecondLargest([3, 1, 4, 2, 4]));
console.log("Cách 2 (loop):", findSecondLargest2([3, 1, 4, 2, 4]));

// ---- Bài 7: sortProductsByPrice ----
console.log("\n=== Bài 7: sortProductsByPrice ===");
console.log("Cách 1 (sort):", sortProductsByPrice(products));
console.log("Cách 2 (toSorted):", sortProductsByPrice2(products));

// ---- Bài 8: findMostExpensiveProduct ----
console.log("\n=== Bài 8: findMostExpensiveProduct ===");
console.log("Cách 1 (reduce):", findMostExpensiveProduct(products));
console.log("Cách 2 (sort):", findMostExpensiveProduct2(products));
console.log("Cách 3 (loop):", findMostExpensiveProduct3(products));

// ---- Bài 9: groupByType ----
console.log("\n=== Bài 9: groupByType ===");
console.log("Cách 1 (reduce):", groupByType(items));
console.log("Cách 2 (loop):", groupByType2(items));

// ---- Bài 10: isSubset ----
console.log("\n=== Bài 10: isSubset ===");
console.log("Cách 1 (every):", isSubset([1, 2, 3, 4], [2, 4]));
console.log("Cách 2 (Set):", isSubset2([1, 2, 3, 4], [2, 4]));
console.log("Cách 3 (loop):", isSubset3([1, 2, 3, 4], [2, 4]));

// ---- Bài 11: findMaxKey ----
console.log("\n=== Bài 11: findMaxKey ===");
console.log("Cách 1 (entries+reduce):", findMaxKey({ a: 10, b: 20, c: 15 }));
console.log("Cách 2 (keys+loop):", findMaxKey2({ a: 10, b: 20, c: 15 }));

// ---- Bài 12: mergeObjectsSumValues ----
console.log("\n=== Bài 12: mergeObjectsSumValues ===");
console.log("Cách 1 (spread+loop):", mergeObjectsSumValues({ a: 10, b: 20 }, { b: 30, c: 40 }));
console.log("Cách 2 (entries+reduce):", mergeObjectsSumValues2({ a: 10, b: 20 }, { b: 30, c: 40 }));

// ---- Bài 13: countElements ----
console.log("\n=== Bài 13: countElements ===");
console.log("Cách 1 (reduce):", countElements(["a", "b", "a", "c", "b", "a"]));
console.log("Cách 2 (loop):", countElements2(["a", "b", "a", "c", "b", "a"]));
console.log("Cách 3 (Map):", countElements3(["a", "b", "a", "c", "b", "a"]));

// ---- Bài 14: cleanObject ----
console.log("\n=== Bài 14: cleanObject ===");
console.log("Cách 1 (entries+filter):", cleanObject({ a: 1, b: null, c: undefined, d: 4 }));
console.log("Cách 2 (for...in):", cleanObject2({ a: 1, b: null, c: undefined, d: 4 }));
console.log("Cách 3 (reduce):", cleanObject3({ a: 1, b: null, c: undefined, d: 4 }));

// ---- Bài 15: hasDuplicate ----
console.log("\n=== Bài 15: hasDuplicate ===");
console.log("Cách 1 (Set):", hasDuplicate([1, 2, 3, 4, 2]));
console.log("Cách 2 (Map):", hasDuplicate2([1, 2, 3, 4, 2]));
console.log("Cách 3 (indexOf):", hasDuplicate3([1, 2, 3, 4, 2]));

// ---- Bài 16: sumByGroup ----
console.log("\n=== Bài 16: sumByGroup ===");
console.log("Cách 1 (reduce):", sumByGroup(priceItems));
console.log("Cách 2 (loop):", sumByGroup2(priceItems));

// ---- Bài 17: uniqueValues ----
console.log("\n=== Bài 17: uniqueValues ===");
console.log("Cách 1 (Set):", uniqueValues([1, 2, 3], [3, 4, 5]));
console.log("Cách 2 (filter):", uniqueValues2([1, 2, 3], [3, 4, 5]));

// ---- Bài 18: isPermutation ----
console.log("\n=== Bài 18: isPermutation ===");
console.log("Cách 1 (sort):", isPermutation([1, 2, 3], [3, 2, 1]));
console.log("Cách 2 (count):", isPermutation2([1, 2, 3], [3, 2, 1]));

// ---- Bài 19: findLongestString ----
console.log("\n=== Bài 19: findLongestString ===");
console.log("Cách 1 (reduce):", findLongestString(["abc", "abcd", "a"]));
console.log("Cách 2 (sort):", findLongestString2(["abc", "abcd", "a"]));
console.log("Cách 3 (loop):", findLongestString3(["abc", "abcd", "a"]));

// ---- Bài 20: intersection ----
console.log("\n=== Bài 20: intersection ===");
console.log("Cách 1 (filter):", intersection([1, 2, 3], [2, 3, 4]));
console.log("Cách 2 (Set):", intersection2([1, 2, 3], [2, 3, 4]));

// ---- Bài 21: filterByMinValue ----
console.log("\n=== Bài 21: filterByMinValue ===");
console.log("Cách 1 (filter):", filterByMinValue([5, 10, 15, 20], 12));
console.log("Cách 2 (loop):", filterByMinValue2([5, 10, 15, 20], 12));

// ---- Bài 22: findLongestValue ----
console.log("\n=== Bài 22: findLongestValue ===");
console.log("Cách 1 (reduce):", findLongestValue({ a: "cat", b: "elephant", c: "dog" }));
console.log("Cách 2 (sort):", findLongestValue2({ a: "cat", b: "elephant", c: "dog" }));

// ---- Bài 23: groupByFirstLetter ----
console.log("\n=== Bài 23: groupByFirstLetter ===");
console.log("Cách 1 (reduce):", groupByFirstLetter(["apple", "banana", "avocado", "blueberry"]));
console.log("Cách 2 (loop):", groupByFirstLetter2(["apple", "banana", "avocado", "blueberry"]));

// ---- Bài 24: getAdults ----
console.log("\n=== Bài 24: getAdults ===");
console.log("Cách 1 (filter):", getAdults(people));
console.log("Cách 2 (loop):", getAdults2(people));

// ---- Bài 25: convertToArray ----
console.log("\n=== Bài 25: convertToArray ===");
console.log("Cách 1 (entries):", convertToArray({ a: 1, b: 2, c: 3 }));
console.log("Cách 2 (keys+map):", convertToArray2({ a: 1, b: 2, c: 3 }));
console.log("Cách 3 (loop):", convertToArray3({ a: 1, b: 2, c: 3 }));

// ---- Bài 26: sortStringsByLength ----
console.log("\n=== Bài 26: sortStringsByLength ===");
console.log("Cách 1 (sort):", sortStringsByLength(["a", "ccc", "bb"]));
console.log("Cách 2 (toSorted):", sortStringsByLength2(["a", "ccc", "bb"]));

// ---- Bài 27: sumByKey ----
console.log("\n=== Bài 27: sumByKey ===");
console.log("Cách 1 (reduce):", sumByKey(priceItems, "price"));
console.log("Cách 2 (map+reduce):", sumByKey2(priceItems, "price"));
console.log("Cách 3 (loop):", sumByKey3(priceItems, "price"));

// ---- Bài 28: countWords ----
console.log("\n=== Bài 28: countWords ===");
console.log("Cách 1 (split+filter):", countWords("Hello world! Welcome to JavaScript"));
console.log("Cách 2 (regex):", countWords2("Hello world! Welcome to JavaScript"));

// ---- Bài 29: findMinKey ----
console.log("\n=== Bài 29: findMinKey ===");
console.log("Cách 1 (entries+reduce):", findMinKey({ a: 100, b: 20, c: 50 }));
console.log("Cách 2 (keys+loop):", findMinKey2({ a: 100, b: 20, c: 50 }));
