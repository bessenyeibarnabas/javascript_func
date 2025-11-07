/**
 * @type {{author:string, era:string, love1:string, love2:string}[]}
 */
const arr = [
    {
        author: "Balassi Bálint",
        era: "reformáció",
        love1: "Losonczy Anna",
        love2: "Dobó Krisztina"
    },
    {
        author: "Csokonai Vitéz Mihály",
        era: "felvilágosodás",
        love1: "Vajda Juliána",
    },
    {
        author: "Petőfi Sándor",
        era: "magyar romantika",
        love1: "Mednyánszky Berta",
        love2: "Szendrey Júlia"
    },
    {
        author: "Ady Endre",
        era: "20. század",
        love1: "Léda",
        love2: "Csinszka"
    }
]


/*const table = document.createElement("table")
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
>>>>>>> dce52bcabf0342c713bd9393a28a0b0d06622926
table.appendChild(tbody)
 
for(let i = 0; i < arr.length; i++){
    const tr = document.createElement("tr");
 
    createCell("td", arr[i].author, tr)
    createCell("td", arr[i].era, tr)
    const builtDifferent2 = createCell("td", arr[i].love1, tr)
 
    if(!arr[i].love2){
        builtDifferent2.colSpan = 2;
    }
}*/

 
const table = document.createElement("table");
document.body.appendChild(table);
 
const thead = document.createElement("thead");
const tr = document.createElement("tr");
 
table.appendChild(thead);
thead.appendChild(tr);
 
createCell("th", "Szerzők", tr);
createCell("th", "Korszak", tr);
const sz_d = createCell("th", "Szerelmek", tr)
 
sz_d.colSpan = 2;
 
const tbody = document.createElement("tbody");
 
table.appendChild(tbody)
 
for(let i = 0; i < arr.length; i++){
    const tr = document.createElement("tr");
 
    createCell("td", arr[i].author, tr)
    createCell("td", arr[i].era, tr)
    const sz_d2 = createCell("td", arr[i].lover1, tr)
 
    if(!arr[i].lover2){
        sz_d2.colSpan = 2;
    }
    else{
        createCell("td", arr[i].lover2, tr)
    }
 
    tbody.appendChild(tr);
}
 
/**
 *
 * @param {string} cellType Lehet "th" vagy "td"
 * @param {string} cellContent A cella tartalma
 * @param {HTMLTableRowElement} parentRow A sor amihez hozzáadunk
 *
 * @returns {HTMLTableCellElement} //Visszatérünk a létrehozott cella elementtel, hogy később tudjuk módosítani a tulajdonságait
 */
function createCell(cellType, cellContent, parentRow){
    const cella = document.createElement(cellType);
    cella.innerText = cellContent;
    parentRow.appendChild(cella);
    return cella;
}