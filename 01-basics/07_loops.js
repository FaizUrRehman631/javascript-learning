// ++++++++++++++  Loops / Iterations +++++++++++++++++

// for loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number")
  }
  //    console.log(element)
}
// ++++++++++++ Table ++++++++++++++
// Table 0 to 10
// for (let i = 0; i <= 20; i++) {
//   console.log(`Outer loop value: ${i}`);
//   for (let j = 0; j <= 20; j++) {
//     console.log(i + "*" + j + "=" + i * j);
//   }
// }

let myArray = ["flash", "batman", "superman", "badman", "niceman"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element)
}

// ++++++++++++++++ Break and continue +++++++++++++++++

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`Value of index is: ${index}`);
// }

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     continue;
//   }
//   console.log(`Value of index is: ${index}`);
// }
// +++++++++++++++++ while do-while +++++++++++++++++++
// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`)
//     index += 2
// }
// let myAre = ["flash", "batman", "superman", "badman", "niceman"];
// let arr = 0
// while (arr < myAre.length) {
//     console.log(`Value is ${myAre[arr]}`)
//     arr+= 1
// }
// let score =11
// do {
//     console.log(`Score is: ${score}`)
//     score++
// } while (score <= 11);

// +++++++++++++++  for of loop +++++++++++++++++++++
// Array specific loops
// let numarr = [1,2,3,4,5,6,7]
// let myarry = ["waaao", "batman", "superman", "badman", "niceman"];
// for (const num of numarr) {
//     console.log(num)
// }
//  const greetings = "Hello World";
//  for (const greet of greetings) {
//     if (greet == " ") {
//         // console.log("breaked")
//         continue
//     }
//   console.log(greet)
//  }

// +++++++++++++++++ Map loop ++++++++++
// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United State of America")
// map.set('Fr',"Frnace")

// for (const [key,value] of map) {
//     console.log(key, ':-', value)
// }

// const myObject ={
//     'game1': 'NFS',
//     'game2': 'spiderman',
// }

// for (const [key,value] of myObject) {
//     console.log(key, ":", value)
// }
// here for of loop doesn't working on Object

// ++++++++++ for in loop ++++++++++++++++++
// const myObject ={
//     js: 'javascript',
//     cpp: 'c++',
//     rb: "ruby",
//     swift: "swift in apple"
// }
// for (const key in myObject) {
//    console.log(`${key} stands for ${myObject[key]}`)
// }

// const programming = ["js","rb","py","java","cpp"]
// for (const key in programming) {
//     console.log(programming[key])
// }

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United State of America")
// map.set('Fr',"Frnace")

// for (const key in map) {
//    console.log(key)
// }
// this is not iterable

// +++++++++++++++++++++ for each loop +++++++++++++++++

// const coding =["javascript","ruby","cpp","c++"]
// coding.forEach(element => {
//     console.log(element)
// });

// function printMe(val){
//     console.log(val)
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr)
// })

// const myCoding = [
//     {
//         language: "javascropt",
//         languageFileName:"java",
//     },
//     {
//         language: "javascropt",
//         languageFileName:"Oythi",
//     },
//     {
//         language: "javascropt",
//         languageFileName:"ahha",
//     },
//     {
//         language: "javascropt",
//         languageFileName:"jjajkla",
//     },
// ]

// myCoding.forEach((item)=>{
// console.log(item.languageFileName)
// })

const coding = ["javascript", "ruby", "cpp", "c++"];
// coding.forEach((item)=>{
//     console.log(item)

// })
// for each doesn't return any value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// myNums.filter((filtr)=> filtr >4)
// console.log(newNums)

// const newnums= myNums.filter((num)=>{
//      return num > 4
// })
// console.log(newnums)
// ++++++++++++++++++++++++= map loop +++++++++++++++++++
// const newn= myNums.map((num)=> num +10)
// console.log(newn)

//  ++++++++++++++++++++++ map loop with chaining +++++++++++++++++
// const newMber = myNums.map((num)=> num *10).map((nm)=>nm +1 ).filter((num)=> num >= 40)
// console.log(newMber)

// ++++++++++++++++++ Reduce loop ++++++++++++++
// it used for shopping carts to add new items
// const numbers =[1,2,3]
// const mytotal = numbers.reduce((acc,curr)=>{
//     console.log(`acc: ${acc} and curr: ${curr}`)
//     return acc + curr
// },0)
// console.log(mytotal)

// const totalCartItems = [
//   {
//     itemName: "Data Science Course",
//     price: 1299,
//   },
//   {
//     itemName: "JavaScript Essentials",
//     price: 999,
//   },
//   {
//     itemName: "Python Programming Bootcamp",
//     price: 1499,
//   },
//   {
//     itemName: "React Development Guide",
//     price: 1199,
//   },
//   {
//     itemName: "Machine Learning Mastery",
//     price: 1999,
//   },
//   {
//     itemName: "Web Design Basics",
//     price: 799,
//   },
//   {
//     itemName: "Digital Marketing Pro",
//     price: 899,
//   },
//   {
//     itemName: "Graphic Design Toolkit",
//     price: 1099,
//   },
//   {
//     itemName: "Cloud Computing Course",
//     price: 1599,
//   },
//   {
//     itemName: "Cybersecurity Fundamentals",
//     price: 1399,
//   },
// ];

// const allItemNames = totalCartItems.reduce((acc, currentItem) => {
//   return acc + " " + currentItem.itemName;
// }, "Items in Cart:");

// // Output the concatenated item names
// console.log(allItemNames);

// const totalPrice = totalCartItems.reduce((acc, currentItem) => {
//     return acc + currentItem.price;
// }, 0); // Initial value is 0

// // Output the total price
// console.log("Total Price:", totalPrice);

const totalCartItems = [
  {
    itemName: "Data Science Course",
    price: 1299,
  },
  {
    itemName: "JavaScript Essentials",
    price: 999,
  },
  {
    itemName: "Python Programming Bootcamp",
    price: 1499,
  },
  {
    itemName: "React Development Guide",
    price: 1199,
  },
  {
    itemName: "Machine Learning Mastery",
    price: 1999,
  },
  {
    itemName: "Web Design Basics",
    price: 799,
  },
  {
    itemName: "Digital Marketing Pro",
    price: 899,
  },
  {
    itemName: "Graphic Design Toolkit",
    price: 1099,
  },
  {
    itemName: "Cloud Computing Course",
    price: 1599,
  },
  {
    itemName: "Cybersecurity Fundamentals",
    price: 1399,
  },
];

const cartSummary = totalCartItems.reduce(
    (acc, currentItem) => {
        acc.itemNames += ", " + currentItem.itemName;
        acc.totalPrice += currentItem.price;
        return acc;
    },
    { itemNames: "Items in Cart:", totalPrice: 0 }
);

// console.log(cartSummary.itemNames);
// console.log("Total Price:", cartSummary.totalPrice);
