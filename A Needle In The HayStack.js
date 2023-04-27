function getNeedle(arr){
    let str;
    for(let i=0;i<arr.length;i++){
       
        if(arr[i]=="needle") 
         str=`found the needle at position ${i}`;
    
    }
    return str;
}