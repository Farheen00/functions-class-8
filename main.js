// How to write a function
function personName() {
    console.log("Farheen");
}
//to call a function
personName();
// example
function myName(firstName, lastName) {
    console.log(firstName, lastName);
}
myName("Farheen", "Usman");
// assign types to the function and to call function multiple times
function myFullName(firstName, lastName) {
    console.log(firstName, lastName);
}
myFullName("Farheen", "Usman");
myFullName("Ali", "Usama");
myFullName("Marium", "Usama");
//set default value in parameter in function
function placesToVisit(place, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log(place, country);
}
placesToVisit("Mazar-e-Quaid");
placesToVisit("Minar-e-Pakistan");
//example
function biryani(ing1, ing2) {
    if (ing2 === void 0) { ing2 = "rice"; }
    return ing1 + ing2;
}
var biryaniRecipe = biryani("mutton");
var biryaniRecipe2 = biryani("chicken", "Basmati rice");
console.log(biryaniRecipe);
console.log(biryaniRecipe2);
//example
function mangoShake(mango, milk, sugar) {
    if (mango === void 0) { mango = 1; }
    if (milk === void 0) { milk = 2; }
    if (sugar === void 0) { sugar = 3; }
    var shakeMix = mango + milk + sugar;
    return shakeMix;
}
console.log(mangoShake());
console.log(mangoShake(2, 2, 4));
console.log(mangoShake(undefined, 1, undefined));
