const dishes=[{
  name: "Italian Pasta",
  price: 9.55,
  
},
{name: "Rice With Veggies",
  price: 8.65,
},
{name: "chicken eith potatoes",
 price: 15.55,
},
{name: "veg pizza",
price: 6.45,},];
const tax=1.2;
function getprices(taxBoolean){
  for(menu of dishes){
    // console.log(menu);
    let finalprice;
    if(taxBoolean==true){
      finalprice=menu.price * tax;
    }
    else if(taxBoolean==false){
      finalprice=menu.price;
    }
    else{
      console.log("you need to pass a boolean to call");
      return;
    }
    console.log('dish:'+menu.name+' price: $'+finalprice);
  }
}
function getdiscount(taxBoolean,guests){
  getprices(taxBoolean);
  if(typeof guests == "number" && guests>0 && guests<30){
    let discount=0;
    if(guests<5){
      discount=5;
    }
    else{
      discount=10;
    }
    console.log('discount: $'+discount);
  }
  else{
    console.log('the second argument must be a number between 0 and 30')
  }
}
getdiscount(true,2);
getdiscount(false,10);