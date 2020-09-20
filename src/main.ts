import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Point } from './point';
import { LikeComponent } from './app/like.component';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//Concept of Let Keyword Start

function doVarAccessCheck(){

  for(var i1=0; i1<5;i1++){
    console.log(i1);
  }

  console.log("Final : "+i1);
}

doVarAccessCheck();

function doVarAccessCheck2() {

  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  //console.log("Final : "+i);
  //Compile time error in above line
}

doVarAccessCheck2();

  let count = 5;
  //count = 'a';
  //compile time error It should required number

  let b;
  //let b: any;
  //It does not give any compile time error

  b = 5;
  b = 'a';
  b = true;

  let num : number;

  num = 5;
  /*
  below code get compilation error
  num = 'a';
  num = true;

   */
  //Concept of Let Keyword End


  /**
   * Declaring variable in TypeScript Start
   */

  let aa : number;
  let bb : string;
  let cc : any;
  let dd : boolean;
  let ee : number[] = [1,2,3];
  let ff : any[] = ['a', 5, true];

  const ColorRed = 0;
  const ColorGreen = 1;
  const ColorBlue = 2;

  enum Color {Red = 0, Green, Blue};
  let bgColor1 = Color.Red;
  let bgColor2 = Color.Green;
  let bgColor3 = Color.Blue;

  /**
   * Declaring variable in TypeScript End
   */


  /**
   * Type Assertion start
   */
  let message;
  message = 'abc';

  //let endWithC = (<string>message).endsWith('c');
  //give compile time error
  let endWithC_v2 = (message as string).endsWith('c');

  /**
   * Type Assertion end
   */


  /**
   * Arrow Function Start
   */
    // tslint:disable-next-line:no-shadowed-variable
  let log = function(message){
    console.log(message);
  };

  // tslint:disable-next-line:no-shadowed-variable
  let log_v2 = message => console.log(message);

  // tslint:disable-next-line:no-shadowed-variable
  let log_v3 = (message: any) => {
    console.log(message);
  };
  /**
   * Arrow Function End
   */


  /**
   *  Interfaces Start
   *  1. Interface as Type
   *  2.Interface as Function Type
   *  3. Interface for Array Type
   *  4. Optional Property
   *  5. Read only Properties
   *  6. Extend Interface
   *  7. Implementing an Interface
   */

  //1. Interface as Type
  interface KeyPair {
    key: number;
    value: string;
  }

  let kv1: KeyPair = { key: 1, value: 'Steve' }; // OK

  //let kv2: KeyPair = { key: 1, val: 'Steve' };
  // Compiler Error: 'val' doesn't exist in type 'KeyPair'

  //let kv3: KeyPair = { key: 1, value: 100 };
  // Compiler Error:

  //2. Interface as Function Type
  interface KeyValueProcessor
  {
    (key: number, value: string): void;
  }

  function addKeyValue(key: number, value: string): void {
    console.log('addKeyValue: key = ' + key + ', value = ' + value);
  }

  function updateKeyValue(key: number, value: string): void {
    console.log('updateKeyValue: key = ' + key + ', value = ' + value);
  }

  let kvp: KeyValueProcessor = addKeyValue;
  kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill

  kvp = updateKeyValue;
  kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve

  // 3. Interface for Array Type
  interface NumList {
    [index: number]: number;
  }

  let numArr: NumList = [1, 2, 3];
  console.log(numArr[0]);
  console.log(numArr[1]);

  interface IStringList {
    [index: string]: string;
  }

  let strArr : IStringList;
  //Remaining
/*
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";

  console.log(strArr);*/
//Remaining

  //4. Optional Property
interface IEmployee {
  empCode: number;
  empName: string;
  empDept?:string;
}

let empObj1:IEmployee = {   // OK
  empCode:1,
  empName:"Steve"
}

let empObj2:IEmployee = {    // OK
  empCode:1,
  empName:"Bill",
  empDept:"IT"
}

console.log(empObj1);
console.log(empObj2);

  //5. Read only Properties
  interface Citizen {
    name: string;
    readonly SSN: number;
  }

  let personObj: Citizen  = { SSN: 110555444, name: 'James Bond' }

  personObj.name = 'Steve Smith'; // OK
  //personObj.SSN = '333666888';
  // Compiler Error

  //6 Extend Interface
  interface IPerson {
    name: string;
    gender: string;
  }

  interface IEmployee_V2 extends IPerson {
    empCode: number;
  }

  let empObj:IEmployee_V2 = {
    empCode: 1,
    name: "Bill",
    gender: "Male"
  }


  //7. Implementing an Interface
  interface IEmployee_V3 {
    empCode: number;
    name: string;
    getSalary:(number)=>number;
  }

  class Employee implements IEmployee_V3 {
    empCode: number;
    name: string;

    constructor(code: number, name: string) {
      this.empCode = code;
      this.name = name;
    }

    getSalary(empCode:number):number {
      return 20000;
    }
  }

  let emp = new Employee(1, "Steve");
  console.log(emp);
  //Interfaces End



  // Class & Object & Access Modifier & Properties  Start

  let point = new Point(1, 2);
  point.draw();
  point.x = 10;
  console.log(point.x);
  // Class & Object & Access Modifier & Properties  End


  let likeComponent = new LikeComponent(10, true);
  likeComponent.onClick();
  console.log(`likesCount : ${likeComponent.likesCount}, isSelected : ${likeComponent.isSelected} `);
