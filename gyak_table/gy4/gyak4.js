
const arr = [
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

const table = document.createElement("table")
document.body.append(table)

const thead = document.createElement("thead")
table.appendChild(thead)

const tr = document.createElement("tr")
thead.appendChild(tr)

const th1 = document.createElement("th")
tr.appendChild(th1)
th1.innerText = "Terület"

const th2 = document.createElement("th")
tr.appendChild(th2)
th2.innerText = "Időszak"

const th3 = document.createElement("th")
tr.appendChild(th3)
th3.innerText = "Esemény"

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
    td2.innerText = i.idoszak

    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td3.innerText = i.esemeny

    if(i.esemeny2){
        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = i.esemeny2
    }else{
        td3.colSpan = "2"
    }
}
