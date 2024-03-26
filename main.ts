// How to write a function
function personName() {console.log
    ("Farheen");}
//to call a function
    personName();
// example
function myName(firstName,lastName){
    console.log(firstName,lastName);
}
myName("Farheen","Usman");
// assign types to the function and to call function multiple times
function myFullName(firstName:string,lastName:string){
    console.log(firstName,lastName);
}
myFullName("Farheen","Usman");
myFullName("Ali","Usama");
myFullName("Marium","Usama");
//set default value in parameter in function
function placesToVisit(place:string,country:string="Pakistan"){
    console.log(place,country);
}
placesToVisit("Mazar-e-Quaid");
placesToVisit("Minar-e-Pakistan");
//example
function biryani(ing1:string,ing2:string="rice"){return ing1+ing2}
let biryaniRecipe=biryani("mutton");
let biryaniRecipe2=biryani("chicken","Basmati rice")
console.log(biryaniRecipe);
console.log(biryaniRecipe2);
//example
function mangoShake(mango:number=1,milk:number=2,sugar:number=3){
    let shakeMix=mango+milk+sugar
    return shakeMix
}
console.log(mangoShake());
console.log(mangoShake(2,2,4));
// to change the value of middle parameter without affecting other values
console.log(mangoShake(undefined,1,undefined));