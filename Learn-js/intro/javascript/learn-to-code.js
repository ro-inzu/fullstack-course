
// Variables and strings
function varsAndStrings(){
    var firstName = "Jon";
    var age = 32;

    var loginWelcomeMessage = "Welcome, " + firstName  + ". Happy " + age + "rd birthday!";
    console.log(loginWelcomeMessage)
}

//Numbers
function numbs(){
    var mods = 10  %3;
    console.log(mods)

}
// Comparison operators
// == equal to
// === type check 
// <= less than or equal to
// >= greater than or equal to
function compOps(){
    var my_account_bal = 300;
    var nike_cost = 799.23;
    var coupon = 500;

    if (nike_cost <= my_account_bal){
        my_account_bal -= nike_cost;
        console.log("We just bought some SB DUNKS!")
        console.log("Account Balance: " + my_account_bal)
    }
    else if (nike_cost - coupon <= my_account_bal){
        console.log("Coupon applied!")
        my_account_bal -= nike_cost -  coupon;
        console.log("Account Balance: " + my_account_bal)
    }
    else{
        console.log("Not enough in account balance!")
    }

}
// logical operators
// !== not equal to and type check
// != not equal to
// || or
// && and 
function logicalOps(){
    var val1 = 23;
    var val2 = "23";

    if (val1 !== val2){
        console.log("Values are not the same")
    }
    else{
        console.log("Values are the same")
    }

    var cat1 = 5;
    var cat2 = 10;
    var cat3 = 3;

    if (cat1 > cat2 && cat1 > cat3){
        console.log("Cat1 is the cutest");
    } else if (cat2 > cat1 && cat2 > cat3){
        console.log("Cat2 is the cutest");
    } else if (cat3 > cat1 && cat3 > cat2){
        console.log("Cat3 is the cutest");
    }
}
// arrays
function arrays(){
    var cars = ["Saab", "Volvo", "BMW"];
    for (var i = 0; i < cars.length; i++){
        console.log(cars[i])
    }

    cars.push("Honda")
    console.log(cars)

    // remove element from array 
    // if it does not find element it will return  -1
    var index = cars.indexOf("Saab")
    console.log("index: " + index)
    if (index > -1){
        // remove 1 element from position x...
        cars.splice(index, 1)
    }
    console.log(cars)
}

// functions ***********

var bank_bal = 500;

function makeTransaction(cost){
    if (cost <= bank_bal){
        bank_bal -= cost
        console.log("Transaction success!")
    }
    else{
        console.log("Insufficient funds!")
    }
}


compOps()
numbs()
varsAndStrings()
logicalOps()
arrays()

// functions
makeTransaction(10);
console.log(bank_bal)

// assign function to a variable
var transaction = function(cost){
    if (cost <= bank_bal){
        bank_bal -= cost
        console.log("Transaction success!")
    }
    else{
        console.log("Insufficient funds!")
    }
}
transaction(22)
console.log(bank_bal)
