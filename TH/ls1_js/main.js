// ============================================================
// MAIN.JS - File thực thi chương trình, test tất cả 30 bài tập
// Import các hàm từ utils.js và chạy thử
// ============================================================

import {
  productInfo, productInfo2,
  greet, greet2,
  sumUpTo, sumUpTo2,
  square, square2, square3,
  isEven, isEven2,
  firstElement, firstElement2, firstElement3,
  sum, sum2,
  showUserInfo, showUserInfo2, showUserInfo3,
  getNames, getNames2,
  stringLength,
  toUpperCase,
  formatCurrency, formatCurrency2, formatCurrency3,
  max, max2, max3,
  isPrime, isPrime2,
  repeatString, repeatString2,
  sumOdd, sumOdd2,
  sumGreaterThan, sumGreaterThan2,
  formatDate, formatDate2,
  firstThree, firstThree2,
  containsChar, containsChar2,
  mergeArrays, mergeArrays2,
  countOccurrences, countOccurrences2, countOccurrences3,
  filterOdd, filterOdd2,
  greaterThan, greaterThan2,
  factorial, factorial2,
  separateEvenOdd, separateEvenOdd2,
  sortAsc, sortAsc2,
  sumEvenIndex, sumEvenIndex2,
  multiplyByTwo, multiplyByTwo2,
  arrayToString, arrayToString2, arrayToString3,
} from "./utils.js";

// ---- Bài 1: Template Literals ----
console.log("=== Bài 1: productInfo ===");
console.log("Cách 1:", productInfo("Sách", 20000));
console.log("Cách 2:", productInfo2("Sách", 20000));

// ---- Bài 2: Chào người dùng ----
console.log("\n=== Bài 2: greet ===");
console.log("Cách 1:", greet("An"));
console.log("Cách 2:", greet2("An"));

// ---- Bài 3: Tổng 1 đến n ----
console.log("\n=== Bài 3: sumUpTo ===");
console.log("Cách 1 (for loop):", sumUpTo(5));
console.log("Cách 2 (công thức):", sumUpTo2(5));

// ---- Bài 4: Bình phương ----
console.log("\n=== Bài 4: square ===");
console.log("Cách 1 (n*n):", square(6));
console.log("Cách 2 (Math.pow):", square2(6));
console.log("Cách 3 (n**2):", square3(6));

// ---- Bài 5: Chẵn hay lẻ ----
console.log("\n=== Bài 5: isEven ===");
console.log("Cách 1 (modulo):", isEven(7));
console.log("Cách 2 (bitwise):", isEven2(7));

// ---- Bài 6: Phần tử đầu tiên ----
console.log("\n=== Bài 6: firstElement ===");
console.log("Cách 1 (index):", firstElement([1, 2, 3]));
console.log("Cách 2 (destructuring):", firstElement2([1, 2, 3]));
console.log("Cách 3 (at):", firstElement3([1, 2, 3]));

// ---- Bài 7: Rest Operator ----
console.log("\n=== Bài 7: sum (rest operator) ===");
console.log("Cách 1 (for...of):", sum(1, 2, 3, 4));
console.log("Cách 2 (reduce):", sum2(1, 2, 3, 4));

// ---- Bài 8: Destructuring object ----
console.log("\n=== Bài 8: showUserInfo ===");
const user = { name: "Nam", age: 30 };
console.log("Cách 1 (destructuring):", showUserInfo(user));
console.log("Cách 2 (param destructuring):", showUserInfo2(user));
console.log("Cách 3 (dot notation):", showUserInfo3(user));

// ---- Bài 9: Danh sách tên ----
console.log("\n=== Bài 9: getNames ===");
const people = [{ name: "An" }, { name: "Bình" }];
console.log("Cách 1 (map+join):", getNames(people));
console.log("Cách 2 (for loop):", getNames2(people));

// ---- Bài 10: Độ dài chuỗi ----
console.log("\n=== Bài 10: stringLength ===");
console.log("Kết quả:", stringLength("Hello World"));

// ---- Bài 11: Chữ hoa ----
console.log("\n=== Bài 11: toUpperCase ===");
console.log("Kết quả:", toUpperCase("javascript"));

// ---- Bài 12: Format tiền tệ ----
console.log("\n=== Bài 12: formatCurrency ===");
console.log("Cách 1 (toLocaleString):", formatCurrency(1000000));
console.log("Cách 2 (Intl):", formatCurrency2(1000000));
console.log("Cách 3 (tự viết):", formatCurrency3(1000000));

// ---- Bài 13: Giá trị lớn nhất ----
console.log("\n=== Bài 13: max ===");
console.log("Cách 1 (Math.max):", max([10, 5, 20, 8]));
console.log("Cách 2 (for loop):", max2([10, 5, 20, 8]));
console.log("Cách 3 (reduce):", max3([10, 5, 20, 8]));

// ---- Bài 14: Số nguyên tố ----
console.log("\n=== Bài 14: isPrime ===");
console.log("Cách 1 (tối ưu sqrt):", isPrime(7));
console.log("Cách 2 (đơn giản):", isPrime2(7));

