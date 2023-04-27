function digitize(n){
    //convert the number to string where you can access it's digits
    return n.toString()
    //split this number in array where ypou can reverse it
    .split("")
    //Now we will return each charachter in the array to type number
    .map((x)=>Number(x))
    //finally reverse the array
    .reverse();
 
}
console.log(digitize(123))