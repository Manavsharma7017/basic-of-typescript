interface user6{
    name:string,
    age:number,
    email:number,
    lastname:string,
}
type pick2 =Pick<user6,"name"|"age">
type updateoptinal =Partial<pick2>
function updateuser2(update:pick){

}