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

checkbox.addEventListener("change", () =>{
    if (checkbox.checked) {
        htmlDiv.classList.add("hide")
        jsDiv.classList.remove("hide")
    } else {
        jsDiv.classList.add("hide")
        htmlDiv.classList.remove("hide")
    }
})