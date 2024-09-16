type user1={
    firstname:string,
    lastname:string,
    age:number
}
//type are smillar to interface and but they hlep you defne multipletype
type many=string|number

function greet(a:many):void{
    console.log(a)

}
greet(1)
greet("1")

type Employee2 = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee2 & Manager;
  
  const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
  };
  