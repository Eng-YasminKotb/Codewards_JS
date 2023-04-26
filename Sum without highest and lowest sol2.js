function specialSum(arr){
    if(arr==null) return 0;
    let sum=0;
    //to get the min element
    let minNum=Math.min(...arr);
    //to get the max element
    let maxNum=Math.max(...arr);
    //to delete the max and the minmum elements we need to filter the array 

    let filterArray=arr.filter((x)=>x!=minNum&&x!=maxNum);
    
    for(let i=0;i<filterArray.length;i++)sum+=filterArray[i];
    
    return sum;
}
