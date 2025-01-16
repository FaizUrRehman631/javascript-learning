// "use strict"; // treat all JS code as newer version
// alert(3+3)  // we are using nodeJs, not browser
// const myArr = ["haha","lajja","jajjk"]
const myFunc= function(){
    console.log("this is a function")
}
// console.table([myFunc(), typeof myFunc]) 

const otherNumber = 1000000
// console.log(otherNumber.toLocaleString('en-in'));

const myArr = ["thor","spider","man"]
const myArr3 = ["thor2","sp2ider","ipman"]

const newArr=myArr.concat(myArr3)
// console.log(newArr[5])

const spreadDef= [...myArr, ...myArr3,"Fiaz"]
// console.log(spreadDef) 

const nestingArr= [1,2,3,[4,5],6,7,[6,8,9,[2,4,3]],10]
const flatArr = nestingArr.flat(3)
// console.log(flatArr)

// console.log(Object.entries({name:"Faiz_Ur_Rehman"}))