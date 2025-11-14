


const arr = [
    {
        nationality: "Orosz",
        name1: "Gogol",
        work1: "A köpönyeg",
        name2: "Csehov",
        work2: "A csinovnyik halála"
    },
    {
        nationality: "Cseh",
        name1: "Franz Kafka",
        work1: "Az átváltozás",
    },
    {
        nationality: "Magyar",
        name1: "Örkény István",
        work1: "Egyperces novellák",
        name2: "József Attila",
        work2: "Klárisok"
    },
    {
        nationality: 'Svájc',
        name1: 'Friedrich Dürrenmatt',
        work1: 'A fizikusok',
    }
]
 
const table = document.createElement("table")
document.body.appendChild(table)
 
const tomb = ["Nemzetiség", "Szerző", "Mű"]
 
const thead = document.createElement("thead")
const tr = document.createElement("tr")
table.appendChild(thead)
thead.appendChild(tr)
 
for(const item of tomb){
    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = item
}
 
const tbody = document.createElement("tbody")
tbody.id = "tbody"
table.appendChild(tbody)
 
/**
 * @param {{nationality:string, name1:string, work1:string, name2?:string, work2?:string}[]}
 */
function renderTableBody(array){
    const tbodyCsere = document.getElementById("tbody");
    tbody.innerHTML = "";
 
    for(const obj of array){
        renderTableRow(tbodyCsere, obj)
    }
}
renderTableBody(arr);
 
 
//html Form
 
/**
 * @type {HTMLFormElement}
 */
const bicus = document.getElementById("htmlform");
bicus.addEventListener("submit",
    function (e){
 
        const povmat = document.getElementById("tbody_t");
       
 
        htmlEventListener(povmat, obj)
    }
)
 
 
//js Form
 
/**
 *
 * @param {HTMLFormElement} form
 * @param {string} id
 * @param {string} labelText
 */
function createField(form, id, labelText) {
    const label = document.createElement("label")
    label.htmlFor = id
    label.innerText = labelText
    form.appendChild(label)
    form.appendChild(document.createElement("br"))
 
    const input = document.createElement("input");
    input.type = "text"
    input.id = id
    input.name = id
    form.appendChild(input)
    form.appendChild(document.createElement("br"))
    form.appendChild(document.createElement("br"))
}
 
const form = document.createElement("form")
form.id = "js_form"
 
createField(form, "nemzetiseg", "Nemzetiség:")
createField(form, "szerzo1", "Szerző:")
createField(form, "mu1", "Mű:")
createField(form, "szerzo2", "Másik szerző:")
createField(form, "mu2", "Mű:")
 
const button = document.createElement("button")
button.innerText = "Hozzáadás_js"
form.appendChild(button)
 
document.body.appendChild(form)
 
js_form.addEventListener("submit",
    function (e){
        e.preventDefault()
 
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
        const obj = {}
        obj.nationality = nemzetisegValue
        obj.name1 = szerzo1Value
        obj.work1 = mu1Value
        obj.name2 = szerzo2Value
        obj.work2 = mu2Value
 
        arr.push(obj);
        renderTableBody(arr)
    }
)

/**
 * órai-----------------------------2025_11_14
 * 
 * Doga
 * -html table, ahoz js table és js form(append +sor ) majd frissíti a table-t
 */

