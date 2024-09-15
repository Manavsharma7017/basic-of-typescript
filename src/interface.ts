interface user{
 firstname:string,
 lastname:string,
 age:number,
 email?:string//optinal arugment
}
const userdata={
    firstname:"manav",
    lastname:"sharma",
    age:19
}
const fun=(user:user):boolean=>{
  return user.age>18?true:false
}
console.log(fun(userdata))