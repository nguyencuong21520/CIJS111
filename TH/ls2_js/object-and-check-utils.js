// ============================================================
// OBJECT-AND-CHECK-UTILS.JS - Bài 11-18: Object & kiểm tra
// Mỗi bài có nhiều cách giải kèm comment chi tiết
// ============================================================

// ---- Bài 11: findMaxKey(obj) - Key có giá trị lớn nhất ----
// Cách 1: Dùng Object.entries() + reduce()
export const findMaxKey = (obj) =>
  Object.entries(obj).reduce((maxEntry, entry) =>
    entry[1] > maxEntry[1] ? entry : maxEntry
  )[0];
// Object.entries: { a:10, b:20 } -> [["a",10], ["b",20]]
// reduce so sánh value (index 1), trả về key (index 0)

// Cách 2: Dùng Object.keys() + vòng lặp
export const findMaxKey2 = (obj) => {
  const keys = Object.keys(obj); // lấy tất cả key
  let maxKey = keys[0];
  for (let i = 1; i < keys.length; i++) {
    if (obj[keys[i]] > obj[maxKey]) {
      maxKey = keys[i]; // cập nhật key nếu value lớn hơn
    }
  }
  return maxKey;
};

// ---- Bài 12: mergeObjectsSumValues(obj1, obj2) - Hợp nhất, cộng giá trị trùng ----
// Cách 1: Dùng spread + vòng lặp
export const mergeObjectsSumValues = (obj1, obj2) => {
  const result = { ...obj1 }; // sao chép obj1
  for (const key in obj2) {
    // Nếu key đã tồn tại thì cộng, nếu chưa thì gán
    result[key] = (result[key] || 0) + obj2[key];
  }
  return result;
};

// Cách 2: Dùng Object.entries() + reduce()
export const mergeObjectsSumValues2 = (obj1, obj2) => {
  const allEntries = [...Object.entries(obj1), ...Object.entries(obj2)];
  return allEntries.reduce((result, [key, value]) => {
    result[key] = (result[key] || 0) + value;
    return result;
  }, {});
};

// ---- Bài 13: countElements(arr) - Đếm số lần xuất hiện mỗi phần tử ----
// Cách 1: Dùng reduce()
export const countElements = (arr) =>
  arr.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1; // tăng đếm
    return counts;
  }, {});

// Cách 2: Dùng vòng lặp for...of
export const countElements2 = (arr) => {
  const counts = {};
  for (const item of arr) {
    counts[item] = (counts[item] || 0) + 1;
  }
  return counts;
};

// Cách 3: Dùng Map (chính xác hơn với key đặc biệt)
export const countElements3 = (arr) => {
  const map = new Map();
  for (const item of arr) {
    map.set(item, (map.get(item) || 0) + 1);
  }
  return Object.fromEntries(map); // chuyển Map -> object
};

// ---- Bài 14: cleanObject(obj) - Xóa key có giá trị null/undefined ----
// Cách 1: Dùng Object.entries() + filter() + fromEntries()
export const cleanObject = (obj) =>
  Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value != null)
    // value != null bắt cả null và undefined (loose equality)
  );

// Cách 2: Dùng vòng lặp for...in
export const cleanObject2 = (obj) => {
  const result = {};
  for (const key in obj) {
    if (obj[key] != null) {
      result[key] = obj[key]; // chỉ giữ key có giá trị hợp lệ
    }
  }
  return result;
};

// Cách 3: Dùng reduce()
export const cleanObject3 = (obj) =>
  Object.keys(obj).reduce((result, key) => {
    if (obj[key] != null) result[key] = obj[key];
    return result;
  }, {});

// ---- Bài 15: hasDuplicate(arr) - Kiểm tra phần tử lặp ----
// Cách 1: Dùng Set - so sánh kích thước
export const hasDuplicate = (arr) => new Set(arr).size !== arr.length;
// Set loại bỏ trùng -> nếu size < length thì có phần tử lặp

// Cách 2: Dùng Map
export const hasDuplicate2 = (arr) => {
  const seen = new Map();
  for (const item of arr) {
    if (seen.has(item)) return true; // đã gặp trước đó -> lặp
    seen.set(item, true);
  }
  return false;
};

// Cách 3: Dùng indexOf + lastIndexOf
export const hasDuplicate3 = (arr) =>
  arr.some((item, index) => arr.indexOf(item) !== index);
// indexOf trả vị trí đầu, nếu khác index hiện tại -> có trùng

// ---- Bài 16: sumByGroup(arr, key) - Tổng giá trị theo nhóm ----
// Cách 1: Dùng reduce()
export const sumByGroup = (arr) =>
  arr.reduce((groups, item) => {
    groups[item.type] = (groups[item.type] || 0) + item.price;
    return groups;
  }, {});

// Cách 2: Dùng vòng lặp for...of
export const sumByGroup2 = (arr) => {
  const groups = {};
  for (const item of arr) {
    groups[item.type] = (groups[item.type] || 0) + item.price;
  }
  return groups;
};

// ---- Bài 17: uniqueValues(arr1, arr2) - Giá trị duy nhất từ 2 mảng ----
// Cách 1: Dùng Set + spread
export const uniqueValues = (arr1, arr2) => [...new Set([...arr1, ...arr2])];
// Gộp 2 mảng, Set loại trùng, spread chuyển lại thành mảng

// Cách 2: Dùng concat + filter
export const uniqueValues2 = (arr1, arr2) => {
  const merged = arr1.concat(arr2);
  return merged.filter((item, index) => merged.indexOf(item) === index);
};

// ---- Bài 18: isPermutation(arr1, arr2) - Kiểm tra hoán vị ----
// Cách 1: Sắp xếp rồi so sánh chuỗi
export const isPermutation = (arr1, arr2) =>
  arr1.slice().sort().toString() === arr2.slice().sort().toString();
// slice() tạo bản sao tránh thay đổi gốc, sort sắp xếp, so sánh chuỗi

// Cách 2: Dùng object đếm tần suất
export const isPermutation2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false; // khác độ dài -> không phải
  const count = {};
  for (const item of arr1) count[item] = (count[item] || 0) + 1;
  for (const item of arr2) {
    if (!count[item]) return false; // phần tử không tồn tại hoặc đã hết
    count[item]--;
  }
  return true;
};
