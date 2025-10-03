let a = "Hello" // lehet újra értéket adni
const b ="Csao" // nem lehet újra értéket adni
console.log(a,b)
/**
 * @type {string}
 */

const c = ["aa","b","cc"] // tömb
console.log(c) // tartalma

for(let i=0;i<c.length;i++){ // szamlalo
    console.log("index",i,"Érték",c[i])
}

for (let i in c){ // for in
    console.log("index",i,"Érték",c[i])
}

for (let e of c){ // for of
    console.log("Érték",e)
}

// push
let hossz = c.push("d") //hozzáad "d"-t
console.log(c)
console.log(hossz)

//obijektum
const obj={
    name: "Barnabás",
    age: 18
}
for(let key in obj){
    console.log(`${key}: ${obj[key]}`)
}
console.log(obj["age"]); //18

//obijektum tömb
const tomb=[
    {name: "Valaki", age: 19},
    {name: "Ember", age: 20},
    {name: "Alma", age: 21}
]

for (let em of tomb){
    console.log(em.name)
}