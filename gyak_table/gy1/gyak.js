/**
 * @type {[terulet: string. evszam: string, esemyeny: string, evszam2: string, esemyeny2: string]}
 */
const arr = [
    {
        terulet: "Amerika",
        evszam: "1861–1865",
        esemyeny: "polgárháború",
    },
    {
        terulet: "Európa",
        evszam: "1914 június 28",
        esemyeny: "merénylet Szarajevóban",
        evszam2: "1914 július 28",
        esemyeny2: "Első világháború"
    },
    {
        terulet: "Oroszország",
        evszam: "1917",
        esemyeny: "oroszországi forradalom és bolsevik hatalomátvéte",
        evszam2: "1922",
        esemyeny2: "Szovjetunió megalakulása"
    },
]

const table = document.createElement("table")
document.body.appendChild(table)

const thead = document.createElement("thead")
table.appendChild(thead)

const tr = document.createElement("tr")
thead.appendChild(tr)

const fejlec = ["Terület","Évszám","Esemény"]

for( const tart of fejlec){
    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = tart
}

const tbody = document.createElement("tbody")
table.appendChild(tbody)

for(const i of arr){
    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    const td1 = document.createElement("td")
    tr.appendChild(td1)
    td1.innerText = i.terulet

    const td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = i.evszam

    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td3.innerText = i.esemyeny

    if(i.evszam2){
        td1.rowSpan = "2"

        const tr = document.createElement("tr")
        tbody.appendChild(tr)

        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = i.evszam

        const td5 = document.createElement("td")
        tr.appendChild(td5)
        td5.innerText = i.esemyeny2
    }
}