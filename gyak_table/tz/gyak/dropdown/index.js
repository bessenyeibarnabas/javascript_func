const arr = [
    {
        telepules: "Athén",
        agazat: "politika",
        pelda1: "demokrácia",
    },

    {
        telepules: "Athén",
        agazat: "tudomány",
        pelda1: "filozófia",
    },

    {
        telepules: "Egyiptom",
        agazat: "mezőgazdaság",
        pelda1: "csatornák",
        pelda2: "gátak",
    },

    {
        telepules: "Spárta",
        agazat: "neveléstudomány",
        pelda1: "agogé",
    },

    {
        telepules: "Spárta",
        agazat: "harcászat",
        pelda1: "hoplita",
        pelda2: "phalanx",
    },

]

//-------------------------------------------------------------------------table js


const jsDiv = document.getElementById("jssection")

const table = document.createElement("table")
jsDiv.appendChild(table)

const thead = document.createElement("thead")
table.appendChild(thead)

const tr = document.createElement("tr")
thead.appendChild(tr)

const fejlec = ["Ókori település", "Ágazat", "Példa"]
for (const f of fejlec){
    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = f

    if(f === "Példa"){
        th.colSpan = "2"
    }
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
    td3.innerText = item.pelda1

    if (item.pelda2){
        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = item.pelda2

    } else{
        td3.colSpan = "2"
    }
        
    
}

//-------------------------------------------------------------------------dropdown
const selector = document.getElementById("tableselector")
const htmlDiv = document.getElementById("htmlsection")

function DropDownF (seles, htmles, jses){
    if(seles.value === "js"){
        htmles.classList.add("hide")
        jses.classList.remove("hide")
    } else{
        htmles.classList.remove("hide")
        jses.classList.add("hide")
    }

}
selector.addEventListener("change", function(){
    DropDownF(selector, htmlDiv, jsDiv)
})
DropDownF(selector, htmlDiv, jsDiv)
//-------------------------------------------------------------------------js form
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

//sortörés
function BrGen (parent){
    const br = document.createElement("br")
    parent.appendChild(br)
}

const form = document.createElement("form")
jsDiv.appendChild(form)
form.id = "jsform"

FormGen(form, "Ókori település", "elso", "telepules")
FormGen(form, "Ágazat", "masodik", "agazat")
FormGen(form, "Pélad1", "harmadik", "pelda1")
FormGen(form, "Pélad2", "negyedik", "pelda2")

//js button

const button = document.createElement("input")
form.appendChild(button)
button.type = "submit"
button.value = "Hozzáad js"