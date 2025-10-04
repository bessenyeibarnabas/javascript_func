/*

let a = "Hello" // lehet újra értéket adni
const b ="Csao" // nem lehet újra értéket adni
console.log(a,b)
/**
 * @type {string}
 */

/*
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
*/

const arr =[
    {
        writer: "Balassi Bálint",
        time: "reformáció",
        lovers1: "Losonczy Anna",
        lovers2: "Dobó Krisztina"
    },
    {
        writer: "Csokonai Vitéz Mihály",
        time: "felvilágosodás",
        lovers1: "Vajda Juliána",
    },
    {
        writer: "Petőfi Sándor",
        time: "magyar romantika	",
        lovers1: "Mednyánszky Berta",
        lovers2: "Szendrey Júlia"
    },
    {
        writer: "Ady Endre",
        time: "20. század",
        lovers1: "Léda",
        lovers2: "Csinszka"
    },


]

const table = document.createElement("table")
document.body.appendChild(table)

const thead = document.createElement("thead")
table.appendChild(thead)

const tr = document.createElement("tr")
thead.appendChild(tr)

const th = document.createElement("th")
tr.appendChild(th)

const th2 = document.createElement("th")
tr.appendChild(th2)

const th3 = document.createElement("th")
tr.appendChild(th3)

th.innerText = "Szerző neve"
th2.innerText = "Korszak"
th3.innerText = "Szerelmek"

const tbody = document.createElement("tbody")
table.appendChild(tbody)

for (const i of arr){
    const row = document.createElement("tr");
    tbody.appendChild(row);

    const td1 = document.createElement("td");
    td1.innerText = i.writer;
    row.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerText = i.time;
    row.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerText = i.lovers1;
    row.appendChild(td3);

    if (i.lovers2 == undefined){
        td3.colSpan=2;
    } else{
        const td4 = document.createElement("td")
        td4.innerText = i.lovers2;
        row.appendChild(td4)
    }
}