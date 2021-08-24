// 1 - Variables -------------------------------------------
const firstName: string = 'Ben';
const lastName: string = 'Ben';
let meaningOfLife = 'Chocolate Latte';
var neverUseMe = 'I suck.';

console.log('Variables: ', neverUseMe);

// 2 - Basic Collections (data structures) -----------------
const allCustomers: string[] = ['Terry Allen', 'Ali Hanani', 'Jin Rogers', 'Andre Nelson'];
console.log(allCustomers[1]);
allCustomers.push('Ben Chen');
console.log(allCustomers);

// 3 - Functions -------------------------------------------
// you can add return type (void if nothing) to the function signature (prototype)
function fullName(fname: string, lname: string): string { 
    return fname + lname;
}

//anonymous function (empty () for no arguments)
const fullNameManual = (fname, lname) => {
    return `${fname} ${lname}`;
}

let customerName = fullName(firstName, lastName);
console.log('Customer Name: ', customerName);

// 4 - Classes -----------------------------------------------
class Contact {
    public firstName: string;
    public lastName: string;
    private email: string;

    constructor(fname: string, lname: string) {
        this.firstName = fname;
        this.lastName = lname;
        this.email = `${firstName}.${lastName}@galvanize.com`;
    }
}

let benChenContact = new Contact('Ben', 'Chen');
console.log('Class object', benChenContact);
console.log('Class property', benChenContact.firstName);


// 5 - Flow Control Structures ---------------------------------
// two types: for and while loops
// for/of loop

// I want to make an array of Contacts with the array of names above (in part 2)
const contacts: Contact[] = [];

for(const customerName of allCustomers) {
    //split returns an array, so use destructuring to split into two variables
    let [ firstName, lastName ] = customerName.split(' ');
    let newContact = new Contact(firstName, lastName);
    contacts.push(newContact);
}

console.log('All contacts: ', contacts);

// FizzBuzz, if divisible by 3, print Fizz. If divisible by 5, print Buzz. If both, print FizzBuzz
let numbers: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// three equal signs are stricter than two
for(const n of numbers) {
    if (n % 3 === 0 && n % 5 === 0){
        console.log('FizzBuzz');
    }
    else if (n % 3 === 0) {
        console.log('Fizz');
    }
    else if (n % 5 === 0) {
        console.log('Buzz');
    }
    else{
        console.log(n);
    }
}