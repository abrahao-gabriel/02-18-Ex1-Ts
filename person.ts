export class Person{
  firstName : string;
  middleName : string;
  lastName : string;
  age: number;
  fullName: string;
  constructor(firstName: string, middleName: string, lastName: string, age: number){
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName(){
    return "Nome completo:"+this.firstName+" "+this.middleName+" "+this.lastName;
  }

  getBirthdayYear(){
    return 2022-this.age;
  }
}