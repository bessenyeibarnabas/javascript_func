
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

const fejlec = ["Szerző neve", "Korszak", "Szerelmek"]

generateHeader(table, fejlec)

const tbody = document.createElement("tbody")
tbody.id = "tbody"
table.appendChild(tbody)

renderTableBody(arr)