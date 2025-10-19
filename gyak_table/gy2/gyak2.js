/**
 * @type {{szerzo: string, mu: string, szereplo: string, szereplo2?: string}[]}
 */
const arr = [ //adatok fejlécen kívül
    {
        szerzo: "Katona József",
        mu: "Bánk bán",
        szereplo: "Gertrudis királyné",
    },
    {
        szerzo: "Mikszáth Kálmán",
        mu: "Beszterce ostroma",
        szereplo: "Pongrác István gróf",
        szereplo2: "Estella",
    },
    {
        szerzo: "Arany János",
        mu: "Toldi",
        szereplo: "Toldi Miklósé",
    },

]

const table = document.createElement("table") //táblázat létrehozása a html body-ban
document.body.appendChild(table)

const thead = document.createElement("thead") //thead csinál hozzáfűz table
table.append(thead)

const tr = document.createElement("tr") // fejléc sor létrehozása
thead.append(tr)

const fejlec = ["Szerző","Mű","Szereplők"] //fejléc adatai

for(const tart of fejlec){ //fejléc adatai bejárása
    const th = document.createElement("th")
    tr.appendChild(th) //th csinál hozzárak tr-hez
    th.innerText = tart //th-nak tartalmat adunk
}

const tbody = document.createElement("tbody")
table.appendChild(tbody) //tbody hozzáadása a táblázathoz

for(const i of arr){ //arr tömb bejárása
    const tr = document.createElement("tr")
    tbody.appendChild(tr) //tr a tbody-hoz

    const td1 = document.createElement("td")
    tr.appendChild(td1)
    td1.innerText = i.szerzo //td1 tr-hez, majd feltöltés adattal

    const td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = i.mu //td2 tr-hez, majd feltöltés adattal

    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td3.innerText = i.szereplo //td3 tr-hez, majd feltöltés adattal

    if(i.szereplo2){ //ha obj-ban van szereplo
        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = i.szereplo2 //td4 tr-hez, majd feltöltés adattal

    }else{
        td3.colSpan = "2" //2db oszlop összevon
    }
}