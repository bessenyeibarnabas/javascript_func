/**
 *  @type {[theme:string, time:string, scientist1: string scientist2:string]}
 */


const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]

const table = document.createElement("table")
document.body.appendChild(table) //táblázatot hozzáadja a html oldal "body" részéhez

const thead = document.createElement("thead")
table.appendChild(thead) // Létrehoz egy <thead> elemet (a táblázat fejrésze)

const tr = document.createElement("tr")
thead.appendChild(tr) //létrehoz egy sor elemet a fejléchez

// létrehoz 3db fejléc cella elemet
const th = document.createElement("th")
tr.appendChild(th)

const th2 = document.createElement("th")
tr.appendChild(th2)

const th3 = document.createElement("th")
tr.appendChild(th3)

// fejléc szövege
th.innerText="fizika területe"
th2.innerText="Időszak"
th3.innerText="Képviselők"

// táblázat törzse a html ben (tbody)
const tbody = document.createElement("tbody")
table.appendChild(tbody)




for (const item of arr){ // Végigmegy az 'arr' tömb elemein (minden elem egy sor adatait tartalmazza)
    const row = document.createElement("tr");
    tbody.appendChild(row); //új sor

    const td1 = document.createElement("td");
    td1.innerText = item.theme;
    row.appendChild(td1);     // Létrehoz egy cellát és beleírja a 'theme' értéket (fizika területe)

    const td2 = document.createElement("td");
    td2.innerText = item.time;
    row.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerText = item.scientist1;
    row.appendChild(td3);

    if (item.scientist2 == undefined){ // Ha nincs második tudós ('scientist2' nincs megadva)
        td3.colSpan = 2; 
    } else{
        const td4 = document.createElement("td");
        td4.innerText = item.scientist2;
        row.appendChild(td4); // Ha van második tudós, létrehoz még egy cellát neki
    }
}