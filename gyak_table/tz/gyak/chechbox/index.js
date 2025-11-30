const arr = [
    {
        telepules: "Athén",
        agazat: "politika",
        pelda: "demokracia",
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

const jsDiv = document.getElementById("jssection")

const table = document.createElement("table")
jsDiv.appendChild(table)

fejlec = ["Ókori település", "Ágazat", "Példa"]

const thead = document.createElement("thead")
table.appendChild(thead)

const tr = document.createElement("tr")
thead.appendChild(tr)

for (const f of fejlec){
    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = f
}

const tbody = document.createElement("tbody")
table.appendChild(tbody)

for (const item of arr){
    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    const td1 = document.createElement("td")
    tr.appendChild(td1)
    td1.innerText = item.telepules

    const td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = item.agazat

    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td3.innerText = item.pelda

    if (item.agazat2){
        td1.rowSpan = "2"

        const tr = document.createElement("tr")
        tbody.appendChild(tr)

        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = item.agazat2

        const td5 = document.createElement("td")
        tr.appendChild(td5)
        td5.innerText = item.pelda2
    }
}

/**
 * ---------------------------------------------------------------Checkbox
 */


const checkbox = document.getElementById("tableselector")
const htmlDiv = document.getElementById("htmlsection")

checkbox.addEventListener("change", function(){
    CheckboxPi(checkbox, htmlDiv, jsDiv)
})
/**
 * 
 * @param {HTMLInputElement} checkboxos 
 * @param {HTMLElement} htmlDives 
 * @param {HTMLElement} jsDives 
 * @returns {void}
 */
function CheckboxPi (checkboxos, htmlDives, jsDives){
    if (checkboxos.checked){
        htmlDives.classList.add("hide")
        jsDives.classList.remove("hide")
    } else{
        htmlDives.classList.remove("hide")
        jsDives.classList.add("hide")
    }
}


CheckboxPi(checkbox, htmlDiv, jsDiv)
/**
 * ---------------------------------------------------------------js form
 */

function FormKeszit (parent, txt, id, inpname){
    const div = document.createElement("div")
    parent.appendChild(div)

    const label = document.createElement("label")
    div.appendChild(label)
    label.htmlFor = "elso"
    label.innerText = txt
    BrKeszit(div)

    const input = document.createElement("input")
    div.appendChild(input)
    input.type = "text"
    input.name = inpname
    input.id = id
    BrKeszit(div)

    const span = document.createElement("span")
    div.appendChild(span)
    span.classList.add("error")
    BrKeszit(div)
}

//sortores br
function BrKeszit (parent){
    const br = document.createElement("br")
    parent.appendChild(br)
}

//adatok feltöltése

const form = document.createElement("form")
jsDiv.appendChild(form)
form.id = "jsform"

FormKeszit(form, "Ókori település", "elso", "telepules")
FormKeszit(form, "Ágazat1", "masodik", "agazat1")
FormKeszit(form, "Példa1", "harmadik", "pelda1")
FormKeszit(form, "Ágazat2", "negyedik", "agazat2")
FormKeszit(form, "Példa2", "otodik", "pelda2")

//button js form-hoz

const button = document.createElement("input")
form.appendChild(button)
button.type = "submit"
button.value = "Hozzáad js"