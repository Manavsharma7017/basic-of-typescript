function arr(arr:number[]):number{
    let sum:number=0;
    for(let i=0;i<arr.length;i++){
       sum=sum+arr[i]
    }
    return sum
}
console.log(arr([1,2,3,4,5]))