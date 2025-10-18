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
];
 
const table = document.createElement("table");
document.body.appendChild(table);
 
//Thead
const thead = document.createElement("thead");
const tr = document.createElement("tr");
 
table.appendChild(thead);
thead.appendChild(tr);
 
createCell("th", "Szerzők", tr);
createCell("th", "Korszak", tr);
const builtDifferent1 = createCell("th", "Szerelmek", tr)
 
builtDifferent1.colSpan = 2;
 
//Tbody
const tbody = document.createElement("tbody");
 
table.appendChild(tbody)
 
for(let i = 0; i < arr.length; i++){
    const tr = document.createElement("tr");
 
    createCell("td", arr[i].author, tr)
    createCell("td", arr[i].era, tr)
    const builtDifferent2 = createCell("td", arr[i].love1, tr)
 
    if(!arr[i].love2){
        builtDifferent2.colSpan = 2;
    }
    else{
        createCell("td", arr[i].love2, tr)
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