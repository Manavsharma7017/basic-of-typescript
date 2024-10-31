type user2={
    id:string,
    name:string
}
type users={
    [Key:string]:user2
}
const obj:users={
    "manav":{
        id:"1",
        name:"manav"
    }
}//hard syntex
type user3=Record<string,users>