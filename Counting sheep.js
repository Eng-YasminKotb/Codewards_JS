function countSheep(arr){
    if(arr==null) return 0;
     let count=0;
    for(let i=0;i<arr.length;i++){
        
         if(arr[i]==true) count++;

    }
    return count;
}
console.log(countSheep([true,  true,  true,  false,true,  true,  true,  true ,true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]))