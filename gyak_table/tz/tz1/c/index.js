/**
 * @type {{telepules: string, agazat: string, pelda:string, agazat2?: string, pelda2?: string}[]}
 */
const arr = [
    {
        telepules: "Athén",
        agazat: "politika",
        pelda: "demokrácia",
        agazat2: "tudomány",
        pelda2: "filozófia",
    },

    {
        telepules: "Egyiptom",
        agazat: "mezőgazdaság",
        pelda: "csatornák",
    },

    {
        telepules: "Spárta",
        agazat: "neveléstudomány",
        pelda: "agogé",
        agazat2: "harcászat",
        pelda2: "hoplita",
    },
]

/**
 * const  = document.createElement("")
.appendChild()
 */

const jsDiv = document.getElementById("jssection")

const table = document.createElement("table")
jsDiv.appendChild(table)

const thead = document.createElement("thead")
table.appendChild(thead)

const tr = document.createElement("tr")
thead.appendChild(tr)

/**
 * @type {string[]}
 */
fejlec = ["Ókori település", "Ágazat", "Példa"]
for (const f of fejlec){
    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = f
}

for (const item of arr){
    TableAdd(item)
}


/**
 * ------------------------------------------------------table add
 * eme csodás function azért kell hogy tbody ban szereplő adatokat hozzárakja
 * @param {{telepules: string, agazat: string, pelda:string, agazat2?: string, pelda2?: string}[]} obj 
 */
function TableAdd (obj){
    const tbody = document.createElement("tbody")
    table.appendChild(tbody)

    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    const td1 = document.createElement("td")
    tr.appendChild(td1)
    td1.innerText = obj.telepules

    const td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = obj.agazat

    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td3.innerText = obj.pelda

    if(obj.agazat2 || obj.pelda2){
        td1.rowSpan = "2"

        const tr2 = document.createElement("tr")
        tbody.appendChild(tr2)

        const td4 = document.createElement("td")
        tr2.appendChild(td4)
        td4.innerText = obj.agazat2

        const td5 = document.createElement("td")
        tr2.appendChild(td5)
        td5.innerText = obj.pelda2
    }
}

//---------------------------------------------checkbox
const selector = document.getElementById("tableselector")
const htmlDiv = document.getElementById("htmlsection")

/**
 * html js table megjelenítés elrejtése
 * @param {HTMLInputElement} selectoros 
 * @param {HTMLElement} htmles 
 * @param {HTMLElement} jses 
 * @returns {void}
 */
function CheckBox (selectoros, htmles, jses){
    if(selectoros.checked){
        htmles.classList.add("hide")
        jses.classList.remove("hide")
    }else{
        htmles.classList.remove("hide")
        jses.classList.add("hide")
    }
}

selector.addEventListener("change", function(){
    CheckBox(selector, htmlDiv, jsDiv)
})
CheckBox(selector, htmlDiv, jsDiv)

//---------------------------------------------js form
/**
 * 
 * @param {HTMLElement} parent 
 * @param {string} txt 
 * @param {string} id 
 * @param {string} inputname 
 * @returns {void}
 */
function FormGen (parent, txt, id, inputname){
    const div = document.createElement("div")
    parent.appendChild(div)

    BrGen(div)

    const label = document.createElement("label")
    div.appendChild(label)
    label.htmlFor = id
    label.innerText = txt

    BrGen(div)

    const input = document.createElement("input")
    div.appendChild(input)
    input.type = "text"
    input.id = id
    input.name = inputname

    BrGen(div)

    const span = document.createElement("span")
    div.appendChild(span)
    span.classList.add("error")

    BrGen(div)

}
/**
 * 
 * @param {HTMLElement} parent 
 * @returns {void}
 */
function BrGen (parent){
    const br = document.createElement("br")
    parent.appendChild(br)
}

const formjs = document.createElement("form")
jsDiv.appendChild(formjs)
formjs.id = "jsform"

FormGen(formjs, "Ókori település", "elso", "telepules")
FormGen(formjs, "Ágazats", "masodik", "agazat")
FormGen(formjs, "Példa", "harmadik", "pelda")
FormGen(formjs, "Ágazat2", "negyedik", "agazat2")
FormGen(formjs, "Példa2", "otodik", "pelda2")

const button = document.createElement("input")
formjs.appendChild(button)
button.type = "submit"
button.value = "Hozzáad js"

//--------------------------------------------------------közös valid
/**
 * 
 * @param {HTMLInputElement[]} inputs 
 * @returns {boolean}
 */
function ValidAl (inputs){
    let valid = true
    for (const inp of inputs){
        const div = inp.parentElement
        const span = div.querySelector(".error")

        if(inp.value === ""){
            span.innerText = "Kötelező"
            valid = false
        }else{
            span.innerText = ""
        }
    }
    return valid
}

//---------------------------------------------------js hozzáad
formjs.addEventListener("submit", function(e){
    e.preventDefault();

    const telepules = formjs.querySelector("#elso")
    const agazat = formjs.querySelector("#masodik")
    const pelda = formjs.querySelector("#harmadik")
    const agazat2 = formjs.querySelector("#negyedik")
    const pelda2 = jsform.querySelector("#otodik")

    if(!ValidAl([telepules, agazat, pelda])) return
    /**
     * @type {{telepules:string, agazat: string, pelda: string, agazat2?:string, pelda2?: string}}
     */
    const obj = {
        telepules: telepules.value,
        agazat: agazat.value,
        pelda: pelda.value,
        agazat2: agazat2.value !== "" ? agazat2.value : undefined,
        pelda2: pelda2.value !== "" ? pelda2.value : undefined,
    }

    TableAdd(obj);
    formjs.reset()
})

//--------------------------------------------html hozzáad valid
const htmlform = document.getElementById("htmlform")
htmlform.addEventListener("submit", function(e){
    e.preventDefault();

    const telepules = htmlform.querySelector("#elso")
    const agazat = htmlform.querySelector("#masodik")
    const pelda = htmlform.querySelector("#harmadik")
    const pelda2 = htmlform.querySelector("#negyedik")

    if(!ValidAl([telepules, agazat, pelda])) return

    /**
     * @type {{telepules:string, agazat: string, pelda: string, pelda2?: string}}
     */
    const obj2 = {
        telepules: telepules.value,
        agazat: agazat.value,
        pelda: pelda.value,
        pelda2: pelda2.value !== "" ? pelda2.value : undefined,
    }

    const tbody = document.getElementById("htmltbody")
    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    const td1 = document.createElement("td")
    tr.appendChild(td1)
    td1.innerText = obj2.telepules

    const td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = obj2.agazat

    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td3.innerText = obj2.pelda

    if(obj2.pelda2){
        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = obj2.pelda2
    }else{
        td3.colSpan = "2"
    }

    htmlform.reset()
})