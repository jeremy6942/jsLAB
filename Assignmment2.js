*
1. gender: only accept string (F, M) as input
2. age: only accept number within 1-100
3. city:  only accept string (A, B, C, D) as input
4. phone number: only accept 
- numbers from 0-9
- no alphabet
- no special character
*/

let inputGender = window.prompt("Please enter your gender: ")


if (inputGender == "F") {
    gender = "female"
  }
  else if (inputGender == "M") {
    gender = "male"
  }
  else {
    gender = "undefined gender"
  }
  
  console.log(inputGender ,gender)

  let inputAge = window.prompt("Please enter your age ,(only 1- 99)")

  while(isNaN(inputAge)==true || (parseInt(inputAge)<1)||(parseInt(inputAge)>100)){

    alert("Please enter age correctly.")

    inputAge = window.prompt("Please enter your age (only accept 1-100):") 
}

if(parseInt(inputAge)<=12){
  age = "you are a kid, "
}
else if((parseInt(inputAge)>12) && (parseInt(inputAge)<=18)){
  age = "you are a teen, "
}
else if((parseInt(inputAge)>18) && (parseInt(inputAge)<=25)){
  age = "you are a youth, "
}
else if((parseInt(inputAge)>25) && (parseInt(inputAge)<=60)){
  age = "you are a middle-age, "
}
else { 
  age = "you are a elderly, " 
}

  let inputCity = window.prompt("Please enter your city, only accept (A, B, C, D) ")
  let city =""

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

  let inputPhoneNumber = window.prompt("Please fill in your phone number:")
let phoneNumber = ""

while(isNaN(inputPhoneNumber)==true ||inputPhoneNumber.length != 10){
 // A string with no numeric value is converts to NaN , which returns false.
    alert("Please enter a vaild phone number.")

    inputPhoneNumber = window.prompt("Please fill in your phone number:")
}

if(inputPhoneNumber.length == 10){
    phoneNumber = "your phone number is valid."
}
else{
    phoneNumber = "your phone number is invalid."
}

alert ("your gender is "+ gender +"," + age + "," + "your city is " + city + "and "
 + phoneNumber)
