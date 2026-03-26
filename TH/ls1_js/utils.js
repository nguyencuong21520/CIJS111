// ============================================================
// UTILS.JS - Module chứa tất cả các hàm cho 30 bài tập
// Mỗi bài có nhiều cách giải (Approach) để dễ hiểu hơn
// ============================================================

// ---- Bài 1: Template Literals + Function ----
// Cách 1: Dùng toLocaleString() để format số có dấu phẩy
export const productInfo = (name, price) => {
  const formatted = price.toLocaleString(); // 20000 -> "20,000"
  return `Sản phẩm: ${name}, Giá: ${formatted} VNĐ`;
};

// Cách 2: Dùng Intl.NumberFormat (chuẩn quốc tế hơn)
export const productInfo2 = (name, price) => {
  const formatter = new Intl.NumberFormat("en-US"); // format kiểu US: dùng dấu phẩy
  return `Sản phẩm: ${name}, Giá: ${formatter.format(price)} VNĐ`;
};

// ---- Bài 2: Chào người dùng theo tên ----
// Cách 1: Arrow function đơn giản
export const greet = (name) => `Xin chào, ${name}!`;

// Cách 2: Function declaration truyền thống
export function greet2(name) {
  return "Xin chào, " + name + "!"; // nối chuỗi bằng dấu +
}

// ---- Bài 3: Tính tổng từ 1 đến n ----
// Cách 1: Dùng vòng lặp for
export const sumUpTo = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i; // cộng dồn từ 1 đến n
  }
  return sum;
};

// Cách 2: Dùng công thức toán học n*(n+1)/2 (nhanh hơn nhiều)
export const sumUpTo2 = (n) => (n * (n + 1)) / 2;

// ---- Bài 4: Tính bình phương ----
// Cách 1: Dùng phép nhân
export const square = (n) => n * n;

// Cách 2: Dùng Math.pow()
export const square2 = (n) => Math.pow(n, 2);

// Cách 3: Dùng toán tử lũy thừa ** (ES2016)
export const square3 = (n) => n ** 2;

// ---- Bài 5: Kiểm tra chẵn/lẻ ----
// Cách 1: Dùng toán tử % (modulo) - chia lấy dư
export const isEven = (n) => n % 2 === 0; // nếu chia 2 dư 0 thì là chẵn

// Cách 2: Dùng bitwise AND - nhanh hơn nhưng khó hiểu hơn
export const isEven2 = (n) => (n & 1) === 0; // bit cuối = 0 thì là số chẵn

// ---- Bài 6: Phần tử đầu tiên của mảng ----
// Cách 1: Truy cập bằng index
export const firstElement = (arr) => arr[0]; // index bắt đầu từ 0

// Cách 2: Dùng destructuring (phân rã mảng)
export const firstElement2 = ([first]) => first; // lấy phần tử đầu tiên

// Cách 3: Dùng Array.at() (ES2022)
export const firstElement3 = (arr) => arr.at(0);

// ---- Bài 7: Rest Operator tính tổng ----
// Cách 1: Dùng rest operator (...nums) + vòng lặp for...of
export const sum = (...nums) => {
  // ...nums gom tất cả tham số thành 1 mảng
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
};

// Cách 2: Dùng rest operator + reduce()
export const sum2 = (...nums) => nums.reduce((acc, cur) => acc + cur, 0);
// reduce: acc (tổng tích lũy), cur (giá trị hiện tại), 0 (giá trị ban đầu)

// ---- Bài 8: Tách giá trị từ đối tượng (Destructuring) ----
// Cách 1: Dùng destructuring
export const showUserInfo = (user) => {
  const { name, age } = user; // tách name và age từ object
  return `Name: ${name}, Age: ${age}`;
};

// Cách 2: Destructuring ngay trong tham số
export const showUserInfo2 = ({ name, age }) => `Name: ${name}, Age: ${age}`;

// Cách 3: Truy cập trực tiếp bằng dấu chấm
export const showUserInfo3 = (user) => `Name: ${user.name}, Age: ${user.age}`;

// ---- Bài 9: In danh sách tên từ mảng đối tượng ----
// Cách 1: Dùng map() + join() - ngắn gọn nhất
export const getNames = (people) => people.map((p) => p.name).join(", ");
// map: lấy tên từ mỗi object -> ["An", "Bình"]
// join: nối mảng thành chuỗi -> "An, Bình"

// Cách 2: Dùng vòng lặp for
export const getNames2 = (people) => {
  let result = "";
  for (let i = 0; i < people.length; i++) {
    result += people[i].name;
    if (i < people.length - 1) result += ", "; // thêm dấu phẩy giữa các tên
  }
  return result;
};

// ---- Bài 10: Tính độ dài chuỗi ----
// Cách 1: Dùng thuộc tính .length
export const stringLength = (str) => str.length;

// ---- Bài 11: Chuyển chuỗi thành chữ hoa ----
// Cách 1: Dùng toUpperCase()
export const toUpperCase = (str) => str.toUpperCase();

