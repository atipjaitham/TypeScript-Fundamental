function sayHello(name:string, lastname:string = "None"): string
{
    return "Hello " + name +" "+ lastname;
}
console.log(sayHello('Atip','Jaitham'))


function sum(a:number,b:number,...rest:number[]):number{
    return a+b +rest.reduce((a,b)=> a + b,0);
}
console.log(sum(1,2,3,4,5,6,7,8))


function add({x, y}:{x: number, y:number}):number 
{
    return x+y;
}
console.log(add({x:5, y:10}))