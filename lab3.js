// let inputGender = window.prompt ("Please enter your gender: ")
// let inputAge = window.prompt ("Please enter your age: ")
// let inputCity = window.prompt ("Please enter your city: ")
// let inputPhoneNumber = window.prompt("Please enter your phone number: ")

let inputGender = "M"
let inputAge = 14
let inputCity = "C"
let inputPhoneNumber = "0123456789"

let inputArr= []//empty
inputArr[0] = "M"
inputArr[1] = 14
inputArr[2] ="C"

for(let index = 0; index <4; index ++){}


let digitAmount = inputPhoneNumber.length
let firstDigit = inputPhoneNumber[0]
let lastDigit = inputPhoneNumber[10]

// let text = " You are a " 
// let text2 = " with age "
// let text3 = " is a "
// let text4 = " you live in "
// let text5 = ""


// switch(inputGender){

//     case "F":
//         gender = "female,"
//         break

//     case "M":
//         gender = "male,"
//         break

//     default:
//         gender = "undefined gender,"
// }

if(inputArr[0] == "F"){
    gender = "female"
}
else if(inputGender == "M"){
    gender = "male"
}
else{
    gender = "undefined gender"
}

// let result1 = ["You are a "]
// result1.push(gender)

// alert(gender)

if(inputArr[1]<=12){
    age = "kid"
}
else if(inputAge>12 && inputAge<=18){
    age = "teen"
}
else if(inputAge>18 && inputAge<=25){
    age = "youth"
}
else if(inputAge>25 && inputAge<=60){
    age = "middle-age"
}
else if(inputAge>60){
    age = "elderly"
}
else{
    age = "undefined age"
}

result1.push("with age")
result1.push(inputAge)
result1.push("is a")
result1.push(age)

// switch (parseInt(inputAge)) {
//     case inputAge<12:
//         age = "kid"
//         break;

//     case inputAge>12:
//         age = "teen"

//     default:
//         age = "undefined age"
//         break;
// }

switch (inputCity) {
    case "A":
        city = "Downtown "
        break;

    case "B":
        city = "Suburban "
        break

    case "C":
        city = "CBD "
        break

    case "D":
        city = "village "
        break

    default:
        city = "undefined address "
        break;
}

result1.push("you live in ")

result1.push(city)

if(
    digitAmount == 11 &&
    
    firstDigit == 0 &&
    
    lastDigit % 2 == 0
){
    text5 = "your phone number is valid."
}
else{
    text5 = "your phone number is not valid."
}

result1.push(text5)

// let result = ["You are a " + gender ," with age "+ inputAge, " is a "+ age, " you live in "+ 
// city, text5]

alert(result1)
