const arr = [
    {
        telepules: "Athén",
        agazat: "politika",
        pelda: "demokrácia",
    },

    {
        telepules: "Athén",
        agazat: "tudomány",
        pelda: "filozófia",
    },

    {
        telepules: "Egyiptom",
        agazat: "mezőgazdaság",
        pelda: "csatornák",
        pelda2: "gátak",
    },

    {
        telepules: "Spárta",
        agazat: "neveléstudomány",
        pelda: "agogé",
    },

    {
        telepules: "Spárta",
        agazat: "harcászat",
        pelda: "hoplita",
        pelda2: "phalanx",
    },

]

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

    if (obj.pelda2){
        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = obj.pelda2

    }else{
        td3.colSpan = "2"
        }
}


//-------------------------------------menu
const selector = document.getElementById("tableselector")
const htmlDiv = document.getElementById("htmlsection")

function DropDown (selectes, htmles, jses) {
    if(selectes.value === "js"){
        htmles.classList.add("hide")
        jses.classList.remove("hide")
    } else{
        htmles.classList.remove("hide")
        jses.classList.add("hide")
    }
}

selector.addEventListener("change", function(){
    DropDown(selector, htmlDiv, jsDiv)
})
DropDown(selector, htmlDiv, jsDiv);

//-------------------------------------jsform
function FormGener (parent, txt, id, inpname){
    const div = document.createElement("div")
    parent.appendChild(div)

    BrGener(div)

    const label = document.createElement("label")
    div.appendChild(label)
    label.htmlFor = id
    label.innerText = txt

    BrGener(div)

    const input = document.createElement("input")
    div.appendChild(input)
    input.type = "text"
    input.name = inpname
    input.id = id

    BrGener(div)

    const span = document.createElement("span")
    div.appendChild(span)
    span.classList.add("error")

    BrGener(div)
}

function BrGener (parent){
    const br = document.createElement("br")
    parent.appendChild(br)
}

const formjs = document.createElement("form")
jsDiv.appendChild(formjs)
formjs.id = "jsform"

FormGener(formjs, "Ókori település", "elso", "telepules")
FormGener(formjs, "Agazat", "masodik", "agazat")
FormGener(formjs, "Pelda1", "harmadik", "pelda")
FormGener(formjs, "Pelda2", "negyedik", "pelda2")

// js button
const button = document.createElement("input")
formjs.appendChild(button)
button.type = "submit"
button.value = "Hozzáad js"

//-----------------------------------------------közös valid
function KozosValid(inputs) {
    let valid = true;

    for (const inp of inputs) {
        const div = inp.parentElement;
        const span = div.querySelector(".error");

        if (inp.value === "") {
            span.innerText = "kötelező";
            valid = false;
        } else {
            span.innerText = "";
        }
    }

    return valid;
}


//----------------------------------------js hozzaad
formjs.addEventListener("submit", function(e){
    e.preventDefault();

    const telepules = formjs.querySelector("#elso")
    const agazat = formjs.querySelector("#masodik")
    const pelda = formjs.querySelector("#harmadik")
    const pelda2 = formjs.querySelector("#negyedik")

    if(!KozosValid([telepules, agazat, pelda])) return;

    const obj = {
        telepules: telepules.value,
        agazat: agazat.value,
        pelda: pelda.value,
        pelda2: pelda2.value !== "" ? pelda2.value : undefined,
    }

    TableAdd(obj);
    formjs.reset();
})

//-------------------------------------------------------------------Html table and submit
const htmlForm = document.getElementById("htmlform");
htmlForm.addEventListener("submit", function(e){
    e.preventDefault();

    const telepules = htmlForm.querySelector("#elso");
    const agazat = htmlForm.querySelector("#masodik");
    const pelda1 = htmlForm.querySelector("#harmadik");
    const agazat2 = htmlForm.querySelector("#negyedik");
    const pelda2 = htmlForm.querySelector("#otodik");

    if (!KozosValid([telepules, agazat, pelda1])) return;

    const obj = {
        telepules: telepules.value,
        agazat: agazat.value,
        pelda1: pelda1.value,
        agazat2: agazat2.value !== "" ? agazat2.value : undefined,
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

    if (obj.agazat2 || obj.pelda2) {
        td1.rowSpan = 2;

        const tr2 = document.createElement("tr")
        tbody.appendChild(tr2)

        const td4 = document.createElement("td");
        td4.innerText = obj.agazat2;
        tr2.appendChild(td4);

        const td5 = document.createElement("td");
        td5.innerText = obj.pelda2;
        tr2.appendChild(td5);
    }

    htmlForm.reset();
});