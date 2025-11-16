
/**
 * @type {{szerzo: string, korszak: string, szerelem1: string, szerelem2?: string}[]}
 */
const arr =[
    {
        szerzo: "Balassi Bálint",
        korszak: "reformáció",
        szerelem1: "Losonczy Anna",
        szerelem2: "Dobó Krisztina",
    },

    {
        szerzo: "Csokonai Vitéz Mihály",
        korszak: "felvilágosodás",
        szerelem1: "Vajda Juliána",
    },

    {
        szerzo: "Petőfi Sándor",
        korszak: "magyar romantika",
        szerelem1: "Mednyánszky Berta",
        szerelem2: "Szendrey Júlia",
    },

    {
        szerzo: "Ady Endre",
        korszak: "20. század",
        szerelem1: "Léda",
        szerelem2: "Csinszka",
    },
]

const table = document.createElement("table")
document.body.appendChild(table)

const thead = document.createElement("thead")
table.appendChild(thead)

fejlec = ["Szerző neve", "Korszak", "Szerelmek"]

const tr = document.createElement("tr")
thead.appendChild(tr)

for (const i of fejlec){
    const th = document.createElement("th")
    th.innerText = i

    if (i == "Szerelmek") {
        th.colSpan = "2"
    }

    tr.appendChild(th)
}

const tbody = document.createElement("tbody")
table.appendChild(tbody)

for (const item of arr){

    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    const td = document.createElement("td")
    tr.appendChild(td)
    td.innerText = item.szerzo

    const td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = item.korszak

    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td3.innerText = item.szerelem1

    if (item.szerelem2){
        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = item.szerelem2
    } else{
        td3.colSpan = "2"

    }
}
