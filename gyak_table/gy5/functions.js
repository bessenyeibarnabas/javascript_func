/**
 * @typedef {{szerzo: string, korszak: string, szerelem1: string, szerelem2?: string} MagyarKoltok}
 */


/**
 * 
 * @param {th, td} cellType 
 * @param {string} cellContent 
 * @param {*HTMLTableSectionElement} parentCol 
 */
function createTableCell(cellType, cellContent, parentCol){
    const cella = document.createElement(cellType)
    cella.innerText = cellContent
    parentCol.appendChild(cella)
    return cella
}

function generateHeader(table, fejlec){
    const thead = document.createElement("thead")
    table.appendChild(thead)
    const tr = document.createElement("tr")
    thead.appendChild(tr)
    
    for (const i of fejlec){
        const th = createTableCell("th", i, tr)
        if (i == "Szerelmek") {
            th.colSpan = "2"
        }
    }
}

/**
 * 
 * @param {HTMLTableSectionElement} tableBody 
 * @param {MagyarKoltok} tableRow 
 */
function renderTableRow(tableBody, tableRow){
    const tr = document.createElement("tr")
    tableBody.appendChild(tr)

    createTableCell("td", tableRow.szerzo, tr)
    createTableCell("td", tableRow.korszak, tr)

    if (tableRow.szerelem2){
        createTableCell("td", tableRow.szerelem1, tr)
        createTableCell("td", tableRow.szerelem2?? "", tr)
    }else{
        const td = createTableCell("td", tableRow.szerelem1, tr)
        td.colSpan = "2"
    }

}

/**
 * 
 * @param {MagyarKoltok} array 
 */
function renderTableBody(array){
    const tbody = document.getElementById("tbody")
    tbody.innerHTML = ""

    for (const obj of array){
        renderTableRow(tbody, obj)
    }
}