// ---- Bài 12: Chuyển số sang tiền tệ ----
// Cách 1: Dùng toLocaleString()
export const formatCurrency = (num) => `${num.toLocaleString()} VNĐ`;

// Cách 2: Dùng Intl.NumberFormat
export const formatCurrency2 = (num) => {
  return new Intl.NumberFormat("en-US").format(num) + " VNĐ";
};

// Cách 3: Tự viết hàm format (để hiểu cách hoạt động)
export const formatCurrency3 = (num) => {
  // Chuyển số thành chuỗi, đảo ngược, thêm dấu phẩy mỗi 3 ký tự
  const str = String(num).split("").reverse().join("");
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i > 0 && i % 3 === 0) result += ",";
    result += str[i];
  }
  return result.split("").reverse().join("") + " VNĐ";
};

// ---- Bài 13: Giá trị lớn nhất trong mảng ----
// Cách 1: Dùng Math.max() + spread operator
export const max = (arr) => Math.max(...arr);
// ...arr trải mảng thành các tham số riêng lẻ

// Cách 2: Dùng vòng lặp
export const max2 = (arr) => {
  let maxVal = arr[0]; // giả sử phần tử đầu là lớn nhất
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) maxVal = arr[i]; // cập nhật nếu tìm thấy lớn hơn
  }
  return maxVal;
};

// Cách 3: Dùng reduce()
export const max3 = (arr) => arr.reduce((a, b) => (a > b ? a : b));

// ---- Bài 14: Kiểm tra số nguyên tố ----
// Cách 1: Kiểm tra chia hết từ 2 đến căn bậc 2 của n
export const isPrime = (n) => {
  if (n <= 1) return false; // 0 và 1 không phải số nguyên tố
  if (n <= 3) return true; // 2 và 3 là số nguyên tố
  if (n % 2 === 0) return false; // số chẵn > 2 không phải nguyên tố
  // Chỉ cần kiểm tra đến căn bậc 2 (tối ưu hiệu suất)
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

// Cách 2: Kiểm tra đơn giản hơn (dễ hiểu cho người mới)
export const isPrime2 = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    // Thử chia cho tất cả số từ 2 đến n-1
    if (n % i === 0) return false; // nếu chia hết thì không phải nguyên tố
  }
  return true;
};

// ---- Bài 15: In chuỗi n lần ----
// Cách 1: Dùng Array + fill + join
export const repeatString = (str, n) => Array(n).fill(str).join(" ");
// Array(3).fill("Hello") -> ["Hello", "Hello", "Hello"]
// .join(" ") -> "Hello Hello Hello"

// Cách 2: Dùng vòng lặp
export const repeatString2 = (str, n) => {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
    if (i < n - 1) result += " "; // thêm khoảng trắng giữa các từ
  }
  return result;
};

// ---- Bài 16: Tổng số lẻ trong mảng ----
// Cách 1: Dùng filter() + reduce()
export const sumOdd = (arr) =>
  arr.filter((n) => n % 2 !== 0).reduce((acc, cur) => acc + cur, 0);
// filter: lọc ra số lẻ -> [1, 3]
// reduce: tính tổng -> 4

// Cách 2: Dùng vòng lặp
export const sumOdd2 = (arr) => {
  let total = 0;
  for (const num of arr) {
    if (num % 2 !== 0) total += num; // chỉ cộng nếu là số lẻ
  }
  return total;
};

// ---- Bài 17: Tổng các số lớn hơn n ----
// Cách 1: Dùng filter() + reduce()
export const sumGreaterThan = (arr, n) =>
  arr.filter((x) => x > n).reduce((acc, cur) => acc + cur, 0);

// Cách 2: Dùng vòng lặp
export const sumGreaterThan2 = (arr, n) => {
  let total = 0;
  for (const num of arr) {
    if (num > n) total += num;
  }
  return total;
};

// ---- Bài 18: Chuyển đổi ngày YYYY-MM-DD sang DD/MM/YYYY ----
// Cách 1: Dùng split() + reverse() + join()
export const formatDate = (dateStr) => dateStr.split("-").reverse().join("/");
// "2024-11-28" -> ["2024","11","28"] -> ["28","11","2024"] -> "28/11/2024"

// Cách 2: Dùng destructuring
export const formatDate2 = (dateStr) => {
  const [year, month, day] = dateStr.split("-"); // tách thành 3 phần
  return `${day}/${month}/${year}`;
};

// ---- Bài 19: Lấy 3 phần tử đầu tiên ----
// Cách 1: Dùng slice()
export const firstThree = (arr) => arr.slice(0, 3);
// slice(start, end): cắt từ index 0 đến 2 (không bao gồm 3)

// Cách 2: Dùng destructuring + rest
export const firstThree2 = ([a, b, c]) => [a, b, c];

// ---- Bài 20: Kiểm tra chuỗi chứa ký tự ----
// Cách 1: Dùng includes()
export const containsChar = (str, char) => str.includes(char);

