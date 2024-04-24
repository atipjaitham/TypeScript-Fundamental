let y: number = 20; // Declare y outside the block

let x: number = 10; // Now y is accessible here

if (x < y){
    console.log('x < y')
}
else {
    console.log('x > y')
}

x>y? console.log('true'):console.log('No')


let selectMenu: number = 0;
switch(selectMenu+1){
    case 0:
        console.log("Hello");
        break;
    case 1:
        console.log("World");
        break;
    case 2:
        console.log("Hello World");
        break;
}