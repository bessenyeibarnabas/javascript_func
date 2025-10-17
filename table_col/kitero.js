// console.log("gomszab a kedvenc tanárom")
// const a = "szia"
// /**
//  * @type{string}
//  */
// console.log(a)

// const b = ["a","b","c"]
// console.log(b)
// for(let i=0;i<b.length;i++){
//     console.log(b[i])
// }
// console.log(b[1])

// /** 
//  * while()
//  * 
//  * do
//  * while()
// */
// for(const key in b){
 
// }

// for(const key in b){
//     console.log(`${key}:${b[key]}$`)
// }

// /**@type{{name:string, age:number}} */

// const y ={
//     name:'bence',
//     age:17
// }

/**
 * @type {{author: string, era: string, lover1: string, lover2?: string}[]}
 */
const arr = [
    {
        author: 'Balassi Bálint',
        era: 'reformáció',
        lover1: 'Losonczy Anna',
        lover2: 'Dobó Krisztina'
    },
    {
        author: 'Csokonai Vitéz Mihály',
        era: 'felvilágosodás',
        lover1: 'Vajda Juliána'
    },
    {
        author: 'Petőfi Sándor',
        era: 'magyar romantika',
        lover1: 'Mednyánszky Berta',
        lover2: 'Szendrey Júlia'
    },
    {
        author: 'Ady Endre',
        era: '20. század',
        lover1: 'Léda',
        lover2: 'Csinszka'
    }
]


const table = document.createElement("table")
document.body.appendChild(table)


const thead = document.createElement("thead")
table.appendChild(thead)

const trHead = document.createElement("tr")
thead.appendChild(trHead)

const th1 = document.createElement("th")
trHead.appendChild(th1)
th1.innerText = "Szerző neve"

const th2 = document.createElement("th")
trHead.appendChild(th2)
th2.innerText = "Korszak"

const th3 = document.createElement("th")
trHead.appendChild(th3)
th3.innerText = "Szerelmek"
th3.colSpan = 2


const tbody = document.createElement("tbody")
table.appendChild(tbody)


for (const elem of arr) {
    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    const td1 = document.createElement("td")
    tr.appendChild(td1)
    td1.innerText = elem.author

    const td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = elem.era

    if (typeof elem.lover2 === "undefined") {
        const td3 = document.createElement("td")
        tr.appendChild(td3)
        td3.innerText = elem.lover1
        td3.colSpan = 2
    } else {
        const td3 = document.createElement("td")
        tr.appendChild(td3)
        td3.innerText = elem.lover1

        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = elem.lover2
    }
}

/**
 * 
 * @param {string} celltype //td vagy th mert válltozik
 * @param {string} cellcontent -beállítjuk a cellcontent-et
 * @param {HTMLTableRowElement} parento -hozzáfűzűnk egy sort
 */
function createcell(celltype,cellcontent,parento){
    cella
}