export const productInfo = (name, price) =>{
    const formatPrice = price.toLocaleString()
    return `Sản phẩm: ${name}, Giá: ${formatPrice} VNĐ`
}

export const sumUpTo = (n) =>{
    if(n <= 0){
        return 0;
    }
    
    let sum = 0;
    for(let i = 1; i<=n; i++){
        sum +=i
    }
    return sum;
}

export const getNamesisEven = (n) =>{
    const result = n%2

    if(result === 0){
        return true;
    }else{
        return false;
    }
}

export const isEven2 = n => n%2 === 0

export const showInfo = (user)=>{
    //user = { name: "Nam", age: 30, address: "Hà Nội" }
    return `Tên: ${user.name}, Tuổi: ${user.age}`
}

export const getNames = (arrPeople) =>{
    //arrPeople = [{ name: "An" }, { name: "Bình" }, { name: "Cường" }]
    let result = ""
    for(let i = 0; i<arrPeople.length; i++){
        result += arrPeople[i].name + " "
    }
    return result;
}

export const stringLength = (str) =>{ 
    //str = "Hello"
    return str.length;
}

export const isPrime = (n) =>{
    if(n <= 1){
        return false;
    }
    for(let i = 2; i<= Math.sqrt(n); i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}

export const separateEvenOdd = (arr) =>{
    //arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let even = []
    let odd = []
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2 === 0){
            even.push(arr[i]);
        }else{
            odd.push(arr[i]);
        }
    }
    return {even, odd};
}

