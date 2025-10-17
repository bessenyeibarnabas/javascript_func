
/**
 * @type {[szerzo: string, mu: string, mufaj: string, mu2: string, mufaj2: string]}
 */
const arr = [
    {
        szerzo: "Petőfi Sándor",
        mu: "A helység kalapácsa",
        mufaj: "Elbeszélő költemény",
        mu2: "Az apostol",
        mufaj2: "Elbeszélő költemény",
    },
    {
        szerzo: "Janus Pannonius",
        mu: "Pannónia dicsérete",
        mufaj: "Epigramma",
    },
    {
        szerzo: "Vörösmarty Mihály",
        mu: "A vén cigány",
        mufaj: "Rapszódia",
        mu2: "Szózat",
        mufaj2: "Szózat",
    },
]

const ht = ["Szerző","Mű","Műfaj"]

const table = document.createElement("table")
document.body.appendChild(table)

const thead = document.createElement("thead")
table.appendChild(thead)

const tr = document.createElement("tr")
thead.appendChild(tr)

for( const ti of ht){
    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = ti
}

const tbody = document.createElement("tbody")
table.appendChild(tbody)

for(const i of arr){
    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    const td1 = document.createElement("td")
    tr.appendChild(td1)
    td1.innerText = i.szerzo

    const td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = i.mu

    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td3.innerText = i.mufaj

    if(i.mu2){
        td1.rowSpan = "2"

        const tr = document.createElement("tr")
        tbody.appendChild(tr)

        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = i.mu2

        const td5 = document.createElement("td")
        tr.appendChild(td5)
        td5.innerText = i.mufaj2
    }
}