// ---- Bài 15: Lặp chuỗi ----
console.log("\n=== Bài 15: repeatString ===");
console.log("Cách 1 (Array.fill):", repeatString("Hello", 3));
console.log("Cách 2 (for loop):", repeatString2("Hello", 3));

// ---- Bài 16: Tổng số lẻ ----
console.log("\n=== Bài 16: sumOdd ===");
console.log("Cách 1 (filter+reduce):", sumOdd([1, 2, 3, 4]));
console.log("Cách 2 (for loop):", sumOdd2([1, 2, 3, 4]));

// ---- Bài 17: Tổng số lớn hơn n ----
console.log("\n=== Bài 17: sumGreaterThan ===");
console.log("Cách 1 (filter+reduce):", sumGreaterThan([1, 2, 3, 4], 2));
console.log("Cách 2 (for loop):", sumGreaterThan2([1, 2, 3, 4], 2));

// ---- Bài 18: Format ngày ----
console.log("\n=== Bài 18: formatDate ===");
console.log("Cách 1 (split+reverse):", formatDate("2024-11-28"));
console.log("Cách 2 (destructuring):", formatDate2("2024-11-28"));

// ---- Bài 19: 3 phần tử đầu ----
console.log("\n=== Bài 19: firstThree ===");
console.log("Cách 1 (slice):", firstThree([1, 2, 3, 4, 5]));
console.log("Cách 2 (destructuring):", firstThree2([1, 2, 3, 4, 5]));

// ---- Bài 20: Chứa ký tự ----
console.log("\n=== Bài 20: containsChar ===");
console.log("Cách 1 (includes):", containsChar("javascript", "j"));
console.log("Cách 2 (indexOf):", containsChar2("javascript", "j"));

// ---- Bài 21: Gộp mảng ----
console.log("\n=== Bài 21: mergeArrays ===");
console.log("Cách 1 (spread):", mergeArrays([1, 2], [3, 4]));
console.log("Cách 2 (concat):", mergeArrays2([1, 2], [3, 4]));

// ---- Bài 22: Đếm số lần xuất hiện ----
console.log("\n=== Bài 22: countOccurrences ===");
console.log("Cách 1 (filter):", countOccurrences([1, 2, 2, 3, 2], 2));
console.log("Cách 2 (reduce):", countOccurrences2([1, 2, 2, 3, 2], 2));
console.log("Cách 3 (for loop):", countOccurrences3([1, 2, 2, 3, 2], 2));

// ---- Bài 23: Lọc số lẻ ----
console.log("\n=== Bài 23: filterOdd ===");
console.log("Cách 1 (filter):", filterOdd([1, 2, 3, 4]));
console.log("Cách 2 (for loop):", filterOdd2([1, 2, 3, 4]));

// ---- Bài 24: Số lớn hơn giá trị ----
console.log("\n=== Bài 24: greaterThan ===");
console.log("Cách 1 (filter):", greaterThan([1, 2, 3, 4], 2));
console.log("Cách 2 (for loop):", greaterThan2([1, 2, 3, 4], 2));

// ---- Bài 25: Giai thừa ----
console.log("\n=== Bài 25: factorial ===");
console.log("Cách 1 (for loop):", factorial(5));
console.log("Cách 2 (đệ quy):", factorial2(5));

// ---- Bài 26: Tách chẵn lẻ ----
console.log("\n=== Bài 26: separateEvenOdd ===");
console.log("Cách 1 (filter):", separateEvenOdd([1, 2, 3, 4]));
console.log("Cách 2 (reduce):", separateEvenOdd2([1, 2, 3, 4]));

// ---- Bài 27: Sắp xếp tăng dần ----
console.log("\n=== Bài 27: sortAsc ===");
console.log("Cách 1 (sort+spread):", sortAsc([3, 1, 4, 2]));
console.log("Cách 2 (toSorted):", sortAsc2([3, 1, 4, 2]));

// ---- Bài 28: Tổng vị trí chẵn ----
console.log("\n=== Bài 28: sumEvenIndex ===");
console.log("Cách 1 (filter+reduce):", sumEvenIndex([1, 2, 3, 4]));
console.log("Cách 2 (for i+=2):", sumEvenIndex2([1, 2, 3, 4]));

// ---- Bài 29: Nhân 2 ----
console.log("\n=== Bài 29: multiplyByTwo ===");
console.log("Cách 1 (map):", multiplyByTwo([1, 2, 3]));
console.log("Cách 2 (for loop):", multiplyByTwo2([1, 2, 3]));

// ---- Bài 30: Mảng thành chuỗi ----
console.log("\n=== Bài 30: arrayToString ===");
console.log("Cách 1 (join):", arrayToString(["a", "b", "c"]));
console.log("Cách 2 (reduce):", arrayToString2(["a", "b", "c"]));
console.log("Cách 3 (for loop):", arrayToString3(["a", "b", "c"]));
