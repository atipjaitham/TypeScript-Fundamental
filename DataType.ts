const app_name = "My app";
const app_version ="10.1.1 "
const myArray: number[] = [7,28,40];
let myArray2: any[] =[7,28,40,"GOLF"]

function sayHello()
{
    if(true)
        {
            var myName: string = "Atip Jaitham";
            var myAge: number;
            var canVote =true;
            var i;
        }
        console.log(myName);
}

enum WorkStatus {
    Task = 1,
    Working,
    Done
}

sayHello();

console.log(myArray)
console.log(myArray2.push("ATPXJ"));
console.log(myArray2)

let employee: [number, string,boolean][]= [[1, "Miss A",true], [2, "Miss B",false]];
console.log(employee[1])
employee.push([3, "Mister X",true])
console.log(employee)

console.log(WorkStatus.Working);