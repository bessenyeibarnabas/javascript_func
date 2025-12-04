const arr = [
    {
        telepules: "Athén",
        agazat: "politika",
        pelda: "demokracia",
        agazat2: "tudomany",
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

const fejlec = ["Ókori település", "Ágazat", "Példa"]
for (const f of fejlec){
    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = f
}

for (const item of arr){
    TableAdd(item)
}

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

    if (obj.agazat2 || obj.pelda2){
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

//-----------------------------------------------------------------checkbox
const selector = document.getElementById("tableselector")
const htmlDiv = document.getElementById("htmlsection")

function CheckBox (selectores, htmles, jses){
    if (selectores.checked){
        htmles.classList.add("hide")
        jses.classList.remove("hide")
    } else{
        htmles.classList.remove("hide")
        jses.classList.add("hide")
    }
}

selector.addEventListener("change", function(){
    CheckBox(selector, htmlDiv, jsDiv)
})

CheckBox(selector, htmlDiv, jsDiv);

//--------------------------------------js form

function FormCreat (parent, txt, id,inpname){
    const div = document.createElement("div")
    parent.appendChild(div)

    BrG(div)

    const label = document.createElement("label")
    div.appendChild(label)
    label.htmlFor = id
    label.innerText = txt

    BrG(div)

    const input = document.createElement("input")
    div.appendChild(input)
    input.type = "text"
    input.id = id
    input.name = inpname

    BrG(div)

    const span = document.createElement("span")
    div.appendChild(span)
    span.classList.add("error")

    BrG(div)
}

function BrG (parent){
    const br = document.createElement("br")
    parent.appendChild(br)
}

const formjs = document.createElement("form")
jsDiv.appendChild(formjs)
formjs.id = "jsform"

FormCreat(formjs, "Ókori település", "elso", "telepules")
FormCreat(formjs, "Agazats", "masodik", "agazat")
FormCreat(formjs, "Példa", "harmadik", "pelda")
FormCreat(formjs, "Agazat2", "negyedik", "agazat2")
FormCreat(formjs, "Példa2", "otodik", "pelda2")

const button = document.createElement("input")
formjs.appendChild(button)
button.type = "submit"
button.value = "hozaad"

//---------------------------------------------------közös validáció
function ValidAl (inputs){
    let valid = true
    for (const inp of inputs){
        const div =  inp.parentElement
        const span = div.querySelector(".error")

        if (inp.value === ""){
            span.innerText = "Kötelező"
            valid = false
        } else{
            span.innerText = ""
        }
    }
    return valid
}

//-------------------------------------------------hozzáad js
formjs.addEventListener("submit", function(e){
    e.preventDefault();

    const telepules = formjs.querySelector("#elso")
    const agazat = formjs.querySelector("#masodik")
    const pelda = formjs.querySelector("#harmadik")
    const agazat2 = formjs.querySelector("#negyedik")
    const pelda2 = formjs.querySelector("#otodik")

    if(!ValidAl([telepules, agazat, pelda])) return;

    const obj = {
        telepules: telepules.value,
        agazat: agazat.value,
        pelda: pelda.value,
        agazat2: agazat2.value !== "" ? agazat2.value : undefined,
        pelda2: pelda2.value !== "" ? pelda2.value : undefined,
    }

    TableAdd(obj);
    formjs.reset();
})

//----------------------------------------------------------hozzáad html + submit
const htmlform = document.getElementById("htmlform")
htmlform.addEventListener("submit", function(e){
    e.preventDefault();

    const telepules = htmlform.querySelector("#elso")
    const agazat = htmlform.querySelector("#masodik")
    const pelda = htmlform.querySelector("#harmadik")
    const pelda2 = htmlform.querySelector("#negyedik")

    if(!ValidAl([telepules, agazat, pelda])) return;

    const obj = {
        telepules: telepules.value,
        agazat: agazat.value,
        pelda: pelda.value,
        pelda2: pelda2.value !== "" ? pelda2.value : undefined,
    }

    

    const tbody = document.getElementById("htmlbody")
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

    if (!obj.pelda2){
        td3.colSpan = 2
    } else{

        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = obj.pelda2
    }

    htmlform.reset();
})


    



