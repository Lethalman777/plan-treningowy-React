import { LoginAccountType } from "./loginAccount";

export type UserType={
  index_nr:number;
  name:string;
  age: number;
  weight: number;
  height: number;
  gender: string;
}

export type UserRegistration={
  user:UserType;
  loginAccount:LoginAccountType;
  // index_nr:number;
  // name:string;
  // age: number;
  // weight: number;
  // height: number;
  // gender: string;
  // login: string;
  // password: string;
  // confirmedPassword: string;
}

export class User {
  private index_nr: number;
  private name: string;
  private age: number;
  private weight: number;
  private height: number;
  private gender: string;

  constructor(index_nr: number, name: string,age: number, weight: number, height: number, gender: string){
    this.index_nr = index_nr;
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.gender = gender;
  }
  // constructor(dataResponse:any){
  //   this.index_nr = dataResponse.index_nr;
  //   this.name = dataResponse.name;
  //   this.age = dataResponse.age;
  //   this.weight = dataResponse.weight;
  //   this.height = dataResponse.height;
  //   this.gender = dataResponse.gender;
  // }
  get Index_nr(): number {
    return this.index_nr;
  }
  get Name(): string {
    return this.name;
  }
  get Age(): number {
    return this.age
  }
  get Weight(): number{
    return this.weight;
  }
  get Height(): number{
    return this.height;
  }
  get Gender(): string{
    return this.gender;
  }
  set Index_nr(index_nr: number){
    this.index_nr = index_nr;
  }
  set Gender(gender: string){
    this.gender = gender;
  }
  set Name(name: string){
    this.name = name;
  }
  set Age(age: number){
    this.age = age;
  }
  set Weight(weight: number){
    this.weight = weight;
  }
  set Height(height: number){
    this.height = height;
  }
}
