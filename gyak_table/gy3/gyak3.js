
/**
* @type {{szerzo: string, mu: string, mufaj: string, mu2?: string, mufaj2?: string}[]}
 */
const arr = [ //table adatai kivéve a fejlécé
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

const ht = ["Szerző","Mű","Műfaj"] //fejléc adatai

const table = document.createElement("table")  //táblázat létrehozása a html body-ban
document.body.appendChild(table)

const thead = document.createElement("thead") //thead csinál hozzáfűz table
table.appendChild(thead)

const tr = document.createElement("tr") //fejléc sor létrehozása thead-hez
thead.appendChild(tr)

for( const ti of ht){ //fejléc adatai bejárása
    const th = document.createElement("th")
    tr.appendChild(th) //th csinál hozzárak tr-hez
    th.innerText = ti //th-nak tartalmat adunk
}

const tbody = document.createElement("tbody")
table.appendChild(tbody) //tbody létrehoz table-ben

for(const i of arr){ //arr tömb bejárása
    const tr = document.createElement("tr")
    tbody.appendChild(tr) //tr a tbody-hoz

    const td1 = document.createElement("td") //td1 tr-hez, majd feltöltés adattal
    tr.appendChild(td1)
    td1.innerText = i.szerzo

    const td2 = document.createElement("td") //td2 tr-hez, majd feltöltés adattal
    tr.appendChild(td2)
    td2.innerText = i.mu

    const td3 = document.createElement("td") //td3 tr-hez, majd feltöltés adattal
    tr.appendChild(td3)
    td3.innerText = i.mufaj

    if(i.mu2){ //ha obj-ban van mu2
        td1.rowSpan = "2" //két sor összevon

        const tr = document.createElement("tr")
        tbody.appendChild(tr) //tr a tbody-hoz (sor) 2. adatok miatt

        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = i.mu2 //td4 tr-hez, majd feltöltés adattal

        const td5 = document.createElement("td")
        tr.appendChild(td5)
        td5.innerText = i.mufaj2 //td5 tr-hez, majd feltöltés adattal
    }
}