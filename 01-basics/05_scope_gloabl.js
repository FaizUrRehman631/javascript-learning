let b = 30
if(true){
    let a = 10
    b 
    var c = 30
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "Faiz"
    
    function two(){
        const website = "Youtube"
        // console.log(username)
    }
    // console.log(website)
    two()
}
one()

console.log(addOne(5))
function addOne(num){
    return num + 1
}

// console.log(addTwo(4)) // because it stored in a variable
const addTwo=function(num){
return num + 1
}
