/**
 * @type {{telepules: string, agazat: string, pelda: string, agazat2?: string, pelda2?: string}[]}
 */
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
        pelda: "csatrornák",
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

const fejlec = ["Ókori település", "Ágazat", "Példa"]

const thead = document.createElement("thead")
table.appendChild(thead)

const tr = document.createElement("tr")
thead.appendChild(tr)

for (const i of fejlec){
    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = i
}

const tbody = document.createElement("tbody")
tbody.id = "jstbody" //jstbody is
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

const checkbox = document.getElementById("tableselector")
const htmlDiv = document.getElementById("htmlsection")

function CheckboxChange(){
    if (checkbox.checked) {
        htmlDiv.classList.add("hide")
        jsDiv.classList.remove("hide")
    } else {
        jsDiv.classList.add("hide")
        htmlDiv.classList.remove("hide")
    }
}

checkbox.addEventListener("change", CheckboxChange)
CheckboxChange();


//js form

function generateForm (parent, txt, id, inputname){
    const div = document.createElement("div")
    parent.appendChild(div)

    const label = document.createElement("label")
    div.appendChild(label)
    label.htmlFor = id
    label.innerText = txt

    generateBr(div)

    const input = document.createElement("input")
    div.appendChild(input)
    input.type = "text"
    input.id = id
    input.name = inputname

    generateBr(div)

    const span = document.createElement("span")
    div.appendChild(span)
    span.classList.add("hide")

    generateBr(div)

}

//sortörés
function generateBr (parent){
    const br = document.createElement("br")
    parent.appendChild(br)
}

//adatok
const form= document.createElement("form")
jsDiv.appendChild(form)
form.id="jsform" //jsform id

generateForm(form,"Ókori település","elso","telepules")
generateForm(form,"Ágazat1","masodik","agazat1")
generateForm(form,"Példa1","harmadik","pelda1")
generateForm(form,"Ágazat2","negyedik","agazat2")
generateForm(form,"Példa2","otodik","pelda2")

//button
const submit= document.createElement("input")
form.appendChild(submit)
submit.type="submit"
submit.value="Hozzáad_js"


//html table-hez add adatot
const htmlform = document.getElementById("htmlform")

htmlform.addEventListener("submit", function (e){
    e.preventDefault();

    const form = e.target

    //input id lekérés
    const telepules = form.querySelector("#elso")
    const agazat = form.querySelector("#masodik")
    const pelda = form.querySelector("#harmadik")
    const pelda2 = form.querySelector("#negyedik")

    let valid = true;
    const fields = [telepules, agazat, pelda];

    for (const input of fields) {
        const div = input.parentElement;
        const error = div.querySelector(".error");
        if (input.value === "") {
            error.innerText = "A mező kitöltése kötelező";
            valid = false;
        } else {
            error.innerText = "";
        }
    }

    if (!valid) return;

    //obj érték
    const obj = {
        telepules: telepules.value,
        agazat: agazat.value,
        pelda: pelda.value,
        pelda2: pelda2.value === "" ? undefined:pelda2.value,
    }

    const tbody = document.getElementById("htmlbody")

    const tr = document.createElement("tr")

    const td1 = document.createElement("td")
    td1.innerText = obj.telepules
    tr.appendChild(td1)

    const td2 = document.createElement("td")
    td2.innerText = obj.agazat
    tr.appendChild(td2)

    const td3 = document.createElement("td")
    td3.innerText = obj.pelda
    tr.appendChild(td3)

    if (obj.pelda2 == undefined){
        td3.colSpan = 2
    }else{
        const td4 = document.createElement("td")
        td4.innerText = obj.pelda2
        tr.appendChild(td4)
    }

    tbody.appendChild(tr)
    form.reset();
})

//js validáció
