//let fruits= [
//    {name: "Apple" , color: "red" , price: 5 , inStock: false} ,

 //   {name: "Orange", color: "orange", price: 6, inStock: false},

 //   {name: "Orange", color: "orange", brand: "Sunkist", price: 4.5, inStock: true},

 //   {name: "Pear" , color: "green", price: 3 , inStock: true},

  //  {brand: "Fuji" , color: "red" , price: 2 }

  //]
  
  let fruits= [ // key-value pairs
    {name: "Apple", color: "red", price: 5, inStock: false, },
    {name: "Orange", color: "orange", price: 6, inStock: false},
  
    {name: "Orange", color: "orange", price: 4.5, inStock: true},
  
    {name: "Pear", color: "green", price: 3, inStock: true},
  
    { name: "Apple", color: "red", price: 2, inStock: true }
  ]

//let oneFruit = {name: "Apple" , color: "red" , price: 5 , inStock: false}
for (let i = 0; i<fruits.length; i++){

//let allCapsname = fruits[i].name.ToUpperCase()
//console.log(parseInt(fruits[i].price))

//let firstNumber = parseInt(fruits[i].price)
//if (fruits[i].price)


let allName = fruits[i].name.toUpperCase()

let firstPrice = parseInt(fruits[i].price)//Data formating


if(fruits[i].price-firstPrice == 0){
  
    fruits[i].price = fruits[i].price + ".00"
}
else{
    fruits[i].price = fruits[i].price + "0"
}

let text = `The fruits name is ${allName}. The colour is ${fruits[i].color}. The price is RM${fruits[i].price}.`

if(fruits[i].inStock == true){
    text += `The stock are available.`
}
else{
    text += `The stock had sold out.`
}

  console.log(text)
}
