/**
 * @type {{terulet: string, idoszak: string, esemeny: string, esemeny2?: string}[]} 
 */
const arr = [ //adatok fejlécen kívül
    {
        terulet: "Nyugat- és Dél-Európa",
        idoszak: "1494-1559",
        esemeny: "Itáliai háborúk",
    },
    {
        terulet: "Magyarország",
        idoszak: "1490-1516",
        esemeny: "II. Ulászló",
    },
    {
        terulet: "Európán kívül",
        idoszak: "1490-1500",
        esemeny: "Kolumbusz felfedezi Amerikát (1492)",
        esemeny2: "Vasco da Gama eljut Indiába (1498)",
    },
]

const table = document.createElement("table") //table létrehoz a html body-ban
document.body.append(table)

const thead = document.createElement("thead") //thead csinál hozzáfűz table
table.appendChild(thead)

const tr = document.createElement("tr") // fejléc sor létrehozása
thead.appendChild(tr)

const th1 = document.createElement("th") //th csinál hozzárak tr-hez + adat (fejléc cellák létrehozása + adat)
tr.appendChild(th1)
th1.innerText = "Terület"

const th2 = document.createElement("th") //th csinál hozzárak tr-hez + adat
tr.appendChild(th2)
th2.innerText = "Időszak"

const th3 = document.createElement("th") //th csinál hozzárak tr-hez + adat
tr.appendChild(th3)
th3.innerText = "Esemény"

const tbody = document.createElement("tbody")
table.appendChild(tbody)  //tbody hozzáadása a táblázathoz

for(const i of arr){ //arr tömb bejárása
    const tr = document.createElement("tr")
    tbody.appendChild(tr) //tr a tbody-hoz (új sor)

    //cellák
    const td1 = document.createElement("td")
    tr.appendChild(td1)
    td1.innerText = i.terulet //td1 tr-hez, majd feltöltés adattal

    const td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = i.idoszak //td2 tr-hez, majd feltöltés adattal

    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td3.innerText = i.esemeny //td3 tr-hez, majd feltöltés adattal

    if(i.esemeny2){ //ha obj-ban van esemyeny2
        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = i.esemeny2 //td4 tr-hez, majd feltöltés adattal
    }else{
        td3.colSpan = "2" //2db oszlop összevon
    }
}
