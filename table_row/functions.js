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
    div.appendChild(document.createElement("br"));

    const input = document.createElement("input");
    input.type = "text";
    input.id = id;
    input.name = id;

    div.appendChild(input);
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
    tbodyCsere.innerHTML = "";
 
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
function htmlEventListener(e){
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
     * @type {HTMLInputElement}
     */
    const szerzo1 = val.querySelector("#szerzo1");
 
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


    if(validateFields(nemzetiseg, szerzo1, mu1, "htmlform")){
            /**
             * @type {string}
             */
            const nemzetisegValue = nemzetiseg.value;
            /**
             * @type {string}
             */
            const szerzo1Value = szerzo1.value;
            /**
             * @type {string}
             */
            const mu1Value = mu1.value;
            /**
             * @type {string}
             */
            const szerzo2Value = szerzo2.value;
            /**
             * @type {string}
             */
            const mu2Value = mu2.value


            /**
             * @type {CountryWriters}
             */
            const obj = {};
            obj.nationality = nemzetisegValue;
            obj.name1 = szerzo1Value;
            obj.work1 = mu1Value;
            obj.name2 = szerzo2Value !== "" ? szerzo2Value : undefined;
            obj.work2 = mu2Value !== "" ? mu2Value : undefined;

            const povmat = document.getElementById("tbody_t");
            renderTableRow(povmat, obj);
            bicus.reset();

        }
}
/**
 * 
 * @param {string} id 
 * @param {FormField[]} tomb
 * 
 * @returns {HTMLFormElement}
 */
function createForm(formId, tomb){
    const form = document.createElement("form");
    form.id = formId;
    tbody.appendChild(form);

    for (const item of tomb){
        createField(form, item.id, item.label)
    }

    form.appendChild(document.createElement("br"));

    const button = document.createElement("button");
    button.type = "submit";
    button.innerText = "Hozzáadás";
    form.appendChild(button);

    return form;
}

/**
 * 
 * @param {string[]} tomb 
 * @param {string} tbodyId 
 */
function generateTable(tomb, tbodyId){
    const table = document.createElement("table");
    document.body.appendChild(table);

    generateHeader(table, tomb);

    const tbody = document.createElement("tbody");
    tbody.id = tbodyId;
    table.appendChild(tbody);
}

/**
 * 
 * @param {HTMLInputElement} input1 
 * @param {HTMLInputElement} input2 
 * @param {HTMLInputElement} input3
 * @param {string} formId 
 * 
 * @returns {boolean} 
 */
function validateFields(input1, input2, input3, formId){
    let boolean = true;

    const form = document.getElementById(formId);
    const lista = form.querySelectorAll(".error");
    for (const item of lista){
        item.innerText = "";
    }

    if(input1.value == ""){
        const div = input1.parentElement;
        const span = div.querySelector(".error");
        span.innerText = "A mező kitöltése kötelező";
        boolean = false;
    }

    if(!validateField(input2, "A mező kitöltése kötelező")){
        boolean = false;
    }

    if(!validateField(input3, "A mező kitöltése kötelező")){
        boolean = false;
    }

    return boolean;
}

/**
 * 
 * @param {HTMLInputField} input
 * @param {string} message 
 * 
 * @returns {boolean} 
 */
function validateField(input, message){
    let boolean = true;
    if(input.value == ""){
        const div = input.parentElement;
        const span = div.querySelector(".error");
        span.innerText = message;
        boolean = false;
    }
    return boolean;
}