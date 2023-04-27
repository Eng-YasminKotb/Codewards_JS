function countPositivesSumNegatives(input){
    if(input==null||input.length==0) return [];
    
     let countPositive=[];
     let sumNegative=0;
         for(let i=0;i<input.length;i++){
             if(input[i]>0)  countPositive.push(input[i]);
             else   sumNegative+=input[i];
         }
 
     return [countPositive.length,sumNegative];
     
 }
 
