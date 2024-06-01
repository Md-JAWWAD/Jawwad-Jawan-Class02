// var firstName = 'Muhammad';
// firstName = 'Jawad';
// console.log(firstName)


// inside it {} called Local scope 
// out of {} called Global scope 

// Function Scope:
// var name = "azam"
// function foo()
// {
//     var name = "abdul baseeer"
//     console.log(name)
// }
// console.log(a);

// Redeclare:

// var a = 20;
// var a = 20;

// Re assigned:

// var a = 20;
// a = 25;

// Hoisting:

// 1. var
// 2. Function
// console.log(name);
// var name = 'Jawad'

let table = +prompt('Enter any Number?');
let lenght = +prompt("enter the number")
for(let i=1 ;i<=lenght; i++)
    {
        document.write(`${table} x ${i} = ${table*i}</br>`)
    }

