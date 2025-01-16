function loginUserMessage(username = "Default username"){
if(!username){
    console.log("Please enter a username")
    return;
}
return `${username} just logged in`

}

// console.log(loginUserMessage())

// sometime we face situation that we don't know how many arguments added by the users
// using rest operator to take parameters
// how to pass multiple values to a function
function calculateCartPrice(...num1){
return num1
}

// console.log(calculateCartPrice(200,3000,4000,500))

const myArr =[ 200, 3000, 4000, 500 ]
// parameter name could be any but it works according to give arguments value
function returnSecondValue(boota){
return boota[2]
}
// console.log(returnSecondValue(myArr))