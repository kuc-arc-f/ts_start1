//

/* 
function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);
*/

function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

console.log( greeter(user) );

document.body.textContent = greeter(user);

