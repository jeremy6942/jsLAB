var today = window.prompt("Please enter a day:") // input is a string
var text= "Today is "

// for a cleaner code
switch (parseInt(today)){ // convert string input to integer
  case 0: 
    text+= "SUNDAY"
    break;
  
  case 1: 
    text+= "MONDAY"
    break;

  case 2:
    text += "TUESDAY"
    break;

  case 3:
    text += "WEDNESDAY"
    break;

  case 4:
    text += "THURSDAY"
    break;

  case 5:
    text += "FRIDAY"
    break;

  case 6:
    text += "SATURDAY"
    break;

  // base case
  default:
    text += "NOT A DAY!"
    break;
}

alert(text) // display output
