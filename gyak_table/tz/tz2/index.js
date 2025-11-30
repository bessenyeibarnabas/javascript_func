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

const fejlec = ["Ókori település", "Ágazat", "Példa"]

const thead = document.createElement("thead")
table.appendChild(thead)

const tr = document.createElement("tr")
thead.appendChild(tr)

for (item of fejlec){
    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = item

    if(item === "Példa"){
        th.colSpan=2
    }
}

const tbody = document.createElement("tbody")
table.appendChild(tbody)

for (const data of arr){
    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    const td1 = document.createElement("td")
    tr.appendChild(td1)
    td1.innerText = data.telepules

    const td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = data.agazat

    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td3.innerText = data.pelda

    if(data.pelda2){
        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = data.pelda2

    } else{
        td3.colSpan = "2";
    }
}

const selector = document.getElementById("tableselector")
const htmlDiv = document.getElementById("htmlsection")

selector.addEventListener("change", DropChecker);

function DropChecker() {
    if (selector.value === "js") {
        htmlDiv.classList.add("hide")
        jsDiv.classList.remove("hide")
    } else {
        htmlDiv.classList.remove("hide")
        jsDiv.classList.add("hide")
    }
}
DropChecker();
