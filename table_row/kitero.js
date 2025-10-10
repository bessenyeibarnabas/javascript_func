const a = {};
const b = 6;

if (b > 5){
    a.name = 'Bt';
}
else{
    a["name"] = "Valaki";
}
console.log(a.name);
console.log(a["name"]);
console.log(a.age);