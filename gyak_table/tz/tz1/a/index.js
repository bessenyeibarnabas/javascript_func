const arr = [
    {
        telepules: "Athén",
        agazat: "politika",
        pelda: "demokrácia",
        agazat2: "tudmány",
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

fejlec = ["Ókori település", "Ágazat", "Példa"]
for (const f of fejlec){
    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = f
}

for (const item of arr){
    TableGen(item)
}

function TableGen (obj){
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

//---------------------------------------------------checkbox
const selector = document.getElementById("tableselector")
const htmlDiv = document.getElementById("htmlsection")

function CheckBox (selectoros, htmles, jses) {
    if(selectoros.checked){
        htmles.classList.add("hide")
        jses.classList.remove("hide")
    }else{
        htmles.classList.remove("hide")
        jses.classList.add("hide")
    }
}

selector.addEventListener("change", function(){
    CheckBox(selector, htmlDiv, jsDiv);
})
CheckBox(selector, htmlDiv, jsDiv);

//---------------------------------------------------js form
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

function BrGen (parent){
    const br = document.createElement("br")
    parent.appendChild(br)
}

const formjs = document.createElement("form")
jsDiv.appendChild(formjs)
formjs.id = "jsform"

FormGen(formjs, "Ókori település", "elso", "telepules")
FormGen(formjs, "Ágazat", "masodik", "agazat")
FormGen(formjs, "Példa", "harmadik", "pelda")
FormGen(formjs, "Ágazat 2", "negyedik", "agazat2")
FormGen(formjs, "Példa 2", "otodik", "pelda2")

const button = document.createElement("input")
formjs.appendChild(button)
button.type = "submit"
button.value = "Hozzáad js"

//---------------------------------------------------közös valid

function Validalunk (inputs){
    let valid = true
    for(const inp of inputs){
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

//---------------------------------------------------js add
formjs.addEventListener ("submit", function(e){
    e.preventDefault();

    const telepules = formjs.querySelector("#elso")
    const agazat = formjs.querySelector("#masodik")
    const pelda = formjs.querySelector("#harmadik")
    const agazat2 = formjs.querySelector("#negyedik")
    const pelda2 = formjs.querySelector("#otodik")

    if(!Validalunk([telepules, agazat, pelda])) return;

    obj = {
        telepules: telepules.value,
        agazat: agazat.value,
        pelda: pelda.value,
        agazat2: agazat2.value !== "" ? agazat2.value : undefined,
        pelda2: pelda2.value !== "" ? pelda2.value : undefined,
    }

    TableGen(obj);
    formjs.reset();
})

//---------------------------------------------------html table and add
const formhtml = document.getElementById("htmlform")
formhtml.addEventListener ("submit", function(e){
    e.preventDefault();

    const telepules = formhtml.querySelector("#elso")
    const agazat = formhtml.querySelector("#masodik")
    const pelda = formhtml.querySelector("#harmadik")
    const pelda2 = formhtml.querySelector("#negyedik")

    if(!Validalunk([telepules, agazat, pelda])) return;

    obj2 = {
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
    }else {
        td3.colSpan = "2"
    }


    formhtml.reset();
})