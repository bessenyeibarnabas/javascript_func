/**
 * @type {{telepules: string, agazat: string, pelda: string, agazat2?: string, pelda2?: string}[]}
 * Js table adatainak tárolása.
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

/**
 * @type {string}
 * arr
 */
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

/**
 * @type {HTMLInputElement}
 */
const checkbox = document.getElementById("tableselector")
/**
 * @type {HTMLInputElement}
 */
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

/**
 * 
 * @param {HTMLElement} parent 
 * @param {string} txt 
 * @param {string} id 
 * @param {string} inputname 
 * @returns {void}
 */
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
/**
 * 
 * @param {HTMLElement} parent 
 */
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
    /** @type {HTMLFormElement} */
    const telepules = form.querySelector("#elso")
    /** @type {HTMLFormElement} */
    const agazat = form.querySelector("#masodik")
    /** @type {HTMLFormElement} */
    const pelda = form.querySelector("#harmadik")
    /** @type {HTMLFormElement} */
    const pelda2 = form.querySelector("#negyedik")

    let valid = true;
    /**
     * @type {string}
     * arr
     */
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
    /**
     * @type {{telepules:string, agazat:string, pelda:string, pelda2?:string}}
     */
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
const jsform = document.getElementById("jsform")
jsform.addEventListener("submit", function (event){
    event.preventDefault();

    const j_form = event.target

    //input js id
    const telepules1 = j_form.querySelector("#elso")
    const agazat1 = j_form.querySelector("#masodik")
    const pelda1 = j_form.querySelector("#harmadik")
    const agazat2 = j_form.querySelector("#negyedik")
    const pelda2 = j_form.querySelector("#otodik")

    let val = true
    const field = [telepules1, agazat1, pelda1]

for (const inp of field){
    const div = inp.parentElement;
    const span = div.querySelector("span");
    if (inp.value === ""){
        span.classList.remove("hide");
        span.classList.add("error");
        span.innerText = "A mező kitöltése kötelező";
        val = false;
    } else {
        span.classList.remove("error");
        span.classList.add("hide");
        span.innerText = "";
    }
}



    if (!val) return;

    /**
     * @type {{telepules1:string, agazat1:string, pelda1:string, agazat2?:string, pelda2?:string}}
     */
    const ertek_obj = {
        telepules1: telepules1.value,
        agazat1: agazat1.value,
        pelda1: pelda1.value,
        agazat2: agazat2.value === "" ? undefined:agazat2.value,
        pelda2: pelda2.value === "" ? undefined:pelda2.value,
    }

    const jstbody = document.getElementById("jstbody")

    // első sor
    const tr1 = document.createElement("tr")
    jstbody.appendChild(tr1)

    const td1 = document.createElement("td")
    td1.innerText = ertek_obj.telepules1
    tr1.appendChild(td1)

    const td2 = document.createElement("td")
    td2.innerText = ertek_obj.agazat1
    tr1.appendChild(td2)

    const td3 = document.createElement("td")
    td3.innerText = ertek_obj.pelda1
    tr1.appendChild(td3)

    // ha van pelda2 akkor pelda1 cella colspan=2
    if (ertek_obj.pelda2) {
        td3.colSpan = 2
    }

    // ha van agazat2 vagy pelda2 akkor kell td1-re rowspan
    if (ertek_obj.agazat2 || ertek_obj.pelda2) {
        td1.rowSpan = "2"

        //második sor ha van extra tartalom
        const tr2 = document.createElement("tr")
        jstbody.appendChild(tr2)

        if (ertek_obj.agazat2) {
            const td4 = document.createElement("td")
            td4.innerText = ertek_obj.agazat2
            tr2.appendChild(td4)
        }

        if (ertek_obj.pelda2) {
            const td5 = document.createElement("td")
            td5.innerText = ertek_obj.pelda2
            tr2.appendChild(td5)
        }
    }

    jsform.reset();
})