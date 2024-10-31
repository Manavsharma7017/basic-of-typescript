interface user5{
    name:string,
    age:number,
    email:number,
    lastname:string,
}
type pick =Pick<user5,"name"|"age">
function updateuser(update:pick){

}