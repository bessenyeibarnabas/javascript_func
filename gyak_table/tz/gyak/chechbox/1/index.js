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

const divJs = document.getElementById("jssection")

const table = document.createElement("table")
divJs.appendChild(table)

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
    AddtoJsTable(item)
}

function AddtoJsTable (obj){
    const tbody = document.createElement("tbody")
    table.appendChild(tbody)

    const tr1 = document.createElement("tr")
    tbody.appendChild(tr1)

    const td1 = document.createElement("td")
    tr1.appendChild(td1)
    td1.innerText = obj.telepules

    const td2 = document.createElement("td")
    tr1.appendChild(td2)
    td2.innerText = obj.agazat

    const td3 = document.createElement("td")
    tr1.appendChild(td3)
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

//-------------------------------------------------------------------CHECKBOX
const checkbox = document.getElementById("tableselector")
const divHtml = document.getElementById("htmlsection")

function CheckGen (checkboxos, divHtmles, divJses){
    if (checkboxos.checked){
        divHtmles.classList.add("hide")
        divJses.classList.remove("hide")
    } else{
        divHtmles.classList.remove("hide")
        divJses.classList.add("hide")
    }
}

checkbox.addEventListener("change", function (){
    CheckGen(checkbox, divHtml, divJs)
})

CheckGen(checkbox, divHtml, divJs);

//-------------------------------------------------------------------JS FORM

function GenForm (parent, id, txt, inpname){
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
    input.name = inpname

    BrGen(div)

    const span = document.createElement("span")
    div.appendChild(span)
    span.classList.add("error")

    BrGen(div)
}

function BrGen (parent){
    const br = document.createElement("br")
    parent.appendChild(br)
}

const form = document.createElement("form")
divJs.appendChild(form)
form.id = "jsform"

GenForm(form, "elso", "Ókori település", "telepules")
GenForm(form, "masodik", "Ágazats", "agazat")
GenForm(form, "harmadik", "Példa1", "pelda")
GenForm(form, "negyedik", "Ágazat2", "agazat2")
GenForm(form, "otodik", "Példa2", "pelda2")

const button = document.createElement("input")
form.appendChild(button)
button.type = "submit"
button.value = "Hozzáad js"

//-------------------------------------------------------------------közös validácio
function ValidKozos (inputs){
    let valid = true
    for (const inp of inputs){
        const div = inp.parentElement
        const span = div.querySelector("span")

        if(inp.value === ""){
            span.classList.remove("error")
            span.innerText = "Kötelező"
            valid = false
        } else{
            span.classList.add("error")
            span.innerText = ""
        }
    }

    return valid
}

//-------------------------------------------------------------------Js hozzáad
form.addEventListener("submit", function (e){
    e.preventDefault();

    const telepules = form.querySelector("#elso")
    const agazat = form.querySelector("#masodik")
    const pelda = form.querySelector("#harmadik")
    const agazat2 = form.querySelector("#negyedik")
    const pelda2 = form.querySelector("#otodik")

    if (!ValidKozos([telepules, agazat, pelda])) return;

    const obj = {
        telepules: telepules.value,
        agazat: agazat.value,
        pelda: pelda.value,
        agazat2: agazat2.value !== "" ? agazat2.value : undefined,
        pelda2: pelda2.value !== "" ? pelda2.value : undefined,
    };

    AddtoJsTable(obj);
    form.reset();
    
})

//-------------------------------------------------------------------Html table and submit
const htmlForm = document.getElementById("htmlform");
htmlForm.addEventListener("submit", function(e){
    e.preventDefault();

    const telepules = htmlForm.querySelector("#elso");
    const agazat = htmlForm.querySelector("#masodik");
    const pelda1 = htmlForm.querySelector("#harmadik");
    const pelda2 = htmlForm.querySelector("#negyedik");

    if (!ValidKozos([telepules, agazat, pelda1])) return;

    const obj = {
        telepules: telepules.value,
        agazat: agazat.value,
        pelda1: pelda1.value,
        pelda2: pelda2.value !== "" ? pelda2.value : undefined,
    };

    const tbody = document.getElementById("htmlbody");
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    const td1 = document.createElement("td");
    td1.innerText = obj.telepules;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerText = obj.agazat;
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerText = obj.pelda1;
    tr.appendChild(td3);

    if (!obj.pelda2) {
        td3.colSpan = 2;
    } else {
        const td4 = document.createElement("td");
        td4.innerText = obj.pelda2;
        tr.appendChild(td4);
    }

    htmlForm.reset();
});
