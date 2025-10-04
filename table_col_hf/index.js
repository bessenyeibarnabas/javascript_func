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
document.body.appendChild(table)

const thead = document.createElement("thead")
table.appendChild(thead)

const tr = document.createElement("tr")
thead.appendChild(tr)

const th = document.createElement("th")
tr.appendChild(th)

const th2 = document.createElement("th")
tr.appendChild(th2)

const th3 = document.createElement("th")
tr.appendChild(th3)

th.innerText="fizika területe"
th2.innerText="Időszak"
th3.innerText="Képviselők"

const tbody = document.createElement("tbody")
table.appendChild(tbody)




for (const item of arr){
    const row = document.createElement("tr");
    tbody.appendChild(row);

    const td1 = document.createElement("td");
    td1.innerText = item.theme;
    row.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerText = item.time;
    row.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerText = item.scientist1;
    row.appendChild(td3);

    if (item.scientist2 == undefined){
        td3.colSpan = 2; 
    } else{
        const td4 = document.createElement("td");
        td4.innerText = item.scientist2;
        row.appendChild(td4);
    }
}