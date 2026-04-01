// ============================================================
// STRING-AND-MISC-UTILS.JS - Bài 19-29: Chuỗi & hàm tổng hợp
// Mỗi bài có nhiều cách giải kèm comment chi tiết
// ============================================================

// ---- Bài 19: findLongestString(arr) - Chuỗi dài nhất ----
// Cách 1: Dùng reduce()
export const findLongestString = (arr) =>
  arr.reduce((longest, str) => (str.length > longest.length ? str : longest));

// Cách 2: Dùng sort() theo length
export const findLongestString2 = (arr) =>
  [...arr].sort((a, b) => b.length - a.length)[0]; // sắp xếp giảm dần, lấy đầu

// Cách 3: Dùng vòng lặp
export const findLongestString3 = (arr) => {
  let longest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) longest = arr[i];
  }
  return longest;
};

// ---- Bài 20: intersection(arr1, arr2) - Giá trị chung 2 mảng ----
// Cách 1: Dùng filter() + includes()
export const intersection = (arr1, arr2) =>
  arr1.filter((item) => arr2.includes(item));

// Cách 2: Dùng Set (hiệu quả hơn O(n) thay vì O(n²))
export const intersection2 = (arr1, arr2) => {
  const set = new Set(arr2);
  return arr1.filter((item) => set.has(item));
};

// ---- Bài 21: filterByMinValue(arr, minValue) - Lọc >= minValue ----
// Cách 1: Dùng filter()
export const filterByMinValue = (arr, minValue) =>
  arr.filter((num) => num >= minValue);

// Cách 2: Dùng vòng lặp
export const filterByMinValue2 = (arr, minValue) => {
  const result = [];
  for (const num of arr) {
    if (num >= minValue) result.push(num);
  }
  return result;
};

// ---- Bài 22: findLongestValue(obj) - Giá trị dài nhất trong object ----
// Cách 1: Dùng Object.values() + reduce()
export const findLongestValue = (obj) =>
  Object.values(obj).reduce((longest, val) =>
    val.length > longest.length ? val : longest
  );

// Cách 2: Dùng Object.values() + sort()
export const findLongestValue2 = (obj) =>
  Object.values(obj).sort((a, b) => b.length - a.length)[0];

// ---- Bài 23: groupByFirstLetter(arr) - Gom nhóm theo chữ cái đầu ----
// Cách 1: Dùng reduce()
export const groupByFirstLetter = (arr) =>
  arr.reduce((groups, str) => {
    const letter = str[0]; // lấy ký tự đầu tiên
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(str);
    return groups;
  }, {});

// Cách 2: Dùng vòng lặp for...of
export const groupByFirstLetter2 = (arr) => {
  const groups = {};
  for (const str of arr) {
    const letter = str[0];
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(str);
  }
  return groups;
};

// ---- Bài 24: getAdults(people) - Lọc người >= 18 tuổi ----
// Cách 1: Dùng filter()
export const getAdults = (people) =>
  people.filter((person) => person.age >= 18);

// Cách 2: Dùng vòng lặp
export const getAdults2 = (people) => {
  const adults = [];
  for (const person of people) {
    if (person.age >= 18) adults.push(person);
  }
  return adults;
};

// ---- Bài 25: convertToArray(obj) - Object thành mảng [key, value] ----
// Cách 1: Dùng Object.entries() - đơn giản nhất
export const convertToArray = (obj) => Object.entries(obj);
// { a: 1, b: 2 } -> [["a", 1], ["b", 2]]

// Cách 2: Dùng Object.keys() + map()
export const convertToArray2 = (obj) =>
  Object.keys(obj).map((key) => [key, obj[key]]);

// Cách 3: Dùng vòng lặp for...in
export const convertToArray3 = (obj) => {
  const result = [];
  for (const key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
};

// ---- Bài 26: sortStringsByLength(arr) - Sắp xếp chuỗi theo độ dài ----
// Cách 1: Dùng sort() với spread
export const sortStringsByLength = (arr) =>
  [...arr].sort((a, b) => a.length - b.length);

// Cách 2: Dùng toSorted() (ES2023)
export const sortStringsByLength2 = (arr) =>
  arr.toSorted((a, b) => a.length - b.length);

// ---- Bài 27: sumByKey(arr, key) - Tổng giá trị theo key chỉ định ----
// Cách 1: Dùng reduce()
export const sumByKey = (arr, key) =>
  arr.reduce((total, item) => total + (item[key] || 0), 0);
// item[key]: truy cập thuộc tính động bằng bracket notation

// Cách 2: Dùng map() + reduce()
export const sumByKey2 = (arr, key) =>
  arr.map((item) => item[key] || 0).reduce((a, b) => a + b, 0);

// Cách 3: Dùng vòng lặp
export const sumByKey3 = (arr, key) => {
  let total = 0;
  for (const item of arr) {
    total += item[key] || 0; // || 0 phòng trường hợp key không tồn tại
  }
  return total;
};

// ---- Bài 28: countWords(str) - Đếm số từ trong chuỗi ----
// Cách 1: Dùng split() + filter()
export const countWords = (str) =>
  str.split(" ").filter((word) => word.length > 0).length;
// split tách theo dấu cách, filter loại chuỗi rỗng

// Cách 2: Dùng trim() + split() với regex
export const countWords2 = (str) => str.trim().split(/\s+/).length;
// \s+ khớp 1 hoặc nhiều khoảng trắng liên tiếp

// ---- Bài 29: findMinKey(obj) - Key có giá trị nhỏ nhất ----
// Cách 1: Dùng Object.entries() + reduce()
export const findMinKey = (obj) =>
  Object.entries(obj).reduce((minEntry, entry) =>
    entry[1] < minEntry[1] ? entry : minEntry
  )[0];

// Cách 2: Dùng Object.keys() + vòng lặp
export const findMinKey2 = (obj) => {
  const keys = Object.keys(obj);
  let minKey = keys[0];
  for (let i = 1; i < keys.length; i++) {
    if (obj[keys[i]] < obj[minKey]) {
      minKey = keys[i]; // cập nhật key nếu value nhỏ hơn
    }
  }
  return minKey;
};
