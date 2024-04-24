class Point{
    x: number;
    y: number;
    readonly version: string = "1.0.1";
    constructor(x: number = 0, y:number = 0){
        this.x = x;
        this.y = y;
        console.log("Hello")
    }
}

const point = new Point(10, 30);
point.y = 15;
console.log(`${point.x} --  ${point.y}`);

class PointOverload{
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any){

    }
}

class Person {
    name:string = "";
    constructor(name: string){
        this.name = name;

    }
    sayHi() {
        console.log(`Hi, I'm ${this.name}`);
    }
}
class Employee extends Person {
    salary: number = 0; // เปลี่ยน salary เป็น public
  
    constructor(name: string, salary: number) {
      super(name);
      this.salary = salary;
    }

  }
  

const person = new Employee("John",15000);
person.sayHi();