/**
 * @type {{telepules: string, agazat: string, pelda: string, agazat2?: string, pelda2?: string}[]}
 */
const arr = [
    { telepules: "Athén", agazat: "politika", pelda: "demokrácia", agazat2: "tudomány", pelda2: "filozófia" },
    { telepules: "Egyiptom", agazat: "mezőgazdaság", pelda: "csatornák" },
    { telepules: "Spárta", agazat: "neveléstudomány", pelda: "agogé", agazat2: "harcászat", pelda2: "hoplita" },
];

const jsDiv = document.getElementById("jssection");

// --- JS TÁBLÁZAT ---
const table = document.createElement("table");
jsDiv.appendChild(table);

const fejlec = ["Ókori település", "Ágazat", "Példa"];
const thead = document.createElement("thead");
table.appendChild(thead);

const trHead = document.createElement("tr");
thead.appendChild(trHead);
for (const f of fejlec) {
    const th = document.createElement("th");
    th.innerText = f;
    trHead.appendChild(th);
}

const tbody = document.createElement("tbody");
tbody.id = "jstbody";
table.appendChild(tbody);

// --- KIINDULÓ ADATOK JS TÁBLÁBA ---
for (const item of arr) {
    addToJsTable(item);
}

// --- CHECKBOX ---
const checkbox = document.getElementById("tableselector");
const htmlDiv = document.getElementById("htmlsection");
function CheckboxChange() {
    if (checkbox.checked) {
        htmlDiv.classList.add("hide");
        jsDiv.classList.remove("hide");
    } else {
        jsDiv.classList.add("hide");
        htmlDiv.classList.remove("hide");
    }
}
checkbox.addEventListener("change", CheckboxChange);
CheckboxChange();

// --- JS FORM GENERÁLÁS ---
function generateForm(parent, txt, id, inputname) {
    const div = document.createElement("div");
    parent.appendChild(div);

    const label = document.createElement("label");
    label.htmlFor = id;
    label.innerText = txt;
    div.appendChild(label);
    generateBr(div);

    const input = document.createElement("input");
    input.type = "text";
    input.id = id;
    input.name = inputname;
    div.appendChild(input);
    generateBr(div);

    const span = document.createElement("span");
    span.classList.add("hide");
    div.appendChild(span);
    generateBr(div);
}

function generateBr(parent) {
    const br = document.createElement("br");
    parent.appendChild(br);
}

// --- JS FORM ---
const jsForm = document.createElement("form");
jsDiv.appendChild(jsForm);
jsForm.id = "jsform";

generateForm(jsForm, "Ókori település", "elso", "telepules");
generateForm(jsForm, "Ágazat1", "masodik", "agazat1");
generateForm(jsForm, "Példa1", "harmadik", "pelda1");
generateForm(jsForm, "Ágazat2", "negyedik", "agazat2");
generateForm(jsForm, "Példa2", "otodik", "pelda2");

const submitJs = document.createElement("input");
submitJs.type = "submit";
submitJs.value = "Hozzáad_JS";
jsForm.appendChild(submitJs);

// --- KÖZÖS VALIDÁCIÓ ---
function validateRequired(inputs) {
    let valid = true;
    for (const inp of inputs) {
        const div = inp.parentElement;
        const span = div.querySelector("span");
        if (inp.value === "") {
            span.classList.remove("hide");
            span.innerText = "A mező kitöltése kötelező";
            valid = false;
        } else {
            span.classList.add("hide");
            span.innerText = "";
        }
    }
    return valid;
}

// --- JS TÁBLÁZAT HOZZÁADÁS ---
function addToJsTable(obj) {
    const tbody = document.getElementById("jstbody");

    const tr1 = document.createElement("tr");
    tbody.appendChild(tr1);

    const td1 = document.createElement("td");
    td1.innerText = obj.telepules;
    tr1.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerText = obj.agazat;
    tr1.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerText = obj.pelda;
    tr1.appendChild(td3);

    if (obj.agazat2) {
        td1.rowSpan = "2";

        const tr2 = document.createElement("tr");
        tbody.appendChild(tr2);

        const td4 = document.createElement("td");
        td4.innerText = obj.agazat2;
        tr2.appendChild(td4);

        const td5 = document.createElement("td");
        td5.innerText = obj.pelda2;
        tr2.appendChild(td5);
    }
}


// --- HTML FORM SUBMIT ---
const htmlForm = document.getElementById("htmlform");
htmlForm.addEventListener("submit", function(e){
    e.preventDefault();

    const telepules = htmlForm.querySelector("#elso");
    const agazat = htmlForm.querySelector("#masodik");
    const pelda1 = htmlForm.querySelector("#harmadik");
    const pelda2 = htmlForm.querySelector("#negyedik");

    if (!validateRequired([telepules, agazat, pelda1])) return;

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

// --- JS FORM SUBMIT ---
jsForm.addEventListener("submit", function(e){
    e.preventDefault();

    const telepules = jsForm.querySelector("#elso");
    const agazat = jsForm.querySelector("#masodik");
    const pelda = jsForm.querySelector("#harmadik");
    const agazat2 = jsForm.querySelector("#negyedik");
    const pelda2 = jsForm.querySelector("#otodik");

    if (!validateRequired([telepules, agazat, pelda])) return;

    const obj = {
        telepules: telepules.value,
        agazat: agazat.value,
        pelda: pelda.value,
        agazat2: agazat2.value !== "" ? agazat2.value : undefined,
        pelda2: pelda2.value !== "" ? pelda2.value : undefined
    };

    addToJsTable(obj);
    jsForm.reset();
});
