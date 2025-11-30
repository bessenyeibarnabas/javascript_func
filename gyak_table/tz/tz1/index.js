const arr = [
    {
        telepules: "Athén",
        agazat: "politika",
        agazat2: "tudomány",
        pelda: "demokrácia",
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
        agazat2: "harcászat",
        pelda: "agogé",
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

for (const adat of fejlec){
    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = adat
}

const tbody = document.createElement("tbody")
table.appendChild(tbody)

for (const i of arr){
    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    const td1 = document.createElement("td")
    tr.appendChild(td1)
    td1.innerText = i.telepules

    const td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = i.agazat

    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td3.innerText = i.pelda

    if (i.agazat2){
        td1.rowSpan = "2"

        const tr = document.createElement("tr")
        tbody.appendChild(tr)

        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = i.agazat2

        const td5 = document.createElement("td")
        tr.appendChild(td5)
        td5.innerText = i.pelda2
    }
}

//checkbox
const checkbox = document.getElementById("tableselector")
const htmlDiv = document.getElementById("htmlsection")

function CheckboxChange(){
    if (checkbox.checked){
        htmlDiv.classList.add("hide")
        jsDiv.classList.remove("hide")
    }else{
        htmlDiv.classList.remove("hide")
        jsDiv.classList.add("hide")
    }
}
checkbox.addEventListener("change", CheckboxChange)
CheckboxChange();


//js form generator
function formGenerator (gyujt, txt, id, inpname){
    const div = document.createElement("div")
    gyujt.appendChild(div)

    generatorBr(div)

    const label = document.createElement("label")
    div.appendChild(label)
    label.htmlFor = id
    label.innerText = txt

    generatorBr(div)

    const input = document.createElement("input")
    div.appendChild(input)
    input.type = txt
    input.id = id
    input.name = inpname

    generatorBr(div)

    const span = document.createElement("span")
    div.appendChild(span)
    span.classList.add("error")

    generatorBr(div)

}

function generatorBr(gyujt){
    const br = document.createElement("br")
    gyujt.appendChild(br)
}

const form = document.createElement("form")
jsDiv.appendChild(form)
form.id = "jsform"

formGenerator(form,"Ókori település","elso","telepules")
formGenerator(form,"Ágazat1","masodik","agazat1")
formGenerator(form,"Példa1","harmadik","pelda1")
formGenerator(form,"Ágazat2","negyedik","agazat2")
formGenerator(form,"Példa2","otodik","pelda2")

const submit = document.createElement("input")
form.appendChild(submit)
submit.type = "submit"
submit.value = "hozzáad js"
