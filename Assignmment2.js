/*
1. gender: only accept string (F, M) as input
2. age: only accept number within 1-100
3. city:  only accept string (A, B, C, D) as input
4. phone number: only accept 
- numbers from 0-9
- no alphabet
- no special character
*/

let inputGender = window.prompt("Please enter your gender: ")
//prompting the user for input before entering a web page

while((inputGender != "F") && ( inputGender !="M" )) {
// if input is not equal to "F" and input is not equal to "M" it will execute the code in {}
 
alert("Please enter your gender (only F and M)")
//gives the user a warning (in a alert box)
  
inputGender = window.prompt("Please enter your gender: ")
//prompting the user again like 11 

}


if (inputGender == "F") {
  //if the input equal to "F" it will execute the code in {}
    gender = "female"
    // gender = "female"
  }
  else if (inputGender == "M") {
    //if the input IS NOT equal to "F" then if the input is equal to "M" it will execute the code in {}
    gender = "male"
    // gender = "male"
  }
  
  console.log(gender)
  //console.log is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user

  let inputAge = window.prompt("Please enter your age ,(only 1 - 99)")
  //prompting the user for input before entering a web page like 11

  while(isNaN(inputAge)==true || (parseInt(inputAge)<1) || (parseInt(inputAge)>99)){
  // if inputAge is not a number or inputAge less than 1 or inputAge more than 99 it will execute the code in {}
    alert("Please enter age correctly.")
  // gives the user a warning (in a alert box) like 17
    inputAge = window.prompt("Please enter your age (only accept 1 - 99):") 
    //prompting the user again like 11 
}

if(parseInt(inputAge)<=12){
//The parseInt method parses a value as a string and returns the first integer.
  age =  "you are a kid, "
} 
else if((parseInt(inputAge)>12) && (parseInt(inputAge)<=18)){
  //same as 51
  age = " you are a teen, "
}
else if((parseInt(inputAge)>18) && (parseInt(inputAge)<=25)){
   //same as 51
  age =  "you are a youth, "
}
else if((parseInt(inputAge)>25) && (parseInt(inputAge)<=60)){
   //same as 51
  age = " you are a middle-age, "
}
else {
  age = "you are a elderly, " 
}

  let inputCity = window.prompt("Please enter your city, only accept (A, B, C, D) ")
 //prompting the user again like 11 
  let city =""
//city = "" blank

while((inputCity != "A") && (inputCity != "B") && (inputCity != "C") && (inputCity != "D")){
//if inputCity is not "A,B,C,D" it will execute the code in {}
alert("Please enter your city, only accept (A, B, C, D) ")
// gives the user a warning (in a alert box) like 17
 inputCity = window.prompt("Please enter your city, only accept (A, B, C, D) ")
 //prompting the user again like 11 
}
switch(inputCity){
  //statement to select one of many code blocks to be executed
    case "A":
      city = "Downtown "
      break;
  
    case "B":
      city = "Suburban "
      break;
  
    case "C":
      city = "CBD "
      break;
  
    case "D":
      city = "village "
      break;
  
    default:
      city = "undefined address "
      break;
  }

  let inputPhoneNumber = window.prompt("Please fill in your phone number:")
   //prompting the user again like 11 
let phoneNumber = ""
//phoneNumber = "" blank
while(isNaN(inputPhoneNumber)==true ||inputPhoneNumber.length != 10){
//if inputPhoneNumber is not a number or inputPhoneNumber length is not equal 10 (means like 0128260178)
    alert("Please enter a vaild phone number.")
// gives the user a warning (in a alert box) like 17
    inputPhoneNumber = window.prompt("Please fill in your phone number:")
    //prompting the user again like 11 
}

if(inputPhoneNumber.length == 10){
  //if inputPhoneNumber length is 10, it will execute the code in {} 
    phoneNumber = "your phone number is valid."
}
else{
  // if the statement was false , it will go to else and execute the code in {} 
    phoneNumber = "your phone number is invalid."
}

alert (`your gender is ${gender}, ${age},your city is ${city}and ${phoneNumber}`)
//gives the user a warning (in a alert box)
