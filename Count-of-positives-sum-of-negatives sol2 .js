function countPositivesSumNegatives(input){
    if(input==null||input.length==0) return [];
    
     let countPositive=input.filter((x)=>x>0).length;
     let sumNegative=input.filter((x)=>x<0).reduce((acumelator,currentValue)=>acumelator+currentValue,0);
     
     return [countPositive,sumNegative];
     
 }