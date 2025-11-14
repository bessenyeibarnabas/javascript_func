/**
 * @typedef {{nationality:string, name1:string, work1:string, name2?:string, work2?:string} CountryWriters}
 */
 
 /**
 * órai-----------------------------2025_11_14
 * 
 * Doga
 * -html table, ahoz js table és js form(append +sor ) majd frissíti a table-t
 */

//Összes func 

/**
 *
 * @param {HTMLFormElement} form
 * @param {string} id
 * @param {string} labelText
 */
function createField(form, id, labelText) {
    const div = document.createElement("div");
 
    const label = document.createElement("label");
    label.htmlFor = id;
    label.innerText = labelText;
    div.appendChild(label);
    form.appendChild(document.createElement("br"));
 
    const input = document.createElement("input");
    input.type = "text";
    input.id = id;
    input.name = id;
    div.appendChild(input);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
 
    form.appendChild(div);
 
    const span = document.createElement("span");
    span.classList.add("error");
 
    div.appendChild(span);
}
 
/**
 *
 * @param {CountryWriters[]} array
 */
function renderTableBody(array){
    const tbodyCsere = document.getElementById("tbody");
    tbody.innerHTML = "";
 
    for(const obj of array){
        renderTableRow(tbodyCsere, obj)
    }
}
 
 
/**
 *
 * @param {HTMLTableSectionElement} tableBody
 * @param {CountryWriters} writerRow
 */
function renderTableRow(tableBody, writerRow){
    const tr = document.createElement("tr");
    tableBody.appendChild(tr);
   
    const td1 = createTableCell("td", writerRow.nationality, tr)
    createTableCell("td", writerRow.name1, tr)
    createTableCell("td", writerRow.work1, tr)
    /**
     * @type {HTMLTableCellElement}
     */
    td1.addEventListener("click", function (e){
        const target = e.target;
        const parentRow = target.parentElement;
        const tbodyOrigin = parentRow.parentElement;
   
        const markedCell = tbodyOrigin.querySelector(".marked");
   
        if (markedCell !== null) {
            markedCell.classList.remove("marked");
        }
        target.classList.add("marked");
    })
     
    if(writerRow.name2 && writerRow.work2){
        td1.rowSpan = "2";
   
        const tr = document.createElement("tr");
        tableBody.appendChild(tr);
   
        createTableCell("td", writerRow.name2, tr)
   
        createTableCell("td", writerRow.work2, tr)
    }
}
 
/**
 *
 * @param {"th" | "td"} cellType
 * @param {string} cellContent
 * @param {HTMLTableSectionElement} parentRow
 */
function createTableCell(cellType, cellContent, parentRow){
    const cella = document.createElement(cellType);
    cella.innerText = cellContent;
    parentRow.appendChild(cella);
    return cella;
}
 
/**
 *
 * @param {HTMLElement} table
 * @param {string[]} headerList
 */
function generateHeader(table, headerList){
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    table.appendChild(thead);
    thead.appendChild(tr);
 
    for(const item of headerList){
        createTableCell("th", item, tr);
    }
}
 
/**
 *
 * @param {Event} e
 */
function htmlEvenListener(e){
    e.preventDefault();
 
    /**
     * @type {HTMLFormElement}
     */
    const val = e.target;
 
 
    /**
     * @type {HTMLInputElement}
     */
    const nemzetiseg = val.querySelector("#nemzetiseg");
    /**
     * @type {string}
     */
    const nemzetisegValue = nemzetiseg.value;
 
    /**
     * @type {HTMLInputElement}
     */
    const szerzo1 = val.querySelector("#szerzo1");
    /**
     * @type {string}
     */
    const szerzo1Value = szerzo1.value;
 
    /**
     * @type {HTMLInputElement}
     */
    const mu1 = val.querySelector("#mu1");
    /**
     * @type {string}
     */
    const mu1Value = mu1.value;
 
    /**
     * @type {HTMLInputElement}
     */
    const szerzo2 = val.querySelector("#szerzo2");
    /**
     * @type {string}
     */
    const szerzo2Value = szerzo2.value;
 
    /**
     * @type {HTMLInputElement}
     */
    const mu2 = val.querySelector("#mu2");
    /**
     * @type {string}
     */
    const mu2Value = mu2.value;
 
    /**
     * @type {CountryWriters}
     */
    const obj = {};
    obj.nationality = nemzetisegValue;
    obj.name1 = szerzo1Value;
    obj.work1 = mu1Value;
    obj.name2 = szerzo2Value;
    obj.work2 = mu2Value;
 
    const povmat = document.getElementById("matung");
       
    renderTableRow(povmat, obj);
}