// Cách 2: Dùng indexOf() - trả về -1 nếu không tìm thấy
export const containsChar2 = (str, char) => str.indexOf(char) !== -1;

// ---- Bài 21: Gộp hai mảng ----
// Cách 1: Dùng spread operator
export const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
// ...arr1 trải mảng 1, ...arr2 trải mảng 2, gộp lại thành 1 mảng mới

// Cách 2: Dùng concat()
export const mergeArrays2 = (arr1, arr2) => arr1.concat(arr2);

// ---- Bài 22: Đếm số lần xuất hiện ----
// Cách 1: Dùng filter() + length
export const countOccurrences = (arr, val) =>
  arr.filter((x) => x === val).length;

// Cách 2: Dùng reduce()
export const countOccurrences2 = (arr, val) =>
  arr.reduce((count, x) => (x === val ? count + 1 : count), 0);

// Cách 3: Dùng vòng lặp
export const countOccurrences3 = (arr, val) => {
  let count = 0;
  for (const item of arr) {
    if (item === val) count++;
  }
  return count;
};

// ---- Bài 23: Lọc số lẻ từ mảng ----
// Cách 1: Dùng filter()
export const filterOdd = (arr) => arr.filter((n) => n % 2 !== 0);

// Cách 2: Dùng vòng lặp
export const filterOdd2 = (arr) => {
  const result = [];
  for (const num of arr) {
    if (num % 2 !== 0) result.push(num); // push: thêm vào cuối mảng
  }
  return result;
};

// ---- Bài 24: Tìm số lớn hơn giá trị cho trước ----
// Cách 1: Dùng filter()
export const greaterThan = (arr, n) => arr.filter((x) => x > n);

// Cách 2: Dùng vòng lặp
export const greaterThan2 = (arr, n) => {
  const result = [];
  for (const num of arr) {
    if (num > n) result.push(num);
  }
  return result;
};

// ---- Bài 25: Tính giai thừa ----
// Cách 1: Dùng vòng lặp
export const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i; // 1 * 2 * 3 * 4 * 5 = 120
  }
  return result;
};

// Cách 2: Dùng đệ quy (recursion) - hàm gọi lại chính nó
export const factorial2 = (n) => {
  if (n <= 1) return 1; // điều kiện dừng
  return n * factorial2(n - 1); // 5 * 4 * 3 * 2 * 1
};

// ---- Bài 26: Tách riêng chẵn và lẻ ----
// Cách 1: Dùng filter()
export const separateEvenOdd = (arr) => ({
  even: arr.filter((n) => n % 2 === 0),
  odd: arr.filter((n) => n % 2 !== 0),
});

// Cách 2: Dùng reduce() - chỉ duyệt mảng 1 lần (hiệu quả hơn)
export const separateEvenOdd2 = (arr) =>
  arr.reduce(
    (result, n) => {
      if (n % 2 === 0) result.even.push(n);
      else result.odd.push(n);
      return result;
    },
    { even: [], odd: [] } // giá trị ban đầu
  );

// ---- Bài 27: Sắp xếp mảng tăng dần ----
// Cách 1: Dùng sort() với spread (không thay đổi mảng gốc)
export const sortAsc = (arr) => [...arr].sort((a, b) => a - b);
// a - b > 0: đổi chỗ (a sau b), a - b < 0: giữ nguyên

// Cách 2: Dùng toSorted() (ES2023 - không thay đổi mảng gốc)
export const sortAsc2 = (arr) => arr.toSorted((a, b) => a - b);

// ---- Bài 28: Tổng số ở vị trí chẵn (index 0, 2, 4...) ----
// Cách 1: Dùng filter theo index + reduce
export const sumEvenIndex = (arr) =>
  arr.filter((_, i) => i % 2 === 0).reduce((acc, cur) => acc + cur, 0);
// _ : không dùng giá trị, i: index

// Cách 2: Dùng vòng lặp for với bước nhảy 2
export const sumEvenIndex2 = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i += 2) {
    total += arr[i]; // chỉ cộng phần tử ở index 0, 2, 4...
  }
  return total;
};

// ---- Bài 29: Nhân mỗi phần tử với 2 ----
// Cách 1: Dùng map()
export const multiplyByTwo = (arr) => arr.map((n) => n * 2);
// map: tạo mảng mới bằng cách áp dụng hàm cho từng phần tử

// Cách 2: Dùng vòng lặp
export const multiplyByTwo2 = (arr) => {
  const result = [];
  for (const num of arr) {
    result.push(num * 2);
  }
  return result;
};

// ---- Bài 30: Tạo chuỗi từ mảng string ----
// Cách 1: Dùng join() với separator rỗng
export const arrayToString = (arr) => arr.join("");

// Cách 2: Dùng reduce()
export const arrayToString2 = (arr) => arr.reduce((acc, cur) => acc + cur, "");

// Cách 3: Dùng vòng lặp
export const arrayToString3 = (arr) => {
  let result = "";
  for (const str of arr) {
    result += str; // nối từng chuỗi lại
  }
  return result;
};
