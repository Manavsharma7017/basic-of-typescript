interface user7{
   readonly name:string,
   readonly age?:number,
   readonly email?:number,
   readonly lastname?:string,
}
const manav5:user7={
    name:"manav"
}
const manav6:Readonly<user7>={
    name:"manav"
}
//manav5.name=" vmksnjg" Cannot assign to 'name' because it is a read-only property.ts(