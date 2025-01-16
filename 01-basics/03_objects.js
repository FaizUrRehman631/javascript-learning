const mySynm = Symbol("Key1")
// symbol syntax like this
const jsUser= {
    name:"Faiz",
    "Full Name": "Hello World",
    age:19,
    [mySynm]:"MyKey1",
    location:"Faisalabad",
    email:"fiaz@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Tuseday","Friday"],
    updates:{name:"nothing", Address:"Lahore"}
}
// console.log(jsUser.updates.Address)
// console.log(jsUser)
// console.log(typeof jsUser[mySynm])

jsUser.greeting= function(){
    console.log(`Hello there! ${this.updates.Address}`)
}
// console.log(jsUser.greeting())

// const tiderUser = new Object() // singleton Object 
// console.log(tiderUser)
// let user={} // non-singleton Object

const regularUser= {
    email:"someone@gmail.com",
    fullname:{
        password:123445,
        userfullname:{
            name:"shadow Walker",
            Id:["faizalk","pakistan","lahore"]
        }
    },
    address:"lahore"
    
}
// get values like this
// console.log(regularUser.fullname.userfullname.Id[1])

const users =[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"faia@gmail.com"
    },
    {
        id:3,
        email:"h@gmail.com"
    },
]

const course={
    courseName:"ajkajljfa",
    price:"0000",
    istructor:"aajkjklajkl"

}
// console.log(course.price)
const {istructor:outline}= course
// console.log(istructor)