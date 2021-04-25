let array=[1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77]
let even=0,odd=0;
for(var i=0;i<array.length;i++)
{
    if(array[i]%2==0)
    {
        even=even+1
    }
    else
    {
        odd=odd+1;
    }
}

console.log("total number of even element is:  "+even);
console.log("total number of Odd element is:  "+odd);