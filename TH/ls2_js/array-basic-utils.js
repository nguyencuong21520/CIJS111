// ============================================================
// ARRAY-BASIC-UTILS.JS - Bài 1-10: Các hàm xử lý mảng cơ bản
// Mỗi bài có nhiều cách giải (Approach) kèm comment chi tiết
// ============================================================

// ---- Bài 1: sumArray(arr) - Tổng các phần tử trong mảng ----
// Cách 1: Dùng reduce() - gọn nhất
export const sumArray = (arr) => arr.reduce((acc, cur) => acc + cur, 0);
// reduce: acc (tổng tích lũy), cur (phần tử hiện tại), 0 (giá trị ban đầu)

// Cách 2: Dùng vòng lặp for - dễ hiểu nhất cho người mới
export const sumArray2 = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]; // cộng dồn từng phần tử
  }
  return total;
};

// Cách 3: Dùng for...of - cú pháp hiện đại hơn for thường
export const sumArray3 = (arr) => {
  let total = 0;
  for (const num of arr) {
    total += num; // duyệt trực tiếp giá trị, không cần index
  }
  return total;
};

// ---- Bài 2: countOccurrences(arr, value) - Đếm số lần xuất hiện ----
// Cách 1: Dùng filter() + length
export const countOccurrences = (arr, value) =>
  arr.filter((item) => item === value).length;
// filter: giữ lại phần tử === value, đếm độ dài mảng kết quả

// Cách 2: Dùng reduce()
export const countOccurrences2 = (arr, value) =>
  arr.reduce((count, item) => (item === value ? count + 1 : count), 0);

// Cách 3: Dùng vòng lặp for
export const countOccurrences3 = (arr, value) => {
  let count = 0;
  for (const item of arr) {
    if (item === value) count++; // tăng biến đếm khi tìm thấy
  }
  return count;
};

// ---- Bài 3: removeDuplicates(arr) - Xóa phần tử trùng lặp ----
// Cách 1: Dùng Set - nhanh và gọn nhất
export const removeDuplicates = (arr) => [...new Set(arr)];
// Set tự động loại bỏ giá trị trùng, spread [...] chuyển lại thành mảng

// Cách 2: Dùng filter() + indexOf()
export const removeDuplicates2 = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) === index);
// indexOf trả về vị trí đầu tiên -> chỉ giữ phần tử xuất hiện lần đầu

// Cách 3: Dùng vòng lặp + includes()
export const removeDuplicates3 = (arr) => {
  const result = [];
  for (const item of arr) {
    if (!result.includes(item)) {
      result.push(item); // chỉ thêm nếu chưa có trong kết quả
    }
  }
  return result;
};

// ---- Bài 4: flattenArray(arr) - Chuyển mảng 2D thành 1D ----
// Cách 1: Dùng flat() - đơn giản nhất
export const flattenArray = (arr) => arr.flat();
// flat() mặc định làm phẳng 1 cấp (2D -> 1D)

// Cách 2: Dùng reduce() + concat()
export const flattenArray2 = (arr) =>
  arr.reduce((acc, cur) => acc.concat(cur), []);
// concat nối mỗi mảng con vào mảng tích lũy

// Cách 3: Dùng vòng lặp lồng nhau
export const flattenArray3 = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result.push(arr[i][j]); // duyệt từng phần tử của mảng con
    }
  }
  return result;
};

// ---- Bài 5: isSymmetric(arr) - Kiểm tra mảng đối xứng ----
// Cách 1: So sánh chuỗi đảo ngược
export const isSymmetric = (arr) =>
  arr.toString() === arr.slice().reverse().toString();
// slice() tạo bản sao, reverse() đảo ngược, so sánh chuỗi

// Cách 2: So sánh 2 đầu mảng bằng vòng lặp
export const isSymmetric2 = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    // Chỉ cần so sánh nửa đầu với nửa sau
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
  }
  return true;
};

// Cách 3: Dùng every()
export const isSymmetric3 = (arr) =>
  arr.every((val, i) => val === arr[arr.length - 1 - i]);

// ---- Bài 6: findSecondLargest(arr) - Giá trị lớn thứ hai ----
// Cách 1: Dùng Set + sort - loại trùng rồi sắp xếp
export const findSecondLargest = (arr) => {
  const unique = [...new Set(arr)]; // loại bỏ giá trị trùng
  unique.sort((a, b) => b - a); // sắp xếp giảm dần
  return unique[1]; // phần tử thứ 2 là lớn thứ hai
};

// Cách 2: Dùng vòng lặp - theo dõi 2 giá trị lớn nhất
export const findSecondLargest2 = (arr) => {
  let max = -Infinity;
  let second = -Infinity;
  for (const num of arr) {
    if (num > max) {
      second = max; // max cũ trở thành second
      max = num; // cập nhật max mới
    } else if (num > second && num < max) {
      second = num; // cập nhật second nếu nằm giữa
    }
  }
  return second;
};

// ---- Bài 7: sortProductsByPrice(products) - Sắp xếp theo giá ----
// Cách 1: Dùng sort() với spread (không thay đổi mảng gốc)
export const sortProductsByPrice = (products) =>
  [...products].sort((a, b) => a.price - b.price);
// a.price - b.price > 0: a đứng sau b (tăng dần)

// Cách 2: Dùng toSorted() (ES2023)
export const sortProductsByPrice2 = (products) =>
  products.toSorted((a, b) => a.price - b.price);

// ---- Bài 8: findMostExpensiveProduct(products) - Sản phẩm đắt nhất ----
// Cách 1: Dùng reduce()
export const findMostExpensiveProduct = (products) =>
  products.reduce((max, p) => (p.price > max.price ? p : max));
// So sánh price, giữ lại sản phẩm có price lớn hơn

// Cách 2: Dùng sort() - sắp xếp giảm dần, lấy phần tử đầu
export const findMostExpensiveProduct2 = (products) =>
  [...products].sort((a, b) => b.price - a.price)[0];

// Cách 3: Dùng vòng lặp
export const findMostExpensiveProduct3 = (products) => {
  let maxProduct = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > maxProduct.price) {
      maxProduct = products[i]; // cập nhật sản phẩm đắt nhất
    }
  }
  return maxProduct;
};

// ---- Bài 9: groupByType(arr) - Gom nhóm theo type ----
// Cách 1: Dùng reduce()
export const groupByType = (arr) =>
  arr.reduce((groups, item) => {
    // Nếu chưa có nhóm này thì tạo mảng rỗng
    if (!groups[item.type]) groups[item.type] = [];
    groups[item.type].push(item.name); // thêm tên vào nhóm
    return groups;
  }, {});

// Cách 2: Dùng vòng lặp for...of
export const groupByType2 = (arr) => {
  const groups = {};
  for (const item of arr) {
    if (!groups[item.type]) groups[item.type] = [];
    groups[item.type].push(item.name);
  }
  return groups;
};

// ---- Bài 10: isSubset(arr1, arr2) - Kiểm tra mảng con ----
// Cách 1: Dùng every() + includes()
export const isSubset = (arr1, arr2) =>
  arr2.every((item) => arr1.includes(item));
// every: kiểm tra TẤT CẢ phần tử arr2 đều có trong arr1

// Cách 2: Dùng Set (hiệu quả hơn với mảng lớn)
export const isSubset2 = (arr1, arr2) => {
  const set = new Set(arr1); // Set có lookup O(1)
  return arr2.every((item) => set.has(item));
};

// Cách 3: Dùng vòng lặp
export const isSubset3 = (arr1, arr2) => {
  for (const item of arr2) {
    if (!arr1.includes(item)) return false; // tìm thấy phần tử không có -> false
  }
  return true;
};
