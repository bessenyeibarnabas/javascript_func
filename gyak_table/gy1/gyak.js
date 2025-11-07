/**
* @type {{terulet: string, evszam: string, esemyeny: string, evszam2?: string, esemyeny2?: string}[]}
 */
const arr = [ //table adatai kivéve a fejlécé
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

const table = document.createElement("table") //táblázat létrehozása a html body-ban
document.body.appendChild(table)

const thead = document.createElement("thead") //thead csinál hozzáfűz table
table.appendChild(thead)

const tr = document.createElement("tr") //fejléc sor létrehozása thead-hez
thead.appendChild(tr)

const fejlec = ["Terület","Évszám","Esemény"] //fejléc adatai

for( const tart of fejlec){ //fejléc adatai bejárása
    const th = document.createElement("th")
    tr.appendChild(th) //th csinál hozzárak tr-hez
    th.innerText = tart //th-nak tartalmat adunk
}

//tbody
const tbody = document.createElement("tbody")
table.appendChild(tbody) //tbody létrehoz table-ben

for(const i of arr){ //arr tömb bejárása
    const tr = document.createElement("tr")
    tbody.appendChild(tr) //tr a tbody-hoz

    const td1 = document.createElement("td")
    tr.appendChild(td1)
    td1.innerText = i.terulet //td1 tr-hez, majd feltöltés adattal

    const td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = i.evszam //td2 tr-hez, majd feltöltés adattal

    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td3.innerText = i.esemyeny //td3 tr-hez, majd feltöltés adattal

    if(i.evszam2){ //ha obj-ban van evszam2
        td1.rowSpan = "2" //két sor összevon

        const tr = document.createElement("tr")
        tbody.appendChild(tr) //tr a tbody-hoz (sor) 2. adatok miatt

        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = i.evszam //td4 tr-hez, majd feltöltés adattal

        const td5 = document.createElement("td")
        tr.appendChild(td5)
        td5.innerText = i.esemyeny2 //td5 tr-hez, majd feltöltés adattal
    }
}