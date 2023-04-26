function specialSum(arr){
    if(arr==null) return 0;
 else{
    for(let i=0;i<arr.length;i++){
        //first sort the array 
                 for(let j=i+1;j<arr.length;j++){
                     if(arr[j]>arr[i]){
                         let temp=arr[j];
                         arr[j]=arr[i];
                         arr[i]=temp;
                     }
                 }
     }
     //now we ignore the first element and the last element and get our sum
    
     let sum=0;
     for(let i=1;i<arr.length-1;i++) sum+=arr[i];
     return sum; 
 }
     
 }