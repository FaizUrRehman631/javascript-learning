// +++++++++++++++++ Objects with this ++++++++++++++++++++++++
const user={
    username:"faiz",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website ${this.price}`)
        // console.log(this)
    }
}
// user.welcomeMessage()
// user.username="Faizan"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username = "Faizzzz"
//     console.log(this)
// }
// chai()

// const chai =()=>{
//     let username = "Faizzzz"
//     console.log(this)
// }
// chai()

const addTwo =(num1, num2)=> ({username:"faiz"})
// console.log(addTwo(3,4))

//  function one (){
//     console.log(`first function`);
// } 

// const userLoggedIn = true;
// const debitCard= true;

// if(userLoggedIn && debitCard){
//     console.log("Allow to buy course")
// }


// const myObj={}

// if(Object.keys(myObj).length === 0){
//     console.log("object is empty")
// }

// const myArr=[]
// if(myArr.length===0){
//     console.log("Array is empty")
// }

//++++++++++++++++++ Nullish coalescing Operator (??): null undefined ++++++++++++++++++
// it used when we get data from an API 
// let val1;
// val1= null ?? undefined ?? 20
// console.log(val1)


// ++++++++++++++++++++ Ternary Operator +++++++++++++++++++++=====
// condition ? true: false

// const iceTeaPrice = 100
// iceTeaPrice >= 80 ? console.log("less than 80"): console.log("more than 80")

