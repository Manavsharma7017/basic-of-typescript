const logname=(x:string)=>{
    console.log("hello "+x)
}
logname("manav");


const sumfun=(x:number,y:number):number =>{//return type safty
  return x+y
}
console.log(sumfun(2,3))


const agecheck = (age: number): boolean => {
    return age > 18 ? true : false;
}

const  runanotherfun =(callback: (age: number) => boolean):void => {
        const ans:boolean=callback(19);
        console.log(ans)
}

runanotherfun(agecheck);
