// 1 - Variables ------------------------------------------------------------------------
const firstName = 'Ben';
const lastName = 'Ben';
let meaningOfLife = 'Chocolate Latte';
var neverUseMe = 'I suck.';
console.log('Variables: ', neverUseMe);
//2 - Basic Collections (data structures) ---------------------------------------------
const allCustomers = ['Terry Allen', 'Ali Hanani', 'Jin Rogers', 'Andre Nelson'];
console.log(allCustomers[1]);
allCustomers.push('Ben Chen');
console.log(allCustomers);
function fullName(fname, lname) {
    return `${fname} ${lname}`;
}
