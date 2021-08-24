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
    
}

//anonymous function (empty () for no arguments)
const fullNameManual = (fname, lname) => {
    return `${fname} ${lname}`;
}

let customerName = fullName(firstName, lastName);
console.log('Customer Name: ', customerName);

// 4 - Classes -----------------------------------------------