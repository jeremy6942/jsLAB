// 1. The prograam will take in a 11-digits phone number as user input, return either this input is valid or not by alert the user
//criteria for a phone number:
  //  1. 11 digits
  //  2. The last digit is an even number
  //  3. No alphabets
    //4.The first digit should be '0'
   // output: true/ false 

let userInput= window.prompt("Please enter a phone number: ")
// let userInput = "11111222223"
let valid= false

let digits = userInput.length // get the number of characters in string
let lastDigit= userInput[10] // get the last digit of string using index
let firstDigit= userInput[0] // get the first digit

// if (lastDigit==0 || lastDigit==2 || lastDigit==4 || lastDigit==6 || lastDigit== 8){
//   valid= true
// }

// algorithm
if (lastDigit % 2 == 0){ 
  valid= true
}

//valid == true
if (digits==11 && valid==true && firstDigit==0){
  alert("This is a valid phone number")
}

else{
  alert("This is not a valid phone number")